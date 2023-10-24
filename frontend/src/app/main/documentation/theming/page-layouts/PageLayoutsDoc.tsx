import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/**
 * Page Layouts Doc
 * This document provides information on how to use the page layout components.
 */
function PageLayoutsDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Page Layouts
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				One of the strong sides of the Fuse React is its Page layout components.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				Every single app, pre-built pages uses the Fuse React's page layout components.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				Simply, page layout components are pre-built layouts which you can simply copy/paste and start building
				your own page or app based on it.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				Because page layout components, it's very easy to replicate any page style that you can find in Fuse
				React.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Page Layout Components
			</Typography>

			<Typography
				className="my-16"
				component="div"
			>
				<ul>
					<li className="mb-8">
						<Link to="/documentation/fuse-components/fuse-page-simple">FusePageSimple</Link>
					</li>
					<li className="mb-8">
						<Link to="/documentation/fuse-components/fuse-page-carded">FusePageCarded</Link>
					</li>
				</ul>
			</Typography>
		</>
	);
}

export default PageLayoutsDoc;
