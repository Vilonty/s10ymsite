import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import styles from '../style/blog/main/blog.module.css';
import { Link } from 'react-router-dom';

export const Blog = (props) => {
    return (
        <React.Fragment>
            <Header showAuthLinks={true} blog={false}/>
            <main className={styles.mainBlog}>
                <div className={styles.mainblock}>
                    <div className={styles.contentBlocks}>
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className={styles.contentBlock}>
                                <Link to="/BlogPage" className={styles.blogLink}>
                                    <h2>заголовок</h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <span><button>1</button> .. <button>n</button></span>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}