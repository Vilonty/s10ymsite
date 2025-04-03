import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { TopBlock } from '../components/about/topBlock/topBlock';
import { ButtomBlock } from '../components/about/botomBlock/buttomBlock';
import styles from'../style/about/main/about.module.css';

export const Aboutpage = (props)=>{
    
    return(
        <React.Fragment>
            <Header/>
            <main class={styles.mainabout}>
                    <div class={styles.mainblockabout}>
                        <h2>о сервере</h2>
                        <TopBlock />
                        <ButtomBlock /> 
                        

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}