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

export const getProfile = async (userId) => {
  try {
    const response = await api.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

