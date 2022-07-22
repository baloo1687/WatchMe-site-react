import React from "react";
import styles from './Banner.module.scss';
import LaptopPng from '../../img/laptop.png';
import Search from "../Search/Search";

export default function Banner ({search}) {
    return (
        <div className={`${styles.banner} main__banner`}>
            <div className={styles.banner__text}>
                <h1 className={styles.banner__title}>A library of movies and TV shows you can watch enywhere</h1>
                <h2 className={styles.banner__subtitle}>Movies, TV Shows and much more without limits</h2>
                <Search search={search}/>
            </div>
            <div className={styles.banner__images}>
                <img className={styles.banner__image} src={LaptopPng} alt="Banner" />
            </div>
        </div>
    )
}