import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import ListModel from '../models/ListModel';
import { ListsType, ListType } from '../types/ListType';
import { BoardSliceType } from './boardSlice';
import { BoardType } from '../types/BoardType';

type AppRootStateType = RootStateType<[ListsSliceType, BoardSliceType]>;

/**
 * Get Board Lists
 */
export const getLists = createAppAsyncThunk<ListsType, string>('scrumboardApp/lists/get', async (boardId) => {
	const response = await axios.get(`/api/scrumboard/boards/${boardId}/lists`);

	const data = (await response.data) as ListsType;

	return data;
});

/**
 * Create List
 */
export const newList = createAppAsyncThunk<ListType, Partial<ListType>>(
	'scrumboardApp/lists/new',
	async (list, { getState }) => {
		const AppState = getState() as AppRootStateType;
		const board = AppState.scrumboardApp.board.data as BoardType;

		const response = await axios.post(`/api/scrumboard/boards/${board.id}/lists`, ListModel(list));

		const data = (await response.data) as ListType;

		return data;
	}
);

/**
 * Update list
 */
export const updateList = createAppAsyncThunk<ListType, { id: string; newData: Partial<ListType> }>(
	'scrumboardApp/lists/update',
	async ({ id, newData }, { getState }) => {
		const AppState = getState() as AppRootStateType;
		const board = AppState.scrumboardApp.board.data as BoardType;

		const response = await axios.put(`/api/scrumboard/boards/${board.id}/lists/${id}`, newData);

		const data = (await response.data) as ListType;

		return data;
	}
);

/**
 * Remove list
 */
export const removeList = createAppAsyncThunk<string, string>(
	'scrumboardApp/lists/remove',
	async (id, { getState }) => {
		const AppState = getState() as AppRootStateType;
		const board = AppState.scrumboardApp.board.data as BoardType;

		const response = await axios.delete(`/api/scrumboard/boards/${board.id}/lists/${id}`);

		(await response.data) as string;

		return id;
	}
);

const listsAdapter = createEntityAdapter<ListType>({});
const initialState = listsAdapter.getInitialState({});

export const { selectAll: selectLists, selectById } = listsAdapter.getSelectors(
	(state: AppRootStateType) => state.scrumboardApp.lists
);

/**
 * The Scrumboard Lists Slice.
 */
export const listsSlice = createSlice({
	name: 'scrumboardApp/lists',
	initialState,
	reducers: {
		resetLists: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getLists.fulfilled, (state, action) => listsAdapter.setAll(state, action.payload))
			.addCase(newList.fulfilled, (state, action) => listsAdapter.addOne(state, action.payload))
			.addCase(updateList.fulfilled, (state, action) => listsAdapter.upsertOne(state, action.payload))
			.addCase(removeList.fulfilled, (state, action) => listsAdapter.removeOne(state, action.payload));
	}
});

export const { resetLists } = listsSlice.actions;

export const selectListById = (id: ListType['id']) => (state: AppRootStateType) => selectById(state, id);

export type ListsSliceType = typeof listsSlice;

export default listsSlice.reducer;
