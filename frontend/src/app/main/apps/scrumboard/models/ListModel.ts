import _ from '@lodash';
import { ListType } from '../types/ListType';

/**
 * The list model.
 */
function ListModel(data: Partial<ListType>): ListType {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		boardId: '',
		title: ''
	});
}

export default ListModel;
