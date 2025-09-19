import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Loading } from '../components/blog/Loading';
import { Error } from '../components/blog/Error';
import { getPost } from '../api/blogApi'; 
import styles from '../style/blogPage/main/blogpage.module.css';
import Image from '../assets/blogpage/image.png';

export const BlogPage = (props) => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Загружаем пост при монтировании компонента
  useEffect(() => {
    loadPost();
  }, [id]); // Загружаем снова если ID изменился

  const loadPost = async () => {
    try {
      setLoading(true);
      setError('');
      const postData = await getPost(id);
      setPost(postData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Показываем загрузку
  if (loading) {
    return (
      <React.Fragment>
        <Header showAuthLinks={true} blog={false}/>
        <Loading />
        <Footer />
      </React.Fragment>
    );
  }

  // Показываем ошибку
  if (error) {
    return (
      <React.Fragment>
        <Header showAuthLinks={true} blog={false}/>
        <Error message={error} />
        <Footer />
      </React.Fragment>
    );
  }

  // Если пост не найден
  if (!post) {
    return (
      <React.Fragment>
        <Header showAuthLinks={true} blog={false}/>
        <main className={styles.mainBlogpage}>
          <div className={styles.mainblock}>
            <h2>Пост не найден</h2>
            <p>Запрошенный пост не существует.</p>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header showAuthLinks={true} blog={false}/>
      <main className={styles.mainBlogpage}>
        <div className={styles.mainblock}>
          <h2>{post.title}</h2>
          <hr />
          
          <div className={styles.content}>
            <div className={styles.textcontent}>
              <p>{post.body}</p>
              <div className={styles.postMeta}>
                <span>ID поста: {post.id}</span>
                <span>Автор: User {post.userId}</span>
              </div>
            </div>
            
            <img src={Image} alt={post.title} />
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};