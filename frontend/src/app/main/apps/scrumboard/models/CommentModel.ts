import FuseUtils from '@fuse/utils';
import getUnixTime from 'date-fns/getUnixTime';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { CommentType } from '../types/CommentType';

/**
 * The comment model.
 */
function CommentModel(data: PartialDeep<CommentType>): CommentType {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		type: 'comment',
		idMember: null,
		message: '',
		time: getUnixTime(new Date())
	});
}

export default CommentModel;
