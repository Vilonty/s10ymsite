import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import styles from '../style/authorization/authorization.module.css';

export const Authorization = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} register={true} account={false}/>
            <main class={styles.mainAuthorization}>
                    <div class={styles.mainblock}>

                        <h2>авторизация</h2>
                        

                        <form class={styles.form}>
                            
                            <div class={styles.title}>email</div>
                            <div class={styles.textInput}>
                                <input maxlength="16" minLength="3"></input>
                                <button>забыли логин?</button>
                            </div>

                            <div class={styles.title}>пароль</div>
                            <div class={styles.textInput}>
                                <input maxlength="16" minLength="3"></input>
                                <button>забыли пароль?</button>
                            </div>

                            <button class={styles.downButton}>войти</button>

                        </form>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}