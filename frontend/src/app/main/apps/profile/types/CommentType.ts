import { UserType } from './UserType';

/**
 * The Comment type definition.
 */
export type CommentType = {
	id: string;
	user: UserType;
	time: string;
	message: string;
};

/**
 * The Comments type definition.
 */
export type CommentsType = CommentType[];
