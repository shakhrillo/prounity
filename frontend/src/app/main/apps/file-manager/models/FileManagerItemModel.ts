import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { FileManagerItemType } from '../types/FileManagerItemType';

/**
 * FileManager Item Model
 */
const FileManagerItemModel = (data: PartialDeep<FileManagerItemType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		folderId: '',
		name: '',
		createdBy: '',
		createdAt: '',
		modifiedAt: '',
		size: '',
		type: '',
		contents: '',
		description: ''
	});

export default FileManagerItemModel;
