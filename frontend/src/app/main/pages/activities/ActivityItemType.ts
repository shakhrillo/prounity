/**
 * Represents an item in an activity feed.
 */
type ActivityItemType = {
	id: string;
	icon?: string;
	image?: string;
	description: string;
	date: Date;
	extraContent?: string;
	linkedContent?: string;
	link?: string;
	useRouter?: boolean;
};

export default ActivityItemType;
