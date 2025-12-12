import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Loading } from '../../features/blog/ui/Loading/Loading';
import { Error } from '../../features/blog/ui/QueryError/QueryError';
import styles from '../../shared/style/blogPage/main/blogpage.module.css';

import { usePost } from '../../entities/post/hooks/usePost';

export const BlogPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const { 
    post, 
    loading, 
    error, 
    updatePost, 
    deletePost,
    isUpdating,
    isDeleting,
    clearError,
  } = usePost(id);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title: '', body: '' });

  useEffect(() => {
    console.log('ID поста:', id);
    console.log('Пост в store:', post);
    console.log('Загрузка:', loading);
    console.log('Ошибка:', error);
  }, [id, post, loading, error]);

  useEffect(() => {
    setIsEditing(false);
    setEditData({ title: '', body: '' });
  }, [id]);

  const handleEditToggle = () => {
    if (post && !isEditing) {
      setEditData({
        title: post.title,
        body: post.body,
      });
    }
    setIsEditing(!isEditing);
  };

  const handleEditChange = (e) => {
    setEditData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    if (!editData.title.trim() || !editData.body.trim()) {
      alert('Заполните все поля');
      return;
    }

    try {
      await updatePost(editData);
      setIsEditing(false);
      alert('Пост успешно обновлен!');
    } catch (err) {
      console.log('Ошибка при обновлении:', err);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditData({ title: '', body: '' });
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
      deletePost();
    }
  };

  useEffect(() => {
    if (!post && !loading && !error && id) {
      navigate('/blog');
    }
  }, [post, loading, error, id, navigate]);

  const showLoading = loading && !post;
  const showError = error && !post;
  const showNotFound = !post && !loading;

  if (showLoading) {
    console.log('Показываем загрузку...');
    return (
      <React.Fragment>
        <Loading />
      </React.Fragment>
    );
  }

  if (showError) {
    console.log('Показываем ошибку...');
    return (
      <React.Fragment>
        <Error message={error} />
      </React.Fragment>
    );
  }

  if (showNotFound) {
    console.log('Показываем "не найден"...');
    return (
      <React.Fragment>
        <main className={styles.blogPageContainer}>
          <div className={styles.postContainer}>
            <h2>Пост не найден</h2>
            <p>Запрошенный пост не существует.</p>
          </div>
        </main>
      </React.Fragment>
    );
  }

  console.log('Показываем пост:', post);

  return (
    <React.Fragment>
      <main className={styles.blogPageContainer}>
        <div className={styles.postContainer}>
          
          <div className={styles.postActionsContainer}>
            <button 
              onClick={handleEditToggle}
              className={styles.postEditButton}
              disabled={isUpdating || isDeleting}
            >
              {isEditing ? 'Отменить' : 'Редактировать'}
            </button>
            
            <button 
              onClick={handleDelete}
              className={styles.postDeleteButton}
              disabled={isDeleting}
            >
              {isDeleting ? 'Удаление...' : 'Удалить'}
            </button>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
              <button onClick={clearError} className={styles.clearErrorBtn}>
                ×
              </button>
            </div>
          )}

          {isEditing ? (
            <div className={styles.editFormContainer}>
              <div className={styles.formGroupContainer}>
                <label className={styles.formLabel}>Заголовок:</label>
                <input
                  type='text'
                  name='title'
                  value={editData.title}
                  onChange={handleEditChange}
                  disabled={isUpdating}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroupContainer}>
                <label className={styles.formLabel}>Содержание:</label>
                <textarea
                  name='body'
                  value={editData.body}
                  onChange={handleEditChange}
                  disabled={isUpdating}
                  rows='8'
                  className={styles.formTextarea}
                />
              </div>

              <div className={styles.formActionsContainer}>
                <button 
                  onClick={handleSave}
                  disabled={isUpdating}
                  className={styles.formSaveButton}
                >
                  {isUpdating ? 'Сохранение...' : 'Сохранить'}
                </button>
                
                <button 
                  onClick={handleCancelEdit}
                  disabled={isUpdating}
                  className={styles.formCancelButton}
                >
                  Отмена
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <hr className={styles.pageSeparator} />
              
              <div className={styles.postContent}>
                <div className={styles.textContent}>
                  <p>{post.body}</p>
                  <div className={styles.postMeta}>
                  </div>
                </div>
                
                <img src={post.img} alt={post.title} className={styles.postImage} />
              </div>
            </>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};