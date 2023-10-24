import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { CardType } from '../types/CardType';

/**
 * The card model.
 */
function CardModel(data: PartialDeep<CardType>): CardType {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		boardId: '',
		listId: '',
		title: '',
		description: '',
		labels: [],
		dueDate: 0,
		attachmentCoverId: '',
		memberIds: [],
		attachments: [],
		subscribed: false,
		checklists: [],
		activities: []
	});
}
export default CardModel;
