import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { PartialDeep } from 'type-fest';
import { RootStateType } from 'app/store/types';
import history from '@history';
import BoardModel from '../models/BoardModel';
import { BoardType, BoardsType } from '../types/BoardType';

type AppRootStateType = RootStateType<BoardsSliceType>;

/**
 * Get Boards
 */
export const getBoards = createAppAsyncThunk<BoardsType>('scrumboardApp/boards/getBoards', async () => {
	const response = await axios.get('/api/scrumboard/boards');

	const data = (await response.data) as BoardsType;

	return data;
});

/**
 * Create New Board
 */
export const newBoard = createAppAsyncThunk<BoardType, PartialDeep<BoardType>>(
	'scrumboardApp/boards/newBoard',
	async (board) => {
		const response = await axios.post('/api/scrumboard/boards', BoardModel(board));
		const data = (await response.data) as BoardType;

		history.push({
			pathname: `/apps/scrumboard/boards/${data.id}`
		});

		return data;
	}
);

const boardsAdapter = createEntityAdapter<BoardType>({});
const initialState = boardsAdapter.getInitialState({});

export const {
	selectAll: selectBoards,
	selectEntities: selectBoardEntities,
	selectById: selectBoardById
} = boardsAdapter.getSelectors((state: AppRootStateType) => state.scrumboardApp.boards);

/**
 * The Scrumboard Boards Slice.
 */
export const boardsSlice = createSlice({
	name: 'scrumboardApp/boards',
	initialState,
	reducers: {
		resetBoards: () => {}
	},
	extraReducers: (builder) => {
		builder.addCase(getBoards.fulfilled, (state, action) => boardsAdapter.setAll(state, action.payload));
	}
});

export const { resetBoards } = boardsSlice.actions;

export type BoardsSliceType = typeof boardsSlice;

export default boardsSlice.reducer;
