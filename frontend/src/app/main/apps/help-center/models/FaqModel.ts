import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { FaqType } from '../types/FaqType';

/**
 * Creates a new faq object with the specified data.
 */
const FaqModel = (data: PartialDeep<FaqType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		categoryId: '',
		question: '',
		answer: ''
	});

export default FaqModel;
