import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { FolderType } from '../types/FolderType';

/**
 * The folder model.
 */
const FolderModel = (data: PartialDeep<FolderType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		title: '',
		slug: '',
		icon: ''
	});

export default FolderModel;
