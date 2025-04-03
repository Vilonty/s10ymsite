import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../style/register.css';

export const Register = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} register={false}/>
            <main>
                    <div class="mainblock">

                        <h2>регистрация</h2>
                        

                        <form class='form'>
                            
                            <div class="title">email</div>
                            <div class="textInput">
                                <input maxlength="16" minLength="3"></input>
                            </div>

                            <div class="title">имя</div>
                            <div class="textInput">
                                <input maxlength="16" minLength="3"></input>
                            </div>

                            <div class="title">пароль</div>
                            <div class="textInput">
                                <input maxlength="16" minLength="3"></input>
                            </div>

                            <div class="title">повтор пароля</div>
                            <div class="textInput">
                                <input maxlength="16" minLength="3"></input>
                            </div>

                            
                            <span><input type="checkbox" class="custom-checkbox"></input> Согласие на обработку <a href="#">персональных данных</a> </span>
                            <button class="downButton">Зарегистрироваться</button>

                        </form>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}