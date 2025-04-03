import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import styles from '../style/blogPage/main/blogpage.module.css';
import Image from '../assets/blogpage/image.png';

export const BlogPage = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} blog={false}/>
            <main class={styles.mainBlogpage}>
                <div class={styles.mainblock}>

                    <h2>заголовок</h2>

                    <hr></hr>
                    

                    <div class={styles.content}>
                        <div class={styles.textcontent}>
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