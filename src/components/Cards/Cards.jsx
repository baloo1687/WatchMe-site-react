import React from "react";
import Card from "./Card";
import styles from './Cards.module.scss';

const Cards = ({data}) => {
    return (
        <div className={styles.cards}>
            {
                data.map((element, index) => {
                    return index <= 4 ? <Card key={element.imdbID} data={element} styles={styles} /> : null
                })
            }
        </div>
    )
}

export default Cards;