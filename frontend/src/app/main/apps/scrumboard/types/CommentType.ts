/**
 * Comment Type
 */
export type CommentType = {
	id: string;
	type: string;
	idMember: string;
	message: string;
	time: number;
};

/**
 * Comments Type
 */
export type CommentsType = CommentType[];
