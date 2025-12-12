import React from 'react';

import {Important1} from './ui/Important1';
import {Important2} from './ui/Important2';
import {Important3} from './ui/Important3';
import {Important4} from './ui/Important4';
import {ImportantButton} from './ui/BottomRules'
import styles from '../../shared/style/important/important.module.css';

export const Important = (props)=>{
    
    return(
        <React.Fragment>
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
        </React.Fragment>
    )
}