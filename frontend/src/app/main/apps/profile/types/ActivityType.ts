import { UserType } from './UserType';

/**
 * The Activity type definition.
 */
export type ActivityType = {
	id: string;
	user: UserType;
	message: string;
	time: string;
};

/**
 * The Activities type definition.
 */
export type ActivitiesType = ActivityType[];
