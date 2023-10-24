import { CardType } from './CardType';

/**
 * Board List Type
 */
export type BoardListType = {
	id: string;
	cards: CardType['id'][];
};

/**
 * Board Lists Type
 */
export type BoardListsType = BoardListType[];
