import React from 'react';

import {Rules1} from './ui/Rules1';
import {Rules2} from './ui/Rules2';
import {Rules3} from './ui/Rules3';
import {Rules4} from './ui/Rules4';
import {Rules5} from './ui/Rules5';
import {Rules6} from './ui/Rules6';
import {Rules7} from './ui/Rules7';
import {Rules8} from './ui/Rules8';
import {RulesButtom} from './ui/BottomRules';
import styles from '../../shared/style/rules/main/rules.module.css';

export const Rules = (props)=>{
    
    return(
        <React.Fragment>
            <main class={styles.mainrules}>
                <div class={styles.mainblock}>
                    <h2>правила</h2>

                    <Rules1 />
                    <Rules2 />
                    <Rules3 />
                    <Rules4 />
                    <Rules5 />
                    <Rules6 />
                    <Rules7 />
                    <Rules8 />
                    <RulesButtom />
                                
                </div>

            </main>
        </React.Fragment>
    )
}