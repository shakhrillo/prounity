import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { CheckListItemType } from '../types/CheckListItemType';

/**
 * The checklist item model.
 */
function ChecklistItemModel(data: PartialDeep<CheckListItemType>): CheckListItemType {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		name: '',
		checked: false
	});
}

export default ChecklistItemModel;
