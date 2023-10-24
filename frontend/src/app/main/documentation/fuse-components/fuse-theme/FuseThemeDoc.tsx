import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/* eslint-disable import/no-webpack-loader-syntax, import/extensions, global-require, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

/**
 * Theme Layouts Doc
 * This document provides information on how to use theme layouts.
 */
function FuseThemeDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				FuseTheme
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				<code>FuseTheme</code> is the theming component of the Fuse React. It allows us to change predefined
				Material UI themes. It should wrap the <code>FuseLayout</code> component.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				<code>src/app/App.tsx</code>
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx"
			>
				{require('!raw-loader!src/app/App.tsx')}
			</FuseHighlight>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Configuration
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Please checkout
				<Link
					className="font-normal mx-4"
					to="/documentation/theming/theme-schemes"
				>
					theming
				</Link>
				at documentation.
			</Typography>
		</>
	);
}

export default FuseThemeDoc;
