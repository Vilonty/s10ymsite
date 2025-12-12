
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../api/profileApi';

export const useProfile = (userId = 1) => {
  const { data: profile, isLoading, error } = useQuery({
    queryKey: ['profile', userId],
    queryFn: () => getProfile(userId), 

    retry: 2, 
    retryDelay: 2000, 
  });

  return {
    profile: profile || {},
    loading: isLoading,
    error: error?.message,
  };
};