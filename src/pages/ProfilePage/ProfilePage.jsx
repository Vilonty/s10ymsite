import React from 'react';

import { TopBLock } from './ui/TopBlock';
import { ButtomBlock } from './ui/BottomBlock';
import styles from '../../shared/style/profil/profil.module.css';

export const Profil = (props)=>{
    
    return(
        <React.Fragment>
            <main class={styles.mainProfil}>
                <div class={styles.mainblockProfil}>
                    <TopBLock />
                    <ButtomBlock />
                </div>

            </main>
        </React.Fragment>
    )
}