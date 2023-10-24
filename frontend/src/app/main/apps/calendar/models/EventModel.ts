import _ from '@lodash';
import { DeepPartial } from 'react-hook-form';
import formatISO from 'date-fns/formatISO';
import { EventType } from '../types/EventType';

/**
 * The event model.
 */
const EventModel = (data?: DeepPartial<EventType>): EventType =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		title: '',
		allDay: true,
		start: formatISO(new Date()),
		end: formatISO(new Date()),
		extendedProps: { desc: '', label: '' }
	});

export default EventModel;
