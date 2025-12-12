import { useDispatch, useSelector } from 'react-redux'; 
import { useCallback, useEffect } from 'react';
import { fetchPost, updatePostThunk, deletePostThunk, clearError } from '../store/PostsSlice';

export const usePost = (postId) => {
  const dispatch = useDispatch();
  
  const { 
    currentPost: post, 
    loading, 
    error, 
    isUpdating, 
    isDeleting 
  } = useSelector(state => state.posts);

  useEffect(() => {
    if (postId) {
      dispatch(fetchPost(postId));
    }
  }, [dispatch, postId]);

  const updatePost = useCallback((postData) => {
    dispatch(updatePostThunk({ id: postId, data: postData }));
  }, [dispatch, postId]);

  const deletePost = useCallback(() => {
    dispatch(deletePostThunk(postId));
  }, [dispatch, postId]);

  const clearPostError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    post,
    loading,
    error,
    isUpdating,
    isDeleting,
    
    // Действия
    updatePost,
    deletePost,
    clearError: clearPostError
  };
};