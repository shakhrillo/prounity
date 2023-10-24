import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/**
 * Navigation Doc
 * This document provides information on how to use the navigation.
 */
function NavigationDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Navigation
			</Typography>

			<Typography
				className="mb-24"
				variant="h5"
			>
				Default Configuration
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				The theme navigation is located in the file <code>app/configs/navigationConfig.ts</code>, which serves
				as an initial state in the Fuse.navigation redux store.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				This configuration is the initial state of the Fuse.navigation redux state.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Navigation items can be modified, removed, and added using various redux actions from anywhere within
				the app.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				For more information on FuseNavigation components, redux actions, and item types, check out the section
				<Link to="/documentation/fuse-components/fuse-navigation">FuseNavigation Docs</Link>
			</Typography>
		</>
	);
}

export default NavigationDoc;
