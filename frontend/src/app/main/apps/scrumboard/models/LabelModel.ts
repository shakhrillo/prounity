import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { LabelType } from '../types/LabelType';

/**
 * The label model.
 */
function LabelModel(data: Partial<LabelType>): LabelType {
	data = data || {};
	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		boardId: '',
		title: ''
	});
}

export default LabelModel;
