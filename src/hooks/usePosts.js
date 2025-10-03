
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




{/*

  БЫЛО:
  
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
  const addPost = async (postData) => {
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
};*/} 