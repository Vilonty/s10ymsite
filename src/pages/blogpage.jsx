import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Loading } from '../components/blog/Loading';
import { Error } from '../components/blog/Error';
import styles from '../style/blogPage/main/blogpage.module.css';

import { usePost } from '../hooks/usePost';

export const BlogPage = (props) => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  // Redux хук
  const { 
    post, 
    loading, 
    error, 
    updatePost, 
    deletePost,
    isUpdating,
    isDeleting,
    clearError
  } = usePost(id);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title: '', body: '' });

  useEffect(() => {
    console.log('ID поста:', id);
    console.log('Пост в store:', post);
    console.log('Загрузка:', loading);
    console.log('Ошибка:', error);
  }, [id, post, loading, error]);

  // Сбрасываем состояние редактирования при смене поста
  useEffect(() => {
    setIsEditing(false);
    setEditData({ title: '', body: '' });
  }, [id]);

  // Заполняем форму данными поста при входе в режим редактирования
  const handleEditToggle = () => {
    if (post && !isEditing) {
      setEditData({
        title: post.title,
        body: post.body
      });
    }
    setIsEditing(!isEditing);
  };

  // Ручное изменение поста
  const handleEditChange = (e) => {
    setEditData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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

  // Редирект после удаления поста
  useEffect(() => {
    if (!post && !loading && !error && id) {
      navigate('/blog');
    }
  }, [post, loading, error, id, navigate]);

  // УСИЛИМ ПРОВЕРКИ ДЛЯ ЗАГРУЗКИ
  const showLoading = loading && !post;
  const showError = error && !post;
  const showNotFound = !post && !loading;

  if (showLoading) {
    console.log('Показываем загрузку...');
    return (
      <React.Fragment>
        <Header showAuthLinks={true} blog={false}/>
        <Loading />
        <Footer />
      </React.Fragment>
    );
  }

  if (showError) {
    console.log('Показываем ошибку...');
    return (
      <React.Fragment>
        <Header showAuthLinks={true} blog={false}/>
        <Error message={error} />
        <Footer />
      </React.Fragment>
    );
  }

  if (showNotFound) {
    console.log('Показываем "не найден"...');
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

  console.log('Показываем пост:', post);

  return (
    <React.Fragment>
      <Header showAuthLinks={true} blog={false}/>
      <main className={styles.mainBlogpage}>
        <div className={styles.mainblock}>
          
          {/* Кнопки управления */}
          <div className={styles.postActions}>
            <button 
              onClick={handleEditToggle}
              className={styles.editButton}
              disabled={isUpdating || isDeleting}
            >
              {isEditing ? 'Отменить' : 'Редактировать'}
            </button>
            
            <button 
              onClick={handleDelete}
              className={styles.deleteButton}
              disabled={isDeleting}
            >
              {isDeleting ? 'Удаление...' : 'Удалить'}
            </button>
          </div>

          {error && (
            <div className={styles.error}>
              {error}
              <button onClick={clearError} className={styles.clearErrorBtn}>
                ×
              </button>
            </div>
          )}

          {isEditing ? (
            <div className={styles.editForm}>
              <div className={styles.formGroup}>
                <label>Заголовок:</label>
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleEditChange}
                  disabled={isUpdating}
                  className={styles.editInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Содержание:</label>
                <textarea
                  name="body"
                  value={editData.body}
                  onChange={handleEditChange}
                  disabled={isUpdating}
                  rows="8"
                  className={styles.editTextarea}
                />
              </div>

              <div className={styles.editActions}>
                <button 
                  onClick={handleSave}
                  disabled={isUpdating}
                  className={styles.saveButton}
                >
                  {isUpdating ? 'Сохранение...' : 'Сохранить'}
                </button>
                
                <button 
                  onClick={handleCancelEdit}
                  disabled={isUpdating}
                  className={styles.cancelButton}
                >
                  Отмена
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className={styles.h2Post}>{post.title}</h3>
              <hr />
              
              <div className={styles.content}>
                <div className={styles.textcontent}>
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
      <Footer />
    </React.Fragment>
  );
};