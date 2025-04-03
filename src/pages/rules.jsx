import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import {Rules1} from '../components/rules/rulesBlock/rules1';
import {Rules2} from '../components/rules/rulesBlock/rules2';
import {Rules3} from '../components/rules/rulesBlock/rules3';
import {Rules4} from '../components/rules/rulesBlock/rules4';
import {Rules5} from '../components/rules/rulesBlock/rules5';
import {Rules6} from '../components/rules/rulesBlock/rules6';
import {Rules7} from '../components/rules/rulesBlock/rules7';
import {Rules8} from '../components/rules/rulesBlock/rules8';
import {RulesButtom} from '../components/rules/lastBlock/buttomRules';
import styles from '../style/rules/main/rules.module.css';

export const Rules = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} blog={false}/>
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
            <Footer />
        </React.Fragment>
    )
}