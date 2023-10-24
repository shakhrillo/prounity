import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { TagType, TagsType } from '../types/TagType';

export type AppRootStateType = RootStateType<tagsSliceType>;

/**
 * Get tags from the server.
 */
export const getTags = createAppAsyncThunk('tasksApp/tags/getTags', async () => {
	const response = await axios.get('/api/tasks/tags');

	const data = (await response.data) as TagsType;

	return data;
});

const tagsAdapter = createEntityAdapter<TagType>({});
const initialState = tagsAdapter.getInitialState([]);

export const { selectAll: selectTags, selectById: selectTagsById } = tagsAdapter.getSelectors(
	(state: AppRootStateType) => state.tasksApp.tags
);

/**
 * The Tasks app tags slice.
 */
export const tagsSlice = createSlice({
	name: 'tasksApp/tags',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTags.fulfilled, (state, action) => {
			tagsAdapter.setAll(state, action.payload);
		});
	}
});

export type tagsSliceType = typeof tagsSlice;

export default tagsSlice.reducer;
