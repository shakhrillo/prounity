import { MediaType } from './MediaType';

/**
 * Album Type
 */
export type AlbumType = {
	id: string;
	name: string;
	info: string;
	media: MediaType[];
};

/**
 * Albums Type
 */
export type AlbumsType = AlbumType[];
