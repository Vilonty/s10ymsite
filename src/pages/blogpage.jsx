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
  
  //хук
  const { 
    post, 
    loading, 
    error, 
    updatePost, 
    deletePost,
    isUpdating,
    isDeleting 
  } = usePost(id);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title: '', body: '' });

  const handleEditToggle = () => {
    if (post) {
      setEditData({
        title: post.title,
        body: post.body
      });
    }
    setIsEditing(!isEditing);
  };

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

    //Вызываем мутацию
    updatePost(
      { id, data: editData },
      {
        onSuccess: () => {
          setIsEditing(false);
          alert('Пост успешно обновлен!');
        }
      }
    );
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
 
      deletePost(id, {
        onSuccess: () => {
          alert('Пост удален!');
          navigate('/blog');
        }
      });
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

  if (error && !post) {
    return (
      <React.Fragment>
        <Header showAuthLinks={true} blog={false}/>
        <Error message={error} />
        <Footer />
      </React.Fragment>
    );
  }
  {/*
    хер пойми какая ошибка разберись позже!
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
    }*/}


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

          {error && <div className={styles.error}>{error}</div>}

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