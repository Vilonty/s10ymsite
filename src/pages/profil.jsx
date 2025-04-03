import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { TopBLock } from '../components/profil/topProfil/topBlock';
import { ButtomBlock } from '../components/profil/buttomBlock/buttomBlock';
import styles from '../style/profil/profil.module.css';

export const Profil = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={false}/>
                <main class={styles.mainProfil}>
                    <div class={styles.mainblockProfil}>
                        <TopBLock />
                        <ButtomBlock />
                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}