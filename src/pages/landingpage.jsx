import React from 'react';
import HLogo from '../assets/HeaderLogo/S10YM.png';
import Img1 from '../assets/landing/images/1.png';
import Img2 from '../assets/landing/images/2.png';
import Img3 from '../assets/landing/images/3.png';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../style/landing.css';

export const Landing = (props)=>{
    return(
        <React.Fragment>
            <Header />
            <main>
                <div className='mainblock'>
                    <img src={HLogo}/>
                </div>
                <div className='blocklanding'>
                    <div className='block2'>
                        <div className='block2left'>
                            <div className='info'>
                                <span>S10YM - это уникальный проект, посвященный выживанию в Minecraft на протяжении целых 10 лет.</span>
                                <span>Суть нашего начинания заключается в создании долгосрочного игрового мира, который будет существовать без вайпов на протяжении всего срока проекта.</span>
                            </div>
                            <div className='block2topimg'>
                                <img src={Img2}/>
                            </div>
                            
                        </div>
                        <div className='block2right'>
                            <div className='block2buttomimg'>
                                <img src={Img1}/>
                            </div>
                            <div className='info'>
                                <span>Стартовал проект 14/11/2022 года. авершение состоится 14/11/2032 года. 
                                    На протяжении этих десяти лет игроки смогут строить и развиваться в одном и том же мире, создавая свои истории и воспоминания. </span>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='block3'>
                        <span>
                            Мы арендуем серверы, и ваша поддержка в виде добровольных пожертвований будет нам очень полезна. Все собранные средства будут направлены на ежемесячные расходы по хостингу.
                        </span>
                        <a>поддержать сервер</a>
                        <button>?</button>
                    </div>
                    <div className='block4'>
                        <span>как попасть на сервер?</span>
                        <div class='block4middle'>
                            
                                
                                <div class='block4button'>
                                    <div class="block4buttoncontent">
                                        <span>Для участия в проекте сначала нужно ознакомиться с правилами, а затем подать заявку в личном кабинете</span>
                                        <button>личный кабинет</button>
                                    </div>
                                    
                                </div>
                            
                            <img src={Img3}/>
                        </div>
                    </div>
                    <div class="block5">
                        <div class="block5top">
                            <div class="block5_content_block">
                            <h2>правила</h2>
                            <span>сервер имеет ряд правил с которыми необходимо ознакомиться</span>
                            </div>
               

 

                            <div class="block5_content_block">
                            <h2>важное</h2>
                            <span>сервер имеет ряд важной информации</span>
                            </div>
                  

                      
                            <div class="block5_content_block">
                            <h2>блог</h2>
                            <span>сервер имеет блог</span>
                            </div>
                        </div>
                        <div class="block5buttom">
                            <span>информация о сервере</span>
                        </div>
                               
                    </div>
                    
                </div>
                
            </main>
            <Footer />
        </React.Fragment>
    )
}