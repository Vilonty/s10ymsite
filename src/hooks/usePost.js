import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPost, updatePost, deletePost } from '../api/blogApi';

export const usePost = (postId) => {
  const queryClient = useQueryClient();

  //Запрос поста
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    enabled: !!postId,
  });

  //Обновление
  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }) => updatePost(id, data),
    onSuccess: (updatedPost) => {
        queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    });

  //Удаление
  const deletePostMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: () => {
      //Удаление из кеша
      queryClient.removeQueries({ queryKey: ['post', postId] });
      //Инвалидирум спиоск потстов
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return {

    post,
    loading: isLoading,
    error: error?.message,
    

    updatePost: updatePostMutation.mutate,
    deletePost: deletePostMutation.mutate,

    isUpdating: updatePostMutation.isLoading,
    isDeleting: deletePostMutation.isLoading,
    updateError: updatePostMutation.error?.message,
    deleteError: deletePostMutation.error?.message,
  };
};