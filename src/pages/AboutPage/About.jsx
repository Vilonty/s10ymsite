import React from 'react';

import { TopBlock } from './ui/TopBlock';
import { ButtomBlock } from './ui/BottomBlock';
import styles from '../../shared/style/about/main/about.module.css';

export const Aboutpage = ()=>{
    
  return(
    <React.Fragment>
      <main className={styles.mainabout}>
        <div className={styles.mainblockabout}>
          <h2>о сервере</h2>
          <TopBlock />
          <ButtomBlock /> 
        </div>
      </main>
    </React.Fragment>
  );
};