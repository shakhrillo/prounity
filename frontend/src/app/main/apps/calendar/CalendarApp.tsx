import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import FusePageSimple from '@fuse/core/FusePageSimple';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { useAppDispatch, useAppSelector } from 'app/store';
import {
	DateSelectArg,
	DatesSetArg,
	EventAddArg,
	EventChangeArg,
	EventClickArg,
	EventContentArg,
	EventDropArg,
	EventRemoveArg
} from '@fullcalendar/core';
import CalendarHeader from './CalendarHeader';
import EventDialog from './dialogs/event/EventDialog';
import {
	getEvents,
	openEditEventDialog,
	openNewEventDialog,
	selectFilteredEvents,
	updateEvent
} from './store/eventsSlice';
import { getLabels } from './store/labelsSlice';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import CalendarAppSidebar from './CalendarAppSidebar';
import CalendarAppEventContent from './CalendarAppEventContent';
import { EventType } from './types/EventType';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& a': {
		color: `${theme.palette.text.primary}!important`,
		textDecoration: 'none!important'
	},
	'&  .fc-media-screen': {
		minHeight: '100%',
		width: '100%'
	},
	'& .fc-scrollgrid, & .fc-theme-standard td, & .fc-theme-standard th': {
		borderColor: `${theme.palette.divider}!important`
	},
	'&  .fc-scrollgrid-section > td': {
		border: 0
	},
	'& .fc-daygrid-day': {
		'&:last-child': {
			borderRight: 0
		}
	},
	'& .fc-col-header-cell': {
		borderWidth: '0 1px 0 1px',
		padding: '8px 0 0 0',
		'& .fc-col-header-cell-cushion': {
			color: theme.palette.text.secondary,
			fontWeight: 500,
			fontSize: 12,
			textTransform: 'uppercase'
		}
	},
	'& .fc-view ': {
		'& > .fc-scrollgrid': {
			border: 0
		}
	},
	'& .fc-daygrid-day.fc-day-today': {
		backgroundColor: 'transparent!important',
		'& .fc-daygrid-day-number': {
			borderRadius: '100%',
			backgroundColor: `${theme.palette.secondary.main}!important`,
			color: `${theme.palette.secondary.contrastText}!important`
		}
	},
	'& .fc-daygrid-day-top': {
		justifyContent: 'center',

		'& .fc-daygrid-day-number': {
			color: theme.palette.text.secondary,
			fontWeight: 500,
			fontSize: 12,
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: 26,
			height: 26,
			margin: '4px 0',
			borderRadius: '50%',
			float: 'none',
			lineHeight: 1
		}
	},
	'& .fc-h-event': {
		background: 'initial'
	},
	'& .fc-event': {
		border: 0,
		padding: '0 ',
		fontSize: 12,
		margin: '0 6px 4px 6px!important'
	}
}));

/**
 * The calendar app.
 */
function CalendarApp() {
	const [currentDate, setCurrentDate] = useState<DatesSetArg>();
	const dispatch = useAppDispatch();
	const events = useAppSelector(selectFilteredEvents);
	const calendarRef = useRef<FullCalendar>(null);
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);

	useEffect(() => {
		dispatch(getEvents());
		dispatch(getLabels());
	}, [dispatch]);

	useEffect(() => {
		setLeftSidebarOpen(!isMobile);
	}, [isMobile]);

	useEffect(() => {
		// Correct calendar dimentions after sidebar toggles
		setTimeout(() => {
			calendarRef.current?.getApi()?.updateSize();
		}, 300);
	}, [leftSidebarOpen]);

	const handleDateSelect = (selectInfo: DateSelectArg) => {
		dispatch(openNewEventDialog(selectInfo));
	};

	const handleEventDrop = (eventDropInfo: EventDropArg): void => {
		const { id, title, allDay, start, end, extendedProps } = eventDropInfo.event;
		dispatch(
			updateEvent({
				id,
				title,
				allDay,
				start: start?.toISOString() ?? '',
				end: end?.toISOString() ?? '',
				extendedProps
			})
		);
	};

	const handleEventClick = (clickInfo: EventClickArg) => {
		clickInfo.jsEvent.preventDefault();
		dispatch(openEditEventDialog(clickInfo));
	};

	const handleDates = (rangeInfo: DatesSetArg) => {
		setCurrentDate(rangeInfo);
	};

	const handleEventAdd = (addInfo: EventAddArg) => {
		// eslint-disable-next-line no-console
		console.info(addInfo);
	};

	const handleEventChange = (changeInfo: EventChangeArg) => {
		// eslint-disable-next-line no-console
		console.info(changeInfo);
	};

	const handleEventRemove = (removeInfo: EventRemoveArg) => {
		// eslint-disable-next-line no-console
		console.info(removeInfo);
	};

	function handleToggleLeftSidebar() {
		setLeftSidebarOpen(!leftSidebarOpen);
	}

	return (
		<>
			<Root
				header={
					<CalendarHeader
						calendarRef={calendarRef}
						currentDate={currentDate}
						onToggleLeftSidebar={handleToggleLeftSidebar}
					/>
				}
				content={
					<FullCalendar
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
						headerToolbar={false}
						initialView="dayGridMonth"
						editable
						selectable
						selectMirror
						dayMaxEvents
						weekends
						datesSet={handleDates}
						select={handleDateSelect}
						events={events}
						// eslint-disable-next-line react/no-unstable-nested-components
						eventContent={(eventInfo: EventContentArg & { event: EventType }) => (
							<CalendarAppEventContent eventInfo={eventInfo} />
						)}
						eventClick={handleEventClick}
						eventAdd={handleEventAdd}
						eventChange={handleEventChange}
						eventRemove={handleEventRemove}
						eventDrop={handleEventDrop}
						initialDate={new Date(2022, 3, 1)}
						ref={calendarRef}
					/>
				}
				leftSidebarContent={<CalendarAppSidebar />}
				leftSidebarOpen={leftSidebarOpen}
				leftSidebarOnClose={() => setLeftSidebarOpen(false)}
				leftSidebarWidth={240}
				scroll="content"
			/>
			<EventDialog />
			<LabelsDialog />
		</>
	);
}

export default CalendarApp;
