import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';
import { EventType } from '../../app/main/apps/calendar/types/EventType';
import { LabelType } from '../../app/main/apps/calendar/types/LabelType';
import { Params } from '../ExtendedMockAdapter';

const eventsDB = mockApi.components.examples.calendar_events.value as EventType[];
const labelsDB = mockApi.components.examples.calendar_labels.value as LabelType[];

mock.onGet('/api/calendar/labels').reply(() => {
	return [200, labelsDB];
});

mock.onPost('/api/calendar/labels').reply(({ data }) => {
	const newLabel = { id: FuseUtils.generateGUID(), ...JSON.parse(data as string) } as LabelType;

	labelsDB.push(newLabel);

	return [200, newLabel];
});

mock.onPut('/api/calendar/labels/:id').reply((config) => {
	const { id } = config.params as Params;

	_.assign(_.find(labelsDB, { id }), JSON.parse(config.data as string));

	return [200, _.find(labelsDB, { id })];
});

mock.onGet('/api/calendar/labels/:id').reply((config) => {
	const { id } = config.params as Params;

	const response = _.find(labelsDB, { label: id });

	if (response) {
		return [200, response];
	}

	return [404, 'Requested label do not exist.'];
});

mock.onGet('/api/calendar/labels/:id').reply((config) => {
	const { id } = config.params as Params;

	const response = _.find(labelsDB, { label: id });

	if (response) {
		return [200, response];
	}

	return [404, 'Requested label do not exist.'];
});

mock.onDelete('/api/calendar/labels/:id').reply((config) => {
	const { id } = config.params as Params;

	_.remove(labelsDB, { id });
	_.remove(eventsDB, { extendedProps: { label: id } });

	return [200, id];
});

mock.onGet('/api/calendar/events').reply(() => {
	return [200, eventsDB];
});

mock.onPost('/api/calendar/events').reply(({ data }) => {
	const newEvent = { id: FuseUtils.generateGUID(), ...JSON.parse(data as string) } as EventType;
	eventsDB.push(newEvent);

	return [200, newEvent];
});

mock.onPut('/api/calendar/events/:id').reply((config) => {
	const { id } = config.params as Params;

	_.assign(_.find(eventsDB, { id }), JSON.parse(config.data as string)) as EventType;

	return [200, _.find(eventsDB, { id })];
});

mock.onGet('/api/calendar/events/:id').reply((config) => {
	const { id } = config.params as Params;

	const response = _.find(eventsDB, { event: id });

	if (response) {
		return [200, response];
	}

	return [404, 'Requested event do not exist.'];
});

mock.onDelete('/api/calendar/events/:id').reply((config) => {
	const { id } = config.params as Params;

	_.remove(eventsDB, { id });

	return [200, id];
});
