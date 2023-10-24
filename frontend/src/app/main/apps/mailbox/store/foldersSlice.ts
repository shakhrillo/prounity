import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import { FolderType, FoldersType } from '../types/FolderType';

export type AppRootStateType = RootStateType<foldersSliceType>;

/**
 * Get folders from server
 */
export const getFolders = createAppAsyncThunk<FoldersType>('mailboxApp/folders/getFolders', async () => {
	const response = await axios.get('/api/mailbox/folders');

	const data = (await response.data) as FoldersType;

	return data;
});

const foldersAdapter = createEntityAdapter<FolderType>({});

export const { selectAll: selectFolders, selectById: selectFolderById } = foldersAdapter.getSelectors(
	(state: AppRootStateType) => state.mailboxApp.folders
);

const initialState = foldersAdapter.getInitialState();

/**
 * The Mailbox App folders slice.
 */
export const foldersSlice = createSlice({
	name: 'mailboxApp/folders',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFolders.fulfilled, (state, action) => foldersAdapter.setAll(state, action.payload));
	}
});

export const selectSpamFolderId = createSelector([selectFolders], (folders) => {
	return _.find(folders, { slug: 'spam' })?.id;
});

export const selectTrashFolderId = createSelector([selectFolders], (folders) => {
	return _.find(folders, { slug: 'trash' })?.id;
});

export type foldersSliceType = typeof foldersSlice;

export default foldersSlice.reducer;
