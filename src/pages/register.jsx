import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import styles from '../style/register/main/register.module.css';

export const Register = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} register={false}/>
            <main class={styles.registerMain}>
                    <div class={styles.mainblockRegister}>

                        <h2>регистрация</h2>
                        

                        <form class={styles.form}>
                            
                            <div class={styles.title}>email</div>
                            <div class={styles.textInput}>
                                <input maxlength="16" minLength="3"></input>
                            </div>

                            <div class={styles.title}>имя</div>
                            <div class={styles.textInput}>
                                <input maxlength="16" minLength="3"></input>
                            </div>

                            <div class={styles.title}>пароль</div>
                            <div class={styles.textInput}>
                                <input maxlength="16" minLength="3"></input>
                            </div>

                            <div class={styles.title}>повтор пароля</div>
                            <div class={styles.textInput}>
                                <input maxlength="16" minLength="3"></input>
                            </div>

                            
                            <span><input type="checkbox" class={styles.customCheckbox}></input> Согласие на обработку <a href="#">персональных данных</a> </span>
                            <button class={styles.downButton}>Зарегистрироваться</button>

                        </form>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}