import { UserType } from './UserType';
import { MediaType } from './MediaType';
import { ArticleType } from './ArticleType';
import { CommentsType } from './CommentType';

/**
 * The Post type definition.
 */
export type PostType = {
	id: string;
	user: UserType;
	message: string;
	time: string;
	type: 'post' | 'article' | 'something' | 'video';
	like: number;
	share: number;
	media?: MediaType;
	article?: ArticleType;
	comments?: CommentsType;
};

export type PostsType = PostType[];
