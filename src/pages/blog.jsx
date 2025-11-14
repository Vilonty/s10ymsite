import React, { useState } from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Loading } from '../components/blog/Loading';
import { Error } from '../components/blog/Error';
import { AddPostForm } from '../components/blog/AddPostForm';
import { usePosts } from '../hooks/usePosts';
import styles from '../style/blog/main/blog.module.css';
import { Link } from 'react-router-dom';

export const Blog = (props) => {
  const { 
    posts, 
    loading, 
    error, 
    addPost, 
    removePost, 
    isCreating, 
    isDeleting 
  } = usePosts(); 
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [deletingId, setDeletingId] = useState(null); 

  // Обработчик добавления поста
  const handlePostAdded = async (newPost) => {
    try {
      await addPost(newPost); 
      console.log('Пост добавлен');
      setShowAddForm(false);
    } catch (err) {
      alert('Ошибка при добавлении: ' + err.message);
    }
  };

  // Обработчик удаления поста
  const handleDeletePost = async (id) => {
    if (!window.confirm('Вы уверены, что хотите удалить этот пост?')) {
      return;
    }

    setDeletingId(id);
    
    try {
      await removePost(id);
      console.log('Пост удален:', id);
    } catch (err) {
      alert('Ошибка при удалении: ' + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <React.Fragment>
        <Header showAuthLinks={true} blog={false}/>
        <Loading />
        <Footer />
      </React.Fragment>
    );
  }

  if (error) {
    return (
      <React.Fragment>
        <Header showAuthLinks={true} blog={false}/>
        <Error message={error} />
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header showAuthLinks={true} blog={false}/>
      <main className={styles.mainBlog}>
        <div className={styles.mainblock}>
          
          {/* Кнопка добавления поста */}
          <div className={styles.adminControls}>
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className={styles.addButton}
              disabled={isCreating} 
            >
              {showAddForm ? '✕ Отменить' : '＋ Добавить пост'}
              {isCreating && ' (Создание...)'}
            </button>
          </div>

          {/* Форма добавления поста */}
          {showAddForm && (
            <AddPostForm
              onPostAdded={handlePostAdded}
              onCancel={() => setShowAddForm(false)}
              isCreating={isCreating} 
            />
          )}

          <div className={styles.contentBlocks}>
            {posts.map((post) => (
              <div key={post.id} className={styles.contentBlock}>
                <Link to={`/blogpage/${post.id}`} className={styles.blogLink}>
                  <h2>{post.title}</h2>
                </Link>
                
                {/* Кнопка удаления */}
                <div className={styles.postActions}>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    disabled={deletingId === post.id || isDeleting} 
                    className={styles.deleteButton}
                    title="Удалить пост"
                  >
                    {deletingId === post.id ? '⏳' : '🗑️'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Пагинация - можно добавить позже */}
          <div className={styles.pagination}>
            <span><button>1</button> .. <button>n</button></span>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};