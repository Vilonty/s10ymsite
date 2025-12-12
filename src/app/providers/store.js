import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../../features/blog/store/PostsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;