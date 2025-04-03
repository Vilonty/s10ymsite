import React from 'react';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { MainBlock } from '../components/landing/mainblock/mainblock'
import { Block2 } from '../components/landing/block2/block2'
import { Block3 } from '../components/landing/block3/block3'
import { Block4 } from '../components/landing/block4/block4'
import { Block5 } from '../components/landing/block5/block5'
import styles from '../style/landing/main/landing.module.css';

export const Landing = (props)=>{
    return(
        <React.Fragment>
            <Header />
            <main>
                <MainBlock />
                
                <div className={styles.blocklanding}>

                    <Block2 />
                    <Block3 />
                    <Block4 />
                    <Block5 />
                                   
                </div>
                
            </main>
            <Footer />
        </React.Fragment>
    )
}