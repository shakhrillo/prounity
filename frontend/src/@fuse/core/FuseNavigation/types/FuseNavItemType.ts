import { SxProps } from '@mui/system';
import { FuseNavBadgeType } from './FuseNavBadgeType';
import { FuseNavigationType } from './FuseNavigationType';

/**
 * FuseNavItemType
 * A type for Fuse navigation item and its properties.
 */
export type FuseNavItemType = {
	id: string;
	title?: string;
	translate?: string;
	auth?: string[] | string;
	subtitle?: string;
	icon?: string;
	iconClass?: string;
	url?: string;
	target?: string;
	type?: string;
	sx?: SxProps;
	disabled?: boolean;
	active?: boolean;
	exact?: boolean;
	end?: boolean;
	badge?: FuseNavBadgeType;
	children?: FuseNavigationType;
	hasPermission?: boolean;
};
