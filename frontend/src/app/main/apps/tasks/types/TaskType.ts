/**
 * Sub Task Type
 */
type SubTask = {
	id?: string;
	title?: string;
	completed?: boolean;
};

/**
 * Task Type
 */
export type TaskType = {
	id: string;
	type: string;
	title: string;
	notes: string;
	completed: boolean;
	dueDate: string;
	priority: number;
	tags: string[];
	assignedTo: null | string;
	subTasks: SubTask[];
	order: number;
};

/**
 * Tasks Type
 */
export type TasksType = TaskType[];
