import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <svg className={styles.svg} >
                <polyline className={`${styles.line__cornered} ${styles.stroke__animation}`} points="0,0 100,0 100,100" strokeWidth="5" fill="none"></polyline>
                <polyline className={`${styles.line__cornered} ${styles.stroke__animation}`} points="0,0 0,100 100,100" strokeWidth="5" fill="none"></polyline>
            </svg>
        </div>
    )
}

export default Preloader;