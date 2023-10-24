import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { GuideType } from '../types/GuideType';

/**
 * Creates a new guide object with the specified data.
 */
const GuideModel = (data: PartialDeep<GuideType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		categoryId: '',
		slug: '',
		title: '',
		subtitle: '',
		content: ''
	});

export default GuideModel;
