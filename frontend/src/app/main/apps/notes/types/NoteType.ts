import { NoteListItemsType } from './NoteListItemType';

/**
 * NoteType
 */
export type NoteType = {
	id: string;
	title: string;
	content: string;
	tasks: NoteListItemsType;
	image: string | null;
	reminder: string | null;
	labels: string[];
	archived: boolean;
	createdAt: string;
	updatedAt: string | null;
};

/**
 * NotesType
 */
export type NotesType = NoteType[];
