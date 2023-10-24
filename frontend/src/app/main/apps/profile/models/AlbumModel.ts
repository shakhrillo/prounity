import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { AlbumType } from '../types/AlbumType';

/**
 * The album model.
 */
function AlbumModel(data: PartialDeep<AlbumType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		name: '',
		info: '',
		media: []
	});
}

export default AlbumModel;
