import React, { useState } from 'react';
import { Loading } from '../../features/blog/ui/Loading/Loading';
import { Error } from '../../features/blog/ui/QueryError/QueryError';
import { AddPostForm } from '../../features/blog/ui/AddPostForm/AddPostForm';
import { usePosts } from '../../entities/post/hooks/usePosts';
import styles from '../../shared/style/blog/main/blog.module.css';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const { 
    posts, 
    loading, 
    error, 
    addPost, 
    removePost, 
    isCreating, 
    isDeleting, 
  } = usePosts(); 
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [deletingId, setDeletingId] = useState(null); 

  const handlePostAdded = async (newPost) => {
    try {
      await addPost(newPost); 
      console.log('Пост добавлен');
      setShowAddForm(false);
    } catch (err) {
      alert('Ошибка при добавлении: ' + err.message);
    }
  };

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
        <Loading />
      </React.Fragment>
    );
  }

  if (error) {
    return (
      <React.Fragment>
        <Error message={error} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <main className={styles.blogPage}>
        <div className={styles.blogContainer}>
          <h2 className={styles.blogTitle}>блог</h2>
          
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
                  <h2 className={styles.addPostFormTitle}>{post.title}</h2>
                </Link>
                
                <div className={styles.postActions}>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    disabled={deletingId === post.id || isDeleting} 
                    className={styles.deleteButton}
                    title='Удалить пост'
                  >
                    {deletingId === post.id ? '⏳' : '🗑️'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.pagination}>
            <span><button>1</button> .. <button>n</button></span>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};