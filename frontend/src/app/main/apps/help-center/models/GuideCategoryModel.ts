import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { GuideCategoryType } from '../types/GuideCategoryType';

/**
 * Creates a new guide category object with the specified data.
 */
const GuideCategoryModel = (data: PartialDeep<GuideCategoryType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		slug: '',
		title: ''
	});

export default GuideCategoryModel;
