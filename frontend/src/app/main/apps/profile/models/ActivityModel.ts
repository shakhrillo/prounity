import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import UserModel from './UserModel';
import { ActivityType } from '../types/ActivityType';

/**
 * The activity model.
 */
function ActivityModel(data: PartialDeep<ActivityType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		user: {},
		message: UserModel({}),
		time: ''
	});
}

export default ActivityModel;
