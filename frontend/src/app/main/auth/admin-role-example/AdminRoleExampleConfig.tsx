import AdminRoleExample from './AdminRoleExample';
import authRoles from '../../../auth/authRoles';

/**
 * The AdminRoleExampleConfig object is a configuration object for the AdminRoleExample page in the Fuse application.
 */
const AdminRoleExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin, // ['admin']
	routes: [
		{
			path: 'auth/admin-role-example',
			element: <AdminRoleExample />
		}
	]
};

export default AdminRoleExampleConfig;
