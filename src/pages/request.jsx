import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import styles from '../style/request/main/request.module.css';

export const Request = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} register={false}/>
                <main>
                    <div class={styles.mainrequest}>

                        <h2>заявка на вступление</h2>
                        

                        <form class={styles.form}>
                            
                            <div class={styles.title}>введиете свой ник</div>
                            <div class={styles.nickinput}>
                                <input maxlength="16" minLength="3"></input>
                                <button>?</button>
                            </div>
                            
                            <div class={styles.title}>расскажите о опыте игры</div>
                            <div class={styles.expiriens}>
                                <textarea maxlength="500" minLength="10"></textarea>
                                <button>?</button>
                            </div>
                            
                            <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">правилами</a> <input type="checkbox" class={styles.custom-checkbox}></input></span>
                            <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">политикой</a> <input type="checkbox" class={styles.custom-checkbox}></input></span>
                            <button class={styles.downButton}>Подать заявку</button>
                            <span class={styles.downSpan}>Заявки принимаются не автоматически!</span>
                        </form>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}