import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import { removeList } from './listsSlice';
import { removeCard, updateCard } from './cardSlice';
import CardModel from '../models/CardModel';
import { BoardSliceType } from './boardSlice';
import { CardsType, CardType } from '../types/CardType';
import { BoardType } from '../types/BoardType';

type AppRootStateType = RootStateType<[CardsSliceType, BoardSliceType]>;

/**
 * Get Cards
 */
export const getCards = createAppAsyncThunk<CardsType, string>('scrumboardApp/cards/getCards', async (boardId) => {
	const response = await axios.get(`/api/scrumboard/boards/${boardId}/cards`);

	const data = (await response.data) as CardsType;

	return data;
});

/**
 * Create New Card
 */
export const newCard = createAppAsyncThunk<CardType, { listId: string; newData: Partial<CardType> }>(
	'scrumboardApp/cards/newCard',
	async ({ listId, newData }, { getState }) => {
		const AppState = getState() as AppRootStateType;
		const board = AppState.scrumboardApp.board.data as BoardType;

		const response = await axios.post(
			`/api/scrumboard/boards/${board.id}/lists/${listId}/cards`,
			CardModel(newData)
		);

		const data = (await response.data) as CardType;

		return data;
	}
);

const cardsAdapter = createEntityAdapter<CardType>({});

export const { selectAll: selectCards, selectById } = cardsAdapter.getSelectors(
	(state: AppRootStateType) => state.scrumboardApp.cards
);

/**
 * The Scrumboard Cards Slice.
 */
export const cardsSlice = createSlice({
	name: 'scrumboardApp/cards',
	initialState: cardsAdapter.getInitialState({}),
	reducers: {
		resetCards: () => {}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCards.fulfilled, (state, action) => cardsAdapter.setAll(state, action.payload))
			.addCase(removeList.fulfilled, (state, action) => {
				const listId = action.payload;
				const { selectAll } = cardsAdapter.getSelectors();
				const cards = selectAll(state);
				const removedCardIds = _.map(_.filter(cards, { listId }), 'id');
				return cardsAdapter.removeMany(state, removedCardIds);
			})
			.addCase(newCard.fulfilled, (state, action) => cardsAdapter.addOne(state, action.payload))
			.addCase(updateCard.fulfilled, (state, action) => cardsAdapter.setOne(state, action.payload))
			.addCase(removeCard.fulfilled, (state, action) => cardsAdapter.removeOne(state, action.payload));
	}
});

export const { resetCards } = cardsSlice.actions;

export const selectCardById = (id: CardType['id']) => (state: AppRootStateType) => selectById(state, id);

export type CardsSliceType = typeof cardsSlice;

export default cardsSlice.reducer;
