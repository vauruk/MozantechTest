import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FormState, IPostResponse} from './types';

import useExceptionRequest from '../../hooks/exceptionRequest';
import type {RootState} from '..';
import {fetchPosts} from '../../service/post';
import consoleDebug from '../../util/debugMode';

export const initialState: FormState = {
  loading: false,
  submitError: undefined,
  postList: undefined,
};

export const fetchPostsForm = createAsyncThunk(
  'signInForm',
  async (_ = undefined, thunkAPI) => {
    const {
      //signInForm: {authData},
    } = thunkAPI.getState() as RootState;
    const {handleException} = useExceptionRequest();
    try {
      const dataReturn = fetchPosts();
      return dataReturn;
    } catch (error) {
      return handleException({
        error,
        thunkAPI,
        nameFunction: 'fetchPostsForm',
      });
    }
  },
);

export const postFormSlice = createSlice({
  name: 'postForm',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchPostsForm.pending, (state: FormState) => {
      const newstate = {...state};
      newstate.submitError = undefined;
      newstate.loading = true;
      return newstate;
    });
    builder.addCase(
      fetchPostsForm.fulfilled,
      (state: FormState, action: PayloadAction<IPostResponse>) => {
        const newstate = {...state};
        consoleDebug('fetchPostsForm: ', action.payload.data.children);
        newstate.postList = action.payload.data.children;
        newstate.submitError = undefined;
        newstate.loading = false;
        return newstate;
      },
    );
    builder.addCase(
      fetchPostsForm.rejected,
      (state: FormState, action: PayloadAction<any>) => {
        const newstate = {...state};
        //const {error} = action.payload;
        newstate.submitError = 'Informações de autenticação inválidas!';
        newstate.loading = false;
        return newstate;
      },
    );
  },
});

export default postFormSlice.reducer;
