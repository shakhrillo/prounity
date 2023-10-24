import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatchType } from 'app/store/types';

/**
 * The type definition for the options object passed to `createAsyncThunk.withTypes`.
 */
type CreateAsyncThunkOptions = {
	dispatch: AppDispatchType;
};

const createAppAsyncThunk = createAsyncThunk.withTypes<CreateAsyncThunkOptions>();

export default createAppAsyncThunk;
