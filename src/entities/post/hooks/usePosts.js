import { useDispatch, useSelector } from 'react-redux'; 
import { useCallback, useEffect } from 'react';
import { fetchPosts, createPostThunk, deletePostThunk, setCurrentPage, clearError } from '../store/PostsSlice';

export const usePosts = (page = 1, limit = 9) => {
  const dispatch = useDispatch();
  
  const { 
    postsList, 
    listLoading, 
    error, 
    isCreating, 
    isDeleting, 
    currentPage, 
    totalPages, 
  } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts({ page, limit }));
  }, [dispatch, page, limit]);

  const addPost = useCallback((postData) => {
    dispatch(createPostThunk(postData));
  }, [dispatch]);

  const removePost = useCallback((postId) => {
    dispatch(deletePostThunk(postId));
  }, [dispatch]);

  const changePage = useCallback((newPage) => {
    dispatch(setCurrentPage(newPage));
  }, [dispatch]);

  const clearPostsError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    posts: postsList,
    loading: listLoading,
    error,
    isCreating, 
    isDeleting,
    currentPage,
    totalPages,
    
    // Действия
    addPost,
    removePost,
    changePage,
    clearError: clearPostsError,
  };
};