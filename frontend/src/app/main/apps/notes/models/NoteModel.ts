import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { NoteType } from '../types/NoteType';

/**
 * The note model.
 */
function NoteModel(data: PartialDeep<NoteType>) {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		title: '',
		content: '',
		tasks: [],
		image: '',
		reminder: '',
		labels: [],
		archived: false,
		createdAt: '',
		updatedAt: ''
	});
}

export default NoteModel;
