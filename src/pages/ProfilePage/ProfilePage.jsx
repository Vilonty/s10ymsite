import React from 'react';

import { TopBLock } from './ui/TopBlock';
import { ButtomBlock } from './ui/BottomBlock';
import styles from '../../shared/style/profil/profil.module.css';

export const Profil = ()=>{
    
  return(
    <React.Fragment>
      <main className={styles.mainProfil}>
        <div className={styles.mainblockProfil}>
          <TopBLock />
          <ButtomBlock />
        </div>

      </main>
    </React.Fragment>
  );
};