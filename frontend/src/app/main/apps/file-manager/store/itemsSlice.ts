import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import { ItemResponseType } from '../types/ItemResponseType';
import { FileManagerItemType } from '../types/FileManagerItemType';
import { ItemPathType } from '../types/ItemPathType';

export type AppRootStateType = RootStateType<itemsSliceType>;

/**
 * Get items from server
 */
export const getItems = createAppAsyncThunk<ItemResponseType, string>(
	'fileManagerApp/items/getItems',
	async (folderId) => {
		const response = await axios.get(`/api/file-manager/${folderId}`);

		const data = (await response.data) as ItemResponseType;

		return data;
	}
);

const itemsAdapter = createEntityAdapter<FileManagerItemType>({});

const initialState = itemsAdapter.getInitialState<{
	selectedItemId: string | null;
	path: ItemPathType;
}>({
	selectedItemId: null,
	path: []
});

export const {
	selectAll: selectItems,
	selectEntities: selectItemsEntities,
	selectById
} = itemsAdapter.getSelectors((state: AppRootStateType) => state.fileManagerApp.items);

/**
 * The File Manager items slice.
 */
export const itemsSlice = createSlice({
	name: 'fileManagerApp/items',
	initialState,
	reducers: {
		setSelectedItem: (state, action) => {
			state.selectedItemId = action.payload as string;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getItems.fulfilled, (state, action) => {
			const { items, path }: ItemResponseType = action.payload;
			itemsAdapter.setAll(state, items);
			state.path = path;
			state.selectedItemId = null;
		});
	}
});

export const selectFolders = createSelector([selectItems], (items) => {
	return items.filter((item) => item.type === 'folder');
});

export const selectFiles = createSelector([selectItems], (items) => {
	return items.filter((item) => item.type !== 'folder');
});

export const selectSelectedItemId = (state: AppRootStateType) => state.fileManagerApp.items.selectedItemId;

export const selectSelectedItem = (state: AppRootStateType) =>
	selectById(state, state.fileManagerApp.items.selectedItemId);

export const selectPath = (state: AppRootStateType) => state.fileManagerApp.items.path;

export const { setSelectedItem } = itemsSlice.actions;

export const selectItemByIds = (id: FileManagerItemType['id']) => (state: AppRootStateType) => selectById(state, id);

export type itemsSliceType = typeof itemsSlice;

export default itemsSlice.reducer;
