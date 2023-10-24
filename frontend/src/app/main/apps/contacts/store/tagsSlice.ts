import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { TagsType, TagType } from '../types/TagType';
import { AppRootStateType } from '.';

/**
 * Get tags from server
 */
export const getTags = createAppAsyncThunk<TagsType>('contactsApp/tags/getTags', async () => {
	const response = await axios.get('/api/contacts/tags');

	const data = (await response.data) as TagsType;

	return data;
});

const tagsAdapter = createEntityAdapter<TagType>({});

const initialState = tagsAdapter.getInitialState([]);

export const { selectAll: selectTags, selectById: selectTagsById } = tagsAdapter.getSelectors(
	(state: AppRootStateType) => state.contactsApp?.tags
);

/**
 * The Contacts App tags slice.
 */
export const tagsSlice = createSlice({
	name: 'contactsApp/tags',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTags.fulfilled, (state, action) => tagsAdapter.setAll(state, action.payload));
	}
});

export type tagsSliceType = typeof tagsSlice;

export default tagsSlice.reducer;
