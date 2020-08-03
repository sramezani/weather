import React from 'react';

import styles from './loading.module.scss';

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.loading}>
                <div className={styles.loadingLetter}>L</div>
                <div className={styles.loadingLetter}>o</div>
                <div className={styles.loadingLetter}>a</div>
                <div className={styles.loadingLetter}>d</div>
                <div className={styles.loadingLetter}>i</div>
                <div className={styles.loadingLetter}>n</div>
                <div className={styles.loadingLetter}>g</div>
                <div className={styles.loadingLetter}>.</div>
                <div className={styles.loadingLetter}>.</div>
                <div className={styles.loadingLetter}>.</div>
            </div>
        </div>
    );
}
