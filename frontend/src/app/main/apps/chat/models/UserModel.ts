import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { UserType } from '../types/UserType';

/**
 * User model.
 */
function UserModel(data?: PartialDeep<UserType>) {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		name: '',
		email: '',
		status: '',
		avatar: '',
		about: ''
	});
}

export default UserModel;
