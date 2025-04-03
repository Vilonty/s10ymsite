import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../style/authorization.css';

export const Authorization = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} register={true} account={false}/>
            <main>
                    <div class="mainblock">

                        <h2>авторизация</h2>
                        

                        <form class='form'>
                            
                            <div class="title">email</div>
                            <div class="textInput">
                                <input maxlength="16" minLength="3"></input>
                                <button>забыли логин?</button>
                            </div>

                            <div class="title">пароль</div>
                            <div class="textInput">
                                <input maxlength="16" minLength="3"></input>
                                <button>забыли пароль?</button>
                            </div>

                            <button class="downButton">войти</button>

                        </form>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}