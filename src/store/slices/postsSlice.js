import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import { getPost, updatePost, deletePost, getPosts, createPost } from '../../api/blogApi';

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await getPost(postId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePostThunk = createAsyncThunk(
  'posts/updatePost',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updatePost(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  'posts/deletePost',
  async (id, { rejectWithValue }) => {
    try {
      await deletePost(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({page,limit}, {rejectWithValue}) =>{
    try{
      const response = await getPosts(page, limit);
      return response
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPostThunk = createAsyncThunk(
  'posts/createPost',
  async(postData, {rejectWithValue}) =>{
    try{
      const response = await createPost(postData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  } 
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    currentPost: null,
    loading: false,
    error: null,
    isUpdating: false,
    isDeleting: false,
    postsList: [],
    listLoading: false,   
    isCreating: false,      
    currentPage: 1,          
    totalPages: 1,        
    limit: 9                 
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentPost: (state) => {
      state.currentPost = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    clearPostsList: (state) => {
      state.postsList = [];
    }
  },
  extraReducers: (builder) => {
    builder
      // Загрузка поста
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPost = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Обновление поста
      .addCase(updatePostThunk.pending, (state) => {
        state.isUpdating = true;
      })
      .addCase(updatePostThunk.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.currentPost = action.payload;
        const index = state.postsList.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.postsList[index] = action.payload;
        }
      })
      .addCase(updatePostThunk.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload;
      })
      // Удаление поста
      .addCase(deletePostThunk.pending, (state) => {
        state.isDeleting = true;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.currentPost = null;
        state.postsList = state.postsList.filter(post => post.id !== action.payload);
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      })
      // Загрузка списка постов
      .addCase(fetchPosts.pending, (state) => {
        state.listLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.listLoading = false;
        state.postsList = action.payload.posts;
        state.totalPages = Math.ceil(action.payload.totalCount / state.limit);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.listLoading = false;
        state.error = action.payload;
      })
      // Создание поста
      .addCase(createPostThunk.pending, (state) => {
        state.isCreating = true;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.isCreating = false;
        state.postsList.unshift(action.payload);
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.isCreating = false;
        state.error = action.payload;
      });
  }
});

export const { clearError, clearCurrentPost, setCurrentPage, clearPostsList } = postsSlice.actions;
export default postsSlice.reducer;