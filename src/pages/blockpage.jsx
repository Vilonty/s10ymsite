import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../style/blockpage.css';
import Image from '../assets/blogpage/image.png';

export const BlockPage = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} blog={false}/>
            <main>
                    <div class="mainblock">

                        <h2>заголовок</h2>

                        <hr></hr>
                        

                        <div class='content'>
                            <div class='textcontent'>
                                <span>Тут будет какая-то информация</span>
                            </div>
                            

                            <img src={Image}></img>
                            

                        </div>

                                              

                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}