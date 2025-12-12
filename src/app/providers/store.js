import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../../entities/post/store/PostsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;