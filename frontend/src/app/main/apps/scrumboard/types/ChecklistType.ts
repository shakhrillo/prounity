import { CheckListItemType } from './CheckListItemType';

/**
 * Checklist Type
 */
export type ChecklistType = {
	id?: string;
	name: string;
	checkItems: CheckListItemType[];
};

/**
 * Checklists Type
 */
export type ChecklistsType = ChecklistType[];
