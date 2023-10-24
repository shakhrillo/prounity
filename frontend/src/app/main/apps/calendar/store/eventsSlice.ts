import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { DeepPartial } from 'react-hook-form';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core';
import formatISO from 'date-fns/formatISO';
import { selectSelectedLabels } from './labelsSlice';
import { EventType } from '../types/EventType';

type AppRootStateType = RootStateType<eventsSliceType>;

export const dateFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';

/**
 * Get events from server
 */
export const getEvents = createAppAsyncThunk('calendarApp/events/getEvents', async () => {
	const response = await axios.get('/api/calendar/events');

	const data = (await response.data) as EventType[];

	return data;
});

/**
 * Add new event
 */
export const addEvent = createAppAsyncThunk<EventType, EventType>('calendarApp/events/addEvent', async (newEvent) => {
	const response = await axios.post('/api/calendar/events', newEvent);

	const data = (await response.data) as EventType;

	return data;
});

/**
 * Update event
 */
export const updateEvent = createAppAsyncThunk<EventType, EventType>(
	'calendarApp/events/updateEvent',
	async (event) => {
		const response = await axios.put(`/api/calendar/events/${event.id}`, event);

		const data = (await response.data) as EventType;

		return data;
	}
);

/**
 * Remove event
 */
export const removeEvent = createAppAsyncThunk<string, string>('calendarApp/events/removeEvent', async (eventId) => {
	const response = await axios.delete(`/api/calendar/events/${eventId}`);

	const data = (await response.data) as string;

	return data;
});

const eventsAdapter = createEntityAdapter<EventType>();

export type EventDialogType = {
	type: 'new' | 'edit';
	props: {
		open: boolean;
		anchorPosition?: { top: number; left: number };
	};
	data?: DeepPartial<EventType> | null;
};

const initialState = eventsAdapter.getInitialState<{ eventDialog: EventDialogType }>({
	eventDialog: {
		type: 'new',
		props: {
			open: false,
			anchorPosition: { top: 200, left: 400 }
		},
		data: null
	}
});

export const {
	selectAll: selectEvents,
	selectIds: selectEventIds,
	selectById: selectEventById
} = eventsAdapter.getSelectors((state: AppRootStateType) => state.calendarApp.events);

/**
 * The Calendar App events slice.
 */
export const eventsSlice = createSlice({
	name: 'calendarApp/events',
	initialState,
	reducers: {
		openNewEventDialog: {
			prepare: (selectInfo: Partial<DateSelectArg>) => {
				const { start, end, jsEvent } = selectInfo;
				const payload: EventDialogType = {
					type: 'new',
					props: {
						open: true,
						anchorPosition: { top: jsEvent.pageY, left: jsEvent.pageX }
					},
					data: {
						start: formatISO(start),
						end: formatISO(end)
					}
				};
				return { payload, meta: undefined, error: null };
			},
			reducer: (state, action) => {
				state.eventDialog = action.payload as EventDialogType;
			}
		},
		openEditEventDialog: {
			prepare: (clickInfo: EventClickArg) => {
				const { jsEvent, event } = clickInfo;
				const { id, title, allDay, start, end, extendedProps } = event;

				const payload: EventDialogType = {
					type: 'edit',
					props: {
						open: true,
						anchorPosition: { top: jsEvent.pageY, left: jsEvent.pageX }
					},
					data: {
						id,
						title,
						allDay,
						extendedProps,
						start: formatISO(start),
						end: formatISO(end)
					}
				};
				return { payload, meta: undefined, error: null };
			},
			reducer: (state, action) => {
				state.eventDialog = action.payload as EventDialogType;
			}
		},
		closeNewEventDialog: (state) => {
			state.eventDialog = {
				type: 'new',
				props: {
					open: false,
					anchorPosition: { top: 200, left: 400 }
				},
				data: null
			};
		},
		closeEditEventDialog: (state) => {
			state.eventDialog = {
				type: 'edit',
				props: {
					open: false,
					anchorPosition: { top: 200, left: 400 }
				},
				data: null
			};
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getEvents.fulfilled, (state, action) => eventsAdapter.setAll(state, action.payload))
			.addCase(addEvent.fulfilled, (state, action) => eventsAdapter.addOne(state, action.payload))
			.addCase(updateEvent.fulfilled, (state, action) => eventsAdapter.upsertOne(state, action.payload))
			.addCase(removeEvent.fulfilled, (state, action) => eventsAdapter.removeOne(state, action.payload));
	}
});

export const { openNewEventDialog, closeNewEventDialog, openEditEventDialog, closeEditEventDialog } =
	eventsSlice.actions;

export const selectFilteredEvents = createSelector([selectSelectedLabels, selectEvents], (selectedLabels, events) => {
	return events.filter((item) => selectedLabels.includes(item.extendedProps.label));
});

export const selectEventDialog = (state: AppRootStateType) => state.calendarApp.events.eventDialog;

export type eventsSliceType = typeof eventsSlice;

export default eventsSlice.reducer;
