import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { LabelType } from '../types/LabelType';

/**
 * The label model.
 */
function LabelModel(data?: PartialDeep<LabelType>) {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		title: '',
		color: '#e75931'
	});
}

export default LabelModel;
