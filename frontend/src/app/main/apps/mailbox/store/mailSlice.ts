import { createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import _ from '@lodash';
import history from '@history';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { AsyncStateType, RootStateType } from 'app/store/types';
import { getMails } from './mailsSlice';
import { MailType } from '../types/MailType';
import RouteParamsType from '../types/RouteParamsType';

export type AppRootStateType = RootStateType<mailSliceType>;

/**
 * Get mail from server
 */
export const getMail = createAppAsyncThunk<MailType, RouteParamsType>(
	'mailboxApp/mail/getMail',
	async (routeParams, { rejectWithValue }) => {
		let url = '/api/mailbox/mails/';
		if (routeParams.folderHandle) {
			url += `${routeParams.folderHandle}/${routeParams.mailId}`;
		}

		if (routeParams.labelHandle) {
			url += `labels/${routeParams.labelHandle}/${routeParams.mailId}`;
		}

		if (routeParams.filterHandle) {
			url += `filters/${routeParams.filterHandle}/${routeParams.mailId}`;
		}

		try {
			const response = await axios.get(url);

			const data = (await response.data) as MailType;

			return data;
		} catch (error) {
			history.push({ pathname: `/apps/mailbox` });
			const axiosError = error as AxiosError;
			return rejectWithValue(axiosError.message);
		}
	}
);

const initialState: AsyncStateType<MailType> = {
	data: null,
	status: 'idle',
	error: null
};

/**
 * The Mailbox App mail slice.
 */
export const mailSlice = createSlice({
	name: 'mailboxApp/mail',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getMail.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getMail.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'succeeded';
			})
			.addCase(getMails.fulfilled, (state, action) => {
				const mails = action.payload.data;

				if (state.data) {
					const mail = _.find(mails, { id: state.data.id });

					if (mail) {
						state.data = mail;
					} else {
						state = initialState;
					}
					return;
				}

				state = initialState;
			});
	}
});

export const selectMail = (state: AppRootStateType) => state.mailboxApp.mail;

export type mailSliceType = typeof mailSlice;

export default mailSlice.reducer;
