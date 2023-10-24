import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { MemberType } from '../types/MemberType';

/**
 * The member model.
 */
function MemberModel(data: PartialDeep<MemberType>): MemberType {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		name: '',
		avatar: ''
	});
}

export default MemberModel;
