import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { FaqCategoryType } from '../types/FaqCategoryType';

/**
 * Creates a new faq category object with the specified data.
 */
const FaqCategoryModel = (data: PartialDeep<FaqCategoryType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		slug: '',
		title: ''
	});

export default FaqCategoryModel;
