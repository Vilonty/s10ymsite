import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../style/blog.css';

export const Blog = (props)=>{
    
    return(
        <React.Fragment>
            <Header showAuthLinks={true} blog={false}/>
            <main>
                    <div class="mainblock">

                        <div class='contentBlocks'>
                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>

                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>

                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>

                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>

                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>

                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>

                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>

                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>

                            <div class='contenBlock'>
                                <h2>заголовок</h2>
                            </div>
                        </div>

                        
                        

                        <span><button>1</button> ..  <button>n</button></span>

                                              
                    </div>

                </main>
            <Footer />
        </React.Fragment>
    )
}