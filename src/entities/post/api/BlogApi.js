import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

// Обработчик ошибок
const handleError = (error) => {
  if (error.response) {
    throw new Error(`Ошибка сервера: ${error.response.status}`);
  } else if (error.request) {
    throw new Error('Нет ответа от сервера');
  } else {
    throw new Error(`Ошибка: ${error.message}`);
  }
};

// GET - получить все посты
export const getPosts = async (page = 1, limit = 9) => {
  try {
    const response = await api.get(`${API_URL}?_page=${page}&_limit=${limit}`);
    return {
      posts: response.data,
      totalCount: 100, 
    };
  } catch (error) {
    handleError(error);
  }
};

// GET - получить один пост
export const getPost = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// POST - создать пост
export const createPost = async (postData) => {
  try {
    const response = await api.post(API_URL, {
      ...postData,
      userId: 1,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// PUT - обновить пост
export const updatePost = async (id, postData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, {
      ...postData,
      id: id,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// DELETE - удалить пост
export const deletePost = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    handleError(error);
  }
};