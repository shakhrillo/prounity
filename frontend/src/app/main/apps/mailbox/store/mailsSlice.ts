import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import { ChangeEvent } from 'react';
import { selectFolders } from './foldersSlice';
import { selectLabels } from './labelsSlice';
import { selectFilters } from './filtersSlice';
import { MailsType, MailType } from '../types/MailType';
import RouteParamsType from '../types/RouteParamsType';
import ItemType from '../types/ItemType';

export type AppRootStateType = RootStateType<mailsSliceType>;

/**
 * Get mails from server
 */
export const getMails = createAppAsyncThunk<{ data: MailsType; routeParams: RouteParamsType }, RouteParamsType | void>(
	'mailboxApp/mails/getMails',
	async (_routeParams, { getState }) => {
		const AppState = getState() as AppRootStateType;
		const routeParams: RouteParamsType = _routeParams || AppState.mailboxApp.mails.routeParams;

		let url = '/api/mailbox/mails/';
		if (routeParams) {
			if (routeParams.folderHandle) {
				url += routeParams.folderHandle;
			}

			if (routeParams.labelHandle) {
				url += `labels/${routeParams.labelHandle}`;
			}

			if (routeParams.filterHandle) {
				url += `filters/${routeParams.filterHandle}`;
			}
		}

		const response = await axios.get(url);

		const data = (await response.data) as MailsType;

		return { data, routeParams };
	}
);

export const setActionToMails = createAppAsyncThunk<
	boolean,
	{ type: ItemType; value: boolean | string | string[]; ids: string[] }
>('mailboxApp/mails/setActionToMails', async ({ type, value, ids }, { dispatch }) => {
	const response = await axios.post('/api/mailbox/actions', {
		type,
		value,
		ids
	});

	const data = (await response.data) as boolean;

	dispatch(getMails());

	return data;
});

const mailsAdapter = createEntityAdapter<MailType>({});

const initialState = mailsAdapter.getInitialState<{
	searchText: string;
	routeParams: RouteParamsType;
	selectedMailIds: string[];
}>({
	searchText: '',
	routeParams: {},
	selectedMailIds: []
});

export const { selectAll: selectMails, selectById: selectMailById } = mailsAdapter.getSelectors(
	(state: AppRootStateType) => state.mailboxApp.mails
);

/**
 * The Mailbox App mails slice.
 */
export const mailsSlice = createSlice({
	name: 'mailboxApp/mails',
	initialState,
	reducers: {
		setMailsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload as string;
			},
			prepare: (event: ChangeEvent<HTMLInputElement>) => ({
				payload: event.target.value || '',
				meta: undefined,
				error: null
			})
		},
		selectAllMails: (state) => {
			state.selectedMailIds = state.ids as string[];
		},
		deselectAllMails: (state) => {
			state.selectedMailIds = [];
		},
		selectMailsByParameter: (state, action) => {
			const [parameter, value] = action.payload as [keyof MailType, string];

			state.selectedMailIds = state.ids.filter((id) => {
				const entity = state.entities[id] as MailType;
				const entityParameter = entity[parameter];

				return entityParameter ? entityParameter === value : false;
			}) as string[];
		},
		toggleInSelectedMails: (state, action) => {
			const mailId = action.payload as string;

			state.selectedMailIds = state.selectedMailIds.includes(mailId)
				? state.selectedMailIds.filter((id) => id !== mailId)
				: ([...state.selectedMailIds, mailId] as string[]);
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getMails.fulfilled, (state, action) => {
			const { data, routeParams } = action.payload;
			mailsAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.selectedMailIds = [];
		});
	}
});

export const { setMailsSearchText, selectAllMails, deselectAllMails, selectMailsByParameter, toggleInSelectedMails } =
	mailsSlice.actions;

export const selectMailsTitle = (routeParams: RouteParamsType) =>
	createSelector([selectFolders, selectLabels, selectFilters], (folders, labels, filters) => {
		let title = '';

		if (routeParams.folderHandle) {
			title = _.find(folders, { slug: routeParams.folderHandle })?.title;
		}

		if (routeParams.labelHandle) {
			title = _.find(labels, { slug: routeParams.labelHandle })?.title;
		}

		if (routeParams.filterHandle) {
			title = _.find(filters, { slug: routeParams.filterHandle })?.title;
		}
		return title;
	});

export const selectSearchText = (state: AppRootStateType) => state.mailboxApp?.mails.searchText;

export const selectSelectedMailIds = (state: AppRootStateType) => state.mailboxApp?.mails.selectedMailIds;

export type mailsSliceType = typeof mailsSlice;

export default mailsSlice.reducer;
