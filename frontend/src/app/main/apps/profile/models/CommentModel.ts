import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import UserModel from './UserModel';
import { CommentType } from '../types/CommentType';

/**
 * The comment model.
 */
function CommentModel(data: PartialDeep<CommentType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		user: UserModel({}),
		time: '',
		message: ''
	});
}

export default CommentModel;
