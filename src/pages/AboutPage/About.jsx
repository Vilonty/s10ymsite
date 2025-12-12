import React from 'react';
import { TopBlock } from './ui/TopBlock';
import { ButtomBlock } from './ui/BottomBlock';
import styles from '../../shared/style/about/main/about.module.css';

export const Aboutpage = () => {
  return(
    <React.Fragment>
      <main className={styles.aboutPage}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>о сервере</h2>
          <div className={styles.aboutContent}>
            <TopBlock />
            <ButtomBlock /> 
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};