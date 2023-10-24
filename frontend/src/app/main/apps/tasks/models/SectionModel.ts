import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { TaskType } from '../types/TaskType';

/**
 * The section model.
 */
const SectionModel = (data: PartialDeep<TaskType>): TaskType =>
	_.defaults(data || {}, {
		type: 'section',
		title: '',
		notes: '',
		completed: false,
		dueDate: null,
		priority: 0,
		tags: [],
		assignedTo: null,
		subTasks: [],
		order: 1
	}) as TaskType;

export default SectionModel;
