import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import {Important1} from '../components/important/blocksImportant/important1';
import {Important2} from '../components/important/blocksImportant/important2';
import {Important3} from '../components/important/blocksImportant/important3';
import {Important4} from '../components/important/blocksImportant/important4';
import {ImportantButton} from '../components/important/lastBlock/buttomRules'
import styles from '../style/important/important.module.css';

export const Important = (props)=>{
    
    return(
        <React.Fragment>
            <Header/>
            <main class={styles.mainImportant}>
                <div class={styles.mainblock}>
                        <h2>важное</h2>

                        <Important1 />
                        <Important2 />
                        <Important3 />
                        <Important4 />
                        <ImportantButton />
                                   
                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}