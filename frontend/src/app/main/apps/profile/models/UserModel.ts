import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { UserType } from '../types/UserType';

/**
 * The user model.
 */
function UserModel(data: PartialDeep<UserType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		name: '',
		avatar: ''
	});
}

export default UserModel;
