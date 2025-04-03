import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import ProfilAvatar from '../assets/profil/avatars/1.png';
import '../style/profil.css';

export const Profil = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={false}/>
                <main>
                    <div class="mainblock">
                        <div class="mainblocktop">
                            <img src={ProfilAvatar} alt="Аватарка" />
                            <div class="mainblocktopinfo">
                                <span>username</span>
                                <div class="bio">
                                    <span>bio</span>
                                </div>

                            </div>

                        </div>
                        <div class="mainblockbuttom">
                            <div class="stats">
                                <div class="statsblock">
                                    <h2>Статистика</h2>
                                    <dt>Дата регистрации:</dt>
                                    <dd>00.00.00</dd>
                                    <dt>Статус:</dt>
                                    <dd>Гость</dd>
                                </div>
                                
                            </div>

                            <div class="form">
                                <form>
                                    <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">правилами</a> <input type="checkbox" class="custom-checkbox"></input></span>
                                    <span>Чтобы зайти на сервер Вы должны быть ознакомлены с <a href="#">политикой</a> <input type="checkbox" class="custom-checkbox"></input></span>
                                    <button>Подать заявку</button>
                                </form>
                            </div>

                        </div>
                        
                        

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}