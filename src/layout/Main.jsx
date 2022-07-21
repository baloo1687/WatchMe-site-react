import React from "react";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import styles from './Main.module.scss';

const Main = ({movies, series}) => {
    return (
        <main className={`${styles.main} main`}>
            <Banner />
            {
                movies.length ? (
                    <section className={styles.main__section}>
                        <h3 className="main__subtitle">Movies</h3>
                        <Cards data={movies} />
                        <Button className={`${styles.main__more} transparent`}>More movies</Button>
                    </section>
                ) : null
            }
            {
                series.length ? (
                    <section className={styles.main__section}>
                        <h3 className="main__subtitle">Series</h3>
                        <Cards data={series} />
                        <Button className={`${styles.main__more} transparent`}>More series</Button>
                    </section>
                ) : null
            }
            
            
        </main>
    )
}

export default Main;