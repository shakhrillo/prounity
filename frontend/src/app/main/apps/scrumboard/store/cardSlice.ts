import { createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';
import { BoardSliceType } from './boardSlice';
import { CardType } from '../types/CardType';
import { BoardType } from '../types/BoardType';

type AppRootStateType = RootStateType<[CardSliceType, BoardSliceType]>;

/**
 * Update Card
 */
export const updateCard = createAppAsyncThunk<CardType, CardType>(
	'scrumboardApp/card/update',
	async (newData, { dispatch, getState }) => {
		const AppState = getState() as AppRootStateType;
		const board = AppState.scrumboardApp.board.data as BoardType;
		const card = AppState.scrumboardApp.card.data as CardType;

		const response = await axios.put(`/api/scrumboard/boards/${board.id}/cards/${card?.id}`, newData);

		const data = (await response.data) as CardType;

		dispatch(
			showMessage({
				message: 'Card Saved',
				autoHideDuration: 2000,
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'right'
				}
			})
		);

		return data;
	}
);

/**
 * Remove Card
 */
export const removeCard = createAppAsyncThunk<string>(
	'scrumboardApp/card/removeCard',
	async (_params, { dispatch, getState }) => {
		const AppState = getState() as AppRootStateType;
		const board = AppState.scrumboardApp.board.data as BoardType;
		const card = AppState.scrumboardApp.card.data as CardType;

		const response = await axios.delete(`/api/scrumboard/boards/${board.id}/cards/${card?.id}`);

		const data = (await response.data) as string;

		dispatch(closeCardDialog());

		return data;
	}
);

const initialState: {
	dialogOpen: boolean;
	data: CardType | null;
} = {
	dialogOpen: false,
	data: null
};

/**
 * The Scrumboard Card Slice.
 */
export const cardSlice = createSlice({
	name: 'scrumboardApp/card',
	initialState,
	reducers: {
		openCardDialog: (state, action) => {
			state.dialogOpen = true;
			state.data = action.payload as CardType;
		},
		closeCardDialog: (state) => {
			state.dialogOpen = false;
			state.data = null;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(updateCard.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	}
});

export const data = (state: AppRootStateType) => state.scrumboardApp.card.data;

export const { openCardDialog, closeCardDialog } = cardSlice.actions;

export const selectCardDialogOpen = (state: AppRootStateType) => state.scrumboardApp.card.dialogOpen;

export const selectCardData = (state: AppRootStateType) => state.scrumboardApp.card.data;

export type CardSliceType = typeof cardSlice;

export default cardSlice.reducer;
