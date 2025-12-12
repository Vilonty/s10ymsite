import React from 'react';

import { MainBlock } from './ui/MainBlock'
import { Block2 } from './ui/Block2'
import { Block3 } from './ui/Block3'
import { Block4 } from './ui/Block4'
import { Block5 } from './ui/Block5'
import styles from '../../shared/style/landing/main/landing.module.css';

export const Landing = (props)=>{
    return(
        <React.Fragment>
            <main>
                <MainBlock />
                
                <div className={styles.blocklanding}>

                    <Block2 />
                    <Block3 />
                    <Block4 />
                    <Block5 />
                                   
                </div>
                
            </main>
        </React.Fragment>
    )
}