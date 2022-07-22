import React from "react";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import Preloader from "../components/Preloader/Preloader";
import Search from "../components/Search/Search";
import styles from './Main.module.scss';

const Main = ({movies, series, searchResult, isSearching, isLoading, search}) => {
    console.log(searchResult.length);
    return (
        <main className={`${styles.main} main`}>
            <Banner />
            <section className={styles.main__section}>
                <Search search={search}/>
                {
                    isLoading  ? <Preloader /> : ( searchResult.length ? (
                                    <div className={styles.main__search}>
                                        <h3 className="main__subtitle">Search result:</h3>
                                        <Cards data={searchResult} cardsCount={10} />
                                    </div>
                                ) : null
                            )
                }
                
            </section>
            {
                movies.length ? (
                    <section className={styles.main__section}>
                        <h3 className="main__subtitle">Movies</h3>
                        <Cards data={movies} cardsCount={5} />
                        <Button className={`${styles.main__more} transparent`}>More movies</Button>
                    </section>
                ) : null
            }
            {
                series.length ? (
                    <section className={styles.main__section}>
                        <h3 className="main__subtitle">Series</h3>
                        <Cards data={series} cardsCount={5} />
                        <Button className={`${styles.main__more} transparent`}>More series</Button>
                    </section>
                ) : null
            }
            
            
        </main>
    )
}

export default Main;