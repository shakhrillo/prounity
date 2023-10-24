import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { TagsType } from '../types/TagType';

/**
 * The tag model.
 */
const TagModel = (data: PartialDeep<TagsType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		title: ''
	});

export default TagModel;
