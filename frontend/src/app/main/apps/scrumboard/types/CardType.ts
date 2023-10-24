import { ChecklistType } from './ChecklistType';
import { CommentsType } from './CommentType';
import { AttachmentType } from './AttachmentType';

export type LabelId = string;

type MemberId = string;

/**
 * Card Type
 */
export type CardType = {
	id: string;
	boardId: string;
	listId: string;
	title: string;
	description: string;
	labels: LabelId[];
	dueDate: number;
	attachmentCoverId: string;
	memberIds: MemberId[];
	attachments: AttachmentType[];
	subscribed: boolean;
	checklists: ChecklistType[];
	activities: CommentsType;
};

/**
 * Cards Type
 */
export type CardsType = CardType[];
