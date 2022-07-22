import React from "react";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import Preloader from "../components/Preloader/Preloader";
import styles from './Main.module.scss';

const Main = ({movies, series, searchResult, isLoading, search, error}) => {
    return (
        <main className={`${styles.main} main`}>
            <Banner search={search}/>
            <section className={styles.main__section}>
                {
                    isLoading ? <Preloader /> : ( searchResult.length ? (
                                    <div className={styles.main__search}>
                                        <h3 className="main__subtitle">Search result:</h3>
                                        <Cards data={searchResult} cardsCount={10} />
                                    </div>
                                ) : error ? <div className={styles.main__error}>Oops, {error}</div> : null 
                            )
                }
                
            </section>
            {
                movies.length ? (
                    <section className={styles.main__section}>
                        <h3 className="main__subtitle">Movies</h3>
                        <Cards data={movies} cardsCount={5} />
                        <Button className='transparent'>More movies</Button>
                    </section>
                ) : null
            }
            {
                series.length ? (
                    <section className={styles.main__section}>
                        <h3 className="main__subtitle">Series</h3>
                        <Cards data={series} cardsCount={5} />
                        <Button className='transparent'>More series</Button>
                    </section>
                ) : null
            }
            
            
        </main>
    )
}

export default Main;