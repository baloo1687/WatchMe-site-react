import React from 'react';
import styles from './Search.module.scss';

export default class Search extends React.Component {
    state = {
        search: '',
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.props.search(this.state.search);
        }
    }
    
    render() {
        return (
            <div className={styles.search}>
                <input 
                    className={styles.search__input}
                    type='search'
                    placeholder='Search movies or series'
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={(e) => this.handleKeyDown(e)}
                />
            </div>
        )
    }
    
}