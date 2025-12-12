import React, { useState } from 'react';
import { createPost } from '../../../../entities/post/api/BlogApi';
import styles from '../../../../shared/style/blog/components/addPostForm.module.css';

export const AddPostForm = ({ onPostAdded, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.body.trim()) {
      setError('Заполните все поля');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const newPost = await createPost(formData);
      onPostAdded(newPost); 
      setFormData({ title: '', body: '' }); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    if (error) setError('');
  };

  return (
    <div className={styles.addPostForm}>
      <h2>Добавить новый пост</h2>
      
      {error && <div className={styles.error}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Заголовок:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            disabled={loading}
            placeholder="Введите заголовок поста"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="body">Содержание:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            disabled={loading}
            rows="6"
            placeholder="Введите текст поста"
          />
        </div>

        <div className={styles.formActions}>
          <button 
            type="submit" 
            disabled={loading}
            className={styles.submitButton}
          >
            {loading ? 'Добавление...' : 'Добавить пост'}
          </button>
          
          <button 
            type="button" 
            onClick={onCancel}
            disabled={loading}
            className={styles.cancelButton}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};