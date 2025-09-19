import { useState, useEffect } from 'react';
import { getPosts, createPost, deletePost } from '../api/blogApi'; // Добавляем импорт deletePost

export const usePosts = (initialPage = 1, limit = 9) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  // Загрузка постов
  const loadPosts = async (page = currentPage) => {
    try {
      setLoading(true);
      setError('');
      const data = await getPosts(page, limit);
      setPosts(data.posts);
      setTotalPages(Math.ceil(data.totalCount / limit));
      setCurrentPage(page);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Добавление поста
  const addPost = async (postData) => {
    try {
      const newPost = await createPost(postData);
      setPosts(prev => [newPost, ...prev]);
      return newPost;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // УДАЛЕНИЕ ПОСТА - новая функция
  const removePost = async (id) => {
    try {
      await deletePost(id); // Отправляем запрос на удаление на сервер
      setPosts(prev => prev.filter(post => post.id !== id)); // Удаляем из состояния
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  return {
    posts,
    loading,
    error,
    currentPage,
    totalPages,
    loadPosts,
    addPost,
    removePost, // Добавляем функцию удаления
    setCurrentPage
  };
};