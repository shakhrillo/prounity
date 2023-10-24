import _ from '@lodash';
import mockApi from '../mock-api.json';
import mock from '../mock';
import { FileManagerItemType, FileManagerItemsType } from '../../app/main/apps/file-manager/types/FileManagerItemType';
import { Params } from '../ExtendedMockAdapter';

const itemsApi = mockApi.components.examples.file_manager_items.value as FileManagerItemsType;

mock.onGet('/api/file-manager/:folderId').reply((config) => {
	const { folderId: _folderId } = config.params as Params;

	let items = _.cloneDeep(itemsApi);

	const folderId = _folderId === 'undefined' ? null : _folderId;

	items = items.filter((item) => item.folderId === folderId);

	const pathItems = _.cloneDeep(itemsApi);
	const path = [];

	let currentFolder: FileManagerItemType | null = null;

	if (folderId) {
		currentFolder = pathItems.find((item) => item.id === folderId);
		path.push(currentFolder);
	}

	while (currentFolder?.folderId) {
		// eslint-disable-next-line no-loop-func
		currentFolder = pathItems.find((item) => item.id === currentFolder?.folderId);
		if (currentFolder) {
			path.unshift(currentFolder);
		}
	}

	return [
		200,
		{
			items,
			path
		}
	];
});
