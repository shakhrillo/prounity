import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import iconsUIConfig from './icons/iconsUIConfig';
import tailwindcssUIConfig from './tailwindcss/tailwindcssUIConfig';
import typographyUIConfig from './typography/typographyUIConfig';
import pageLayoutsUIConfig from './page-layouts/pageLayoutsUIConfig';

/**
 * The user interface configs.
 */
const UserInterfaceConfigs: FuseRouteConfigsType = [
	iconsUIConfig,
	tailwindcssUIConfig,
	typographyUIConfig,
	pageLayoutsUIConfig
];

export default UserInterfaceConfigs;
