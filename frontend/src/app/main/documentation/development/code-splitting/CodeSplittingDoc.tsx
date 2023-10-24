import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/**
 * Code Splitting Doc
 * This document provides information on how to use code splitting.
 */
function CodeSplittingDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Code Splitting
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				By code-splitting your app, you can "lazy-load" only the content that's needed by users at any given
				moment, significantly boosting your app's performance. In addition to avoiding loading code that the
				user may never need, you also reduce the amount of code needed for the initial load.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Route-based code splitting
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				We utilize the <b>React.lazy</b> function within our <b>HOCs</b> to dynamically import both the
				component and its associated lazy-loaded reducer.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-24 font-700"
				variant="h5"
			>
				Check out the usages:
			</Typography>

			<Typography
				className="mb-16 space-y-8"
				component="p"
			>
				<li>
					<Link to="/documentation/development/code-splitting/with-reducers">
						Code Splitting with Reducers (default)
					</Link>
				</li>
				<li>
					<Link to="/documentation/development/code-splitting/with-slices">Code Splitting with Slices</Link>
				</li>
			</Typography>
		</>
	);
}

export default CodeSplittingDoc;
