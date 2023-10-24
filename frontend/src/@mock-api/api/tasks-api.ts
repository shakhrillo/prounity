import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';
import { TasksType, TaskType } from '../../app/main/apps/tasks/types/TaskType';
import { TagsType } from '../../app/main/apps/tasks/types/TagType';
import { Params } from '../ExtendedMockAdapter';

let tasksDB = mockApi.components.examples.tasks.value as TasksType;
const tagsDB = mockApi.components.examples.tasks_tags.value as TagsType;

mock.onGet('/api/tasks').reply(() => {
	return [200, tasksDB];
});

mock.onPost('/api/tasks').reply(({ data }) => {
	const newtask = { id: FuseUtils.generateGUID(), ...JSON.parse(data as string) } as TaskType;

	tasksDB.push(newtask);

	return [200, newtask];
});

mock.onPost('/api/tasks/reorder').reply(({ data }) => {
	const { startIndex, endIndex } = JSON.parse(data as string) as { startIndex: number; endIndex: number };
	const ordered = _.merge([], tasksDB);

	const [removed] = ordered.splice(startIndex, 1) as TaskType[];

	ordered.splice(endIndex, 0, removed);

	tasksDB = ordered;

	return [200, tasksDB];
});

mock.onGet('/api/tasks/tags').reply(() => {
	return [200, tagsDB];
});

mock.onGet('/api/tasks/:id').reply((config) => {
	const { id } = config.params as Params;

	const task = _.find(tasksDB, { id });

	if (task) {
		return [200, task];
	}

	return [404, 'Requested task do not exist.'];
});

mock.onPut('/api/tasks/:id').reply((config) => {
	const { id } = config.params as Params;

	_.assign(_.find(tasksDB, { id }), JSON.parse(config.data as string));

	return [200, _.find(tasksDB, { id })];
});

mock.onDelete('/api/tasks/:id').reply((config) => {
	const { id } = config.params as Params;

	_.remove(tasksDB, { id });

	return [200, id];
});
