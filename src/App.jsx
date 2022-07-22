import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import React from 'react';

class App extends React.Component {
  state = {
    movies: [],
    series: [],
    searchResult: [],
    isLoading: false
  }

  fetchApi = (url, type) => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
          this.setState({isLoading: false})
          this.setState({[type]: data.Search});
      })
  }

  search = (param) => {
    this.setState({isLoading: true})
    if (param) {
      this.fetchApi(`https://www.omdbapi.com/?i=tt3896198&apikey=26934f09&s=${param}`, 'searchResult');
    } else {
      this.setState({isLoading: false})
      this.setState({searchResult: []})
    }
  }

  componentDidMount = () => {
    this.fetchApi('https://www.omdbapi.com/?i=tt3896198&apikey=26934f09&s=Avengers&plot=full&type=movie', 'movies');
    this.fetchApi('https://www.omdbapi.com/?i=tt3896198&apikey=26934f09&s=Avengers&plot=full&type=series', 'series');
  }

  render () {
    return (
      <>
        <Header />
        <Main movies={this.state.movies} series={this.state.series} searchResult={this.state.searchResult} isLoading={this.state.isLoading} search={this.search}/>
        <Footer />
      </>
    )
  }
    
}

export default App;
