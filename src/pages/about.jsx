import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../style/about.css';

export const About = (props)=>{
    
    return(
        <React.Fragment>
            <Header/>
            <main>
                    <div class="mainblock">
                        <h2>о сервере</h2>

                        <div class='rules-common rules-dark'>

                            <span class="title">S10YM - survival 10 year minecraft (выживание 10 лет в майнкрафтe) </span>

                            <span>Суть проекта в том чтобы сделать лецлей длиною в 10 лет.  Начало проекта 14/11/2022, конец будет 14/11/2032 на протяжение всего этого времени карта мира вайпаться не будет.</span>
                            <span>Сервер является сервером выживания. </span>
                            <span>На сервере нет какого-то централизованного государства. Все города/ базы/ кланы являются по сути группами общин, взаимодействующих между собой. Поэтому каждая из них имеет свои отдельные правила/ возможно валюты/ политики и т.д. Но при этом все общины должны подчиняться общим правилам сервера.</span>
                            
                            <span class="title2">При этом каждый желающий имеет возможность принять участие в данном проекте</span>

                            
                        </div>

                        <div class='buttom-rules rules-light'>
                            <span>статистика</span>
                            <ul>
                                <li>Возраст мира: 2 года 5 месяца </li>
                                <li>День в мире 54000+</li>
                                <li>Вес мира: 40гб+ </li>
                                <li>Людей заходивших когда-либо: 1110+</li>
                                <li>Забаненых игроков когда-либо: 25+</li>
                                <li>Статистика на момент 02/04/2025</li>
                            </ul>
                        </div>

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}