import React from "react";

const Card = ({styles, data}) => {
    return (
        <div className={styles.card}>
            <img src={data.Poster} className={styles.card__image} alt={data.Title}/>
            <div className={styles.card__title}>{data.Title} ({data.Year})</div>
        </div>
    )
}

export default Card;