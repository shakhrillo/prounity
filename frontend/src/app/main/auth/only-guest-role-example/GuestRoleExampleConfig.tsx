import GuestRoleExample from './GuestRoleExample';
import authRoles from '../../../auth/authRoles';

/**
 * GuestRoleExampleConfig
 */
const GuestRoleExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.onlyGuest, // ['guest']
	routes: [
		{
			path: 'auth/guest-role-example',
			element: <GuestRoleExample />
		}
	]
};

export default GuestRoleExampleConfig;
