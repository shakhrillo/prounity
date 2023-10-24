import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';
import { NoteType, NotesType } from '../../app/main/apps/notes/types/NoteType';
import { LabelsType, LabelType } from '../../app/main/apps/notes/types/LabelType';
import { Params } from '../ExtendedMockAdapter';

const notesDB = mockApi.components.examples.notes_notes.value as NotesType;
const labelsDB = mockApi.components.examples.notes_labels.value as LabelsType;

mock.onGet('/api/notes').reply(() => {
	return [200, _.filter(notesDB, { archived: false })];
});

mock.onPost('/api/notes').reply(({ data }) => {
	const newNote = { id: FuseUtils.generateGUID(), ...JSON.parse(data as string) } as NoteType;

	notesDB.push(newNote);

	return [200, newNote];
});

mock.onGet('/api/notes/archive').reply(() => {
	return [200, _.filter(notesDB, { archived: true })];
});

mock.onGet('/api/notes/reminders').reply(() => {
	return [200, _.filter(notesDB, (item) => item.reminder && !item.archived)];
});

mock.onGet('/api/notes/labels').reply(() => {
	return [200, labelsDB];
});

mock.onPost('/api/notes/labels').reply(({ data }) => {
	const newLabel = { id: FuseUtils.generateGUID(), ...JSON.parse(data as string) } as LabelType;

	labelsDB.push(newLabel);

	return [200, newLabel];
});

mock.onDelete('/api/notes/labels/:id').reply((config) => {
	const { id } = config.params as Params;

	_.remove(labelsDB, { id });

	return [200, id];
});

mock.onPut('/api/notes/labels/:id').reply((config) => {
	const { id } = config.params as Params;

	_.assign(_.find(labelsDB, { id }), JSON.parse(config.data as string));

	return [200, _.find(labelsDB, { id })];
});

mock.onGet('/api/notes/labels/:id').reply((config) => {
	const { id } = config.params as Params;

	const response = _.filter(notesDB, (item) => item.labels.includes(id) && !item.archived);

	if (response) {
		return [200, response];
	}

	return [404, 'Requested notes do not exist.'];
});

mock.onGet('/api/notes/:id').reply((config) => {
	const { id } = config.params as Params;

	const note = _.find(notesDB, { id });

	if (note) {
		return [200, note];
	}

	return [404, 'Requested task do not exist.'];
});

mock.onPut('/api/notes/:id').reply((config) => {
	const { id } = config.params as Params;

	_.assign(_.find(notesDB, { id }), JSON.parse(config.data as string));

	return [200, _.find(notesDB, { id })];
});

mock.onDelete('/api/notes/:id').reply((config) => {
	const { id } = config.params as Params;

	_.remove(notesDB, { id });

	return [200, id];
});
