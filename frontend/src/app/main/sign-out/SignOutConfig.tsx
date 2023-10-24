import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';
import SignOutPage from './SignOutPage';

const SignOutConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: null,
	routes: [
		{
			path: 'sign-out',
			element: <SignOutPage />
		}
	]
};

export default SignOutConfig;
