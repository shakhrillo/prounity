/**
 * File Manager Item Type
 */
export type FileManagerItemType = {
	id: string;
	folderId: string;
	name: string;
	createdBy: string;
	createdAt: string;
	modifiedAt: string;
	size: string;
	type: string;
	contents: string;
	description: string;
};

export type FileManagerItemsType = FileManagerItemType[];
