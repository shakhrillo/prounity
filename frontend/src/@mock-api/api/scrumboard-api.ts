import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import CardModel from 'src/app/main/apps/scrumboard/models/CardModel';
import { MembersType } from '../../app/main/apps/scrumboard/types/MemberType';
import mockApi from '../mock-api.json';
import mock from '../mock';
import { BoardType, BoardsType } from '../../app/main/apps/scrumboard/types/BoardType';
import { LabelsType } from '../../app/main/apps/scrumboard/types/LabelType';
import { CardsType, CardType } from '../../app/main/apps/scrumboard/types/CardType';
import { ListType, ListsType } from '../../app/main/apps/scrumboard/types/ListType';
import ListModel from '../../app/main/apps/scrumboard/models/ListModel';
import { Params } from '../ExtendedMockAdapter';

const boardsDB = mockApi.components.examples.scrumboard_boards.value as BoardsType;
const labelsDB = mockApi.components.examples.scrumboard_labels.value as LabelsType;
const cardsDB = mockApi.components.examples.scrumboard_cards.value as CardsType;
const membersDB = mockApi.components.examples.scrumboard_members.value as MembersType;
const listsDB = mockApi.components.examples.scrumboard_lists.value as ListsType;

/**
 * GET BOARDS
 * GET api/scrumboard/boards
 */
mock.onGet('/api/scrumboard/boards').reply(() => {
	return [200, boardsDB];
});

/**
 * CREATE NEW BOARD
 * POST api/scrumboard/boards
 */
mock.onPost('/api/scrumboard/boards').reply(({ data }) => {
	const newBoard = { id: FuseUtils.generateGUID(), ...JSON.parse(data as string) } as BoardType;

	boardsDB.push(newBoard);

	return [200, newBoard];
});

/**
 * GET BOARD LABELS
 * GET api/scrumboard/boards/:boardId/labels
 */
mock.onGet('/api/scrumboard/boards/:boardId/labels').reply((config) => {
	const { boardId } = config.params as Params;

	const labels = labelsDB.filter((item) => item.boardId === boardId);

	return [200, labels];
});

/**
 * CREATE CARD
 * PUT api/scrumboard/boards/:boardId/lists/:listId/cards
 */
mock.onPost('/api/scrumboard/boards/:boardId/lists/:listId/cards').reply((config) => {
	const { boardId, listId } = config.params as Params;

	const newCard = CardModel({
		...(JSON.parse(config.data as string) as CardType),
		id: FuseUtils.generateGUID(),
		boardId,
		listId
	});

	cardsDB.push(newCard);

	const board = _.find(boardsDB, { id: boardId });

	// Add card into board
	_.assign(board, {
		...board,
		lists: board.lists.map((list) => (list.id === listId ? { ...list, cards: [...list.cards, newCard.id] } : list))
	});

	return [200, newCard];
});

/**
 * UPDATE CARD
 * PUT api/scrumboard/boards/:boardId/cards/:cardId
 */
mock.onPut('/api/scrumboard/boards/:boardId/cards/:cardId').reply((config) => {
	const { cardId } = config.params as Params;

	const card = _.find(cardsDB, { id: cardId });

	_.assign(card, JSON.parse(config.data as string));
	return [200, card];
});

/**
 * DELETE CARD
 * api/scrumboard/boards/:boardId/cards/:cardId
 */
mock.onDelete('/api/scrumboard/boards/:boardId/cards/:cardId').reply((config) => {
	const { boardId, cardId } = config.params as Params;

	const board = _.find(boardsDB, { id: boardId });

	// Remove cards from board
	_.assign(board, {
		...board,
		lists: board.lists.map((list) => ({
			...list,
			cards: _.reject(list.cards, (id) => id === cardId)
		}))
	});

	// Remove card
	_.remove(cardsDB, { id: cardId });

	return [200, cardId];
});

/** GET LISTS BY BOARD ID
 * GET /api/scrumboard/boards/:boardId/lists
 */
mock.onGet('/api/scrumboard/boards/:boardId/lists').reply((config) => {
	const { boardId } = config.params as Params;

	const lists = listsDB.filter((item) => item.boardId === boardId);

	return [200, lists];
});

/**
 * UPDATE LIST
 * PUT api/scrumboard/boards/:boardId/lists/:listId
 */
mock.onPut('/api/scrumboard/boards/:boardId/lists/:listId').reply((config) => {
	const { listId } = config.params as Params;

	const list = _.find(listsDB, { id: listId });

	_.assign(list, JSON.parse(config.data as string));

	return [200, list];
});

/**
 * CREATE LIST
 * POST api/scrumboard/boards/:boardId/lists
 */
mock.onPost('/api/scrumboard/boards/:boardId/lists').reply((config) => {
	const { boardId } = config.params as Params;

	const newList: ListType = ListModel({
		...(JSON.parse(config.data as string) as ListType),
		id: FuseUtils.generateGUID(),
		boardId
	});

	listsDB.push(newList);

	const board = _.find(boardsDB, { id: boardId });

	// Add list into board
	_.assign(board, { ...board, lists: [...board.lists, { id: newList.id, cards: [] }] });

	return [200, newList];
});

/**
 * DELETE LIST
 * DELETE api/scrumboard/boards/:boardId/lists/:listId
 */
mock.onDelete('/api/scrumboard/boards/:boardId/lists/:listId').reply((config) => {
	const { boardId, listId } = config.params as Params;

	const board = _.find(boardsDB, { id: boardId });

	// Remove cards of the list
	_.remove(cardsDB, { listId });

	// Remove list from board
	_.assign(board, { ...board, lists: _.reject(board.lists, { id: listId }) });

	// Remove list
	_.remove(listsDB, { id: listId });

	return [200, listId];
});

/**
 * GET BOARD CARDS
 * GET api/scrumboard/boards/:boardId/cards
 */
mock.onGet('/api/scrumboard/boards/:boardId/cards').reply((config) => {
	const { boardId } = config.params as Params;

	const cards = cardsDB.filter((item) => item.boardId === boardId);

	return [200, cards];
});

/**
 * GET BOARD
 * GET api/scrumboard/boards/:boardId
 */
mock.onGet('/api/scrumboard/boards/:boardId').reply((config) => {
	const { boardId } = config.params as Params;

	const board = _.find(boardsDB, { id: boardId });

	if (board) {
		return [200, board];
	}

	return [404, 'Requested board do not exist.'];
});

/**
 * UPDATE BOARD
 * PUT api/scrumboard/boards/:boardId
 */
mock.onPut('/api/scrumboard/boards/:boardId').reply((config) => {
	const { boardId } = config.params as Params;

	const board = _.find(boardsDB, { id: boardId });

	_.assign(board, { ...board, ...JSON.parse(config.data as string) });

	return [200, board];
});

/**
 * DELETE BOARD
 * DELETE api/scrumboard/boards/:boardId
 */
mock.onDelete('/api/scrumboard/boards/:boardId').reply((config) => {
	const { boardId } = config.params as Params;

	_.remove(boardsDB, { id: boardId });
	_.remove(cardsDB, { boardId });
	_.remove(listsDB, { boardId });

	return [200, boardId];
});

/**
 * GET ALL MEMBERS
 * GET api/scrumboard/members
 */
mock.onGet('/api/scrumboard/members').reply(() => {
	return [200, membersDB];
});
