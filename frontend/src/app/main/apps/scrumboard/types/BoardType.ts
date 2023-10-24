import { LabelsType } from './LabelType';
import { BoardListsType } from './BoardListType';

/**
 * Settings Type
 */
type SettingsType = {
	subscribed: boolean;
	cardCoverImages: boolean;
};

/**
 * Board Type
 */
export type BoardType = {
	id: string;
	title: string;
	description: string;
	lastActivity: string;
	icon: string;
	members: string[];
	settings: SettingsType;
	lists: BoardListsType;
	labels: LabelsType;
};

/**
 * Boards Type
 */
export type BoardsType = BoardType[];
