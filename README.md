# Интеграция React Query в React-приложение
# ДО REACT-QUERY:

import { useState, useEffect } from 'react';
import { getPosts, createPost, deletePost } from '../api/blogApi'; 

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
  const addPost =3 async (postData) => {
    try {
      const newPost = await createPost(postData);
      setPosts(prev => [newPost, ...prev]);
      return newPost;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // УДАЛЕНИЕ ПОСТА 
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


## Проблемы:

## 25+ строк кода на каждый запрос

## Ручное управление состояниями (loading, error)

## Нет кэширования - повторные запросы

## Нет автоматических retry при ошибках

## Сложная пагинация

## Нет фонового обновления

# ПОСЛЕ:

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPosts, createPost, deletePost } from '../api/blogApi';

export const usePosts = (page = 1, limit = 9) => {
    const queryClient = useQueryClient();


    //Подгрузка постов

    const { 
      data, 
      isLoading, 
      error, 
      isFetching 
    } = useQuery({
      queryKey: ['posts', { page, limit }],
      queryFn: () => getPosts(page, limit),
      keepPreviousData: true, 
      staleTime: 1000 * 60 * 5, 


      refetchInterval: 1000 * 30, 
      refetchIntervalInBackground: true, 

       retry: (failureCount, error) => {

          return failureCount < 5;
        },
        retryDelay: 1000,

    });


    //Создание постов 

    const createPostMutation = useMutation({
      mutationFn: createPost,
      onSuccess: (newPost) => {

        queryClient.setQueryData(
          ['posts', { page: 1, limit }], 
          (oldData) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              posts: [newPost, ...oldData.posts]
            };
          }
        );
        queryClient.invalidateQueries({ queryKey: ['posts'] });
      },
    });


  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    
    onMutate: async (deletedId) => {  
      
      const previousPosts = queryClient.getQueryData(['posts']);
      queryClient.setQueryData(['posts'], (oldData) => {
        if (!oldData?.posts) return oldData;
        
        return {
          ...oldData,
          posts: oldData.posts.filter(post => post.id !== deletedId)
        };
      });
      
      return { previousPosts };
    },
    
    onError: (error, deletedId, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(['posts'], context.previousPosts);
      }
      
      alert(`Ошибка удаления: ${error.message}`);
    },
    
    onSettled: () => {

      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });


    //Возвращение страницы

    return {

      posts: data?.posts || [],
      loading: isLoading,
      error: error?.message || '',
      isFetching, 
      

      currentPage: page,
      totalPages: Math.ceil(100 / limit),
      

      addPost: createPostMutation.mutate,
      removePost: deletePostMutation.mutate,

      isCreating: createPostMutation.isLoading,
      isDeleting: deletePostMutation.isLoading,
      createError: createPostMutation.error?.message,
      deleteError: deletePostMutation.error?.message,
    };
  };



## Преимущества:

## 5-7 строк кода на запрос

## Автоматические состояния

## Встроенное кэширование

## Автоматические retry

## Фоновая синхронизация

## DevTools для отладки


# Структура Query Keys

## Posts
['posts']                      // Все посты
['posts', { page: 1, limit: 9 }] // Посты с пагинацией
['posts', { search: 'react' }] // Посты с фильтрацией

## Users
['profile', 1]                 // Профиль пользователя ID=1
['current-user']               // Текущий авторизованный пользователь

## Single Entities
['post', 5]                    // Конкретный пост ID=5
['user', 10]                   // Конкретный пользователь ID=10

## Dependent Queries
['user-stats', 1]             // Статистика пользователя (зависит от профиля)
['available-forms']           // Доступные формы (зависит от пользователя)

