import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import UserModel from './UserModel';
import { PostType } from '../types/PostType';

/**
 * The post model.
 */
function PostModel(data: PartialDeep<PostType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		user: UserModel({}),
		message: '',
		time: '',
		type: '',
		like: 0,
		share: 0,
		media: {
			type: 'i',
			preview: ''
		},
		comments: []
	});
}

export default PostModel;
