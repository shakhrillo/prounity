/**
 * Guide Type
 */
export type GuideType = {
	id: string;
	categoryId: string;
	slug: string;
	title: string;
	subtitle: string;
	content: string;
};

/**
 * Guides Type
 */
export type GuidesType = GuideType[];
