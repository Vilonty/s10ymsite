import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../style/request.css';

export const Request = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} register={false}/>
                <main>
                    <div class="mainblock">

                        <h2>заявка на вступление</h2>
                        

                        <form class='form'>
                            
                            <div class="title">введиете свой ник</div>
                            <div class="nickinput">
                                <input maxlength="16" minLength="3"></input>
                                <button>?</button>
                            </div>
                            
                            <div class="title">расскажите о опыте игры</div>
                            <div class="expiriens">
                                <textarea maxlength="500" minLength="10"></textarea>
                                <button>?</button>
                            </div>
                            
                            <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">правилами</a> <input type="checkbox" class="custom-checkbox"></input></span>
                            <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">политикой</a> <input type="checkbox" class="custom-checkbox"></input></span>
                            <button class="downButton">Подать заявку</button>
                            <span class="downSpan">Заявки принимаются не автоматически!</span>
                        </form>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}