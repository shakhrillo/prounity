import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { FilterType } from '../types/FilterType';

/**
 * The filter model.
 */
const FilterModel = (data: PartialDeep<FilterType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		title: '',
		slug: '',
		icon: ''
	});

export default FilterModel;
