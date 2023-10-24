import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { NoteListItemType } from '../types/NoteListItemType';

/**
 * The note list item model.
 */
function NoteListItemModel(data: PartialDeep<NoteListItemType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		content: '',
		completed: false
	});
}

export default NoteListItemModel;
