import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import React from 'react';

class App extends React.Component {
  state = {
    movies: [],
    series: []
  }

  moviesUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=26934f09&s=Avengers&plot=full&type=movie';
  seriesUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=26934f09&s=Friends&plot=full&type=series';

  fetchApi(url, type) {
      fetch(url)
      .then(response => response.json())
      .then(data => {
          this.setState({[type]: data.Search});
      })
  }

  componentDidMount() {
    for (let key in this.state) {
      this.fetchApi(this[key + 'Url'], key);
    }
      
  }

  render () {
    return (
      <>
        <Header />
        <Main movies={this.state.movies} series={this.state.series} />
        <Footer />
      </>
    )
  }
    
}

export default App;
