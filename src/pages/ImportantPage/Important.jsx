import React from 'react';
import {Important1} from './ui/Important1';
import {Important2} from './ui/Important2';
import {Important3} from './ui/Important3';
import {Important4} from './ui/Important4';
import {ImportantButton} from './ui/BottomRules';
import styles from '../../shared/style/rules/main/rules.module.css';

export const Important = ()=>{
    
  return(
    <React.Fragment>
      <main className={styles.rulesPage}>
        <div className={styles.rulesContainer}>
          <h2 className={styles.rulesTitle}>важное</h2>
          <div className={styles.rulesContent}>
            <Important1 />
            <Important2 />
            <Important3 />
            <Important4 />
            <ImportantButton />
          </div>                                   
        </div>
      </main>
    </React.Fragment>
  );
};