import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FormState, IChildren, IDataPostResponse} from './types';

import useExceptionRequest from '../../hooks/exceptionRequest';
import {fetchPosts} from '../../service/post';
import {SortType} from '../../components/Button/types';

export const initialState: FormState = {
  loading: false,
  submitError: undefined,
  postList: undefined,
};
const NAME_SLICE = 'fetchPostsForm';
export const fetchPostsForm = createAsyncThunk(
  NAME_SLICE,
  async (_ = undefined, thunkAPI) => {
    const {handleException} = useExceptionRequest();
    try {
      const dataReturn = fetchPosts();
      return dataReturn;
    } catch (error) {
      return handleException({
        error,
        thunkAPI,
        nameFunction: NAME_SLICE,
      });
    }
  },
);

export const postFormSlice = createSlice({
  name: 'postForm',
  initialState,
  reducers: {
    handleSortList(state: FormState, action: PayloadAction<SortType>) {
      const newstate = {...state};
      if (
        action.payload === SortType.POPULAR ||
        action.payload === SortType.HOT
      ) {
        newstate.postList = newstate.postList.sort(
          (a: IChildren, b: IChildren) => {
            return b.data.num_comments - a.data.num_comments;
          },
        );
      } else if (action.payload === SortType.TOP) {
        newstate.postList = newstate.postList.sort(
          (a: IChildren, b: IChildren) => {
            return b.data.score - a.data.score;
          },
        );
      } else if (action.payload === SortType.NEW) {
        newstate.postList = newstate.postList.sort(
          (a: IChildren, b: IChildren) => {
            return a.data.created - b.data.created;
          },
        );
      }
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchPostsForm.pending, (state: FormState) => {
      const newstate = {...state};
      newstate.submitError = undefined;
      newstate.loading = true;
      return newstate;
    });
    builder.addCase(
      fetchPostsForm.fulfilled,
      (state: FormState, action: PayloadAction<IDataPostResponse>) => {
        const newstate = {...state};
        newstate.postList = action.payload.children;
        newstate.submitError = undefined;
        newstate.loading = false;
        return newstate;
      },
    );
    builder.addCase(fetchPostsForm.rejected, (state: FormState) => {
      const newstate = {...state};
      newstate.submitError = 'There are problems to load data!';
      newstate.loading = false;
      return newstate;
    });
  },
});

export const {handleSortList} = postFormSlice.actions;

export default postFormSlice.reducer;
