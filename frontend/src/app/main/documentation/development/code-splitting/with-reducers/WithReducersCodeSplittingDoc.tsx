import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/**
 * Code Splitting with reducers Doc
 * This document provides information on how to use code splitting with reducers.
 */
function WithReducersCodeSplittingDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Code Splitting with Reducers (default)
			</Typography>
			<Typography
				variant="h5"
				className="text-20 mt-20 mb-10 font-700"
			>
				Using `lazyWithReducer` in configuration pages with route definitions
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				The lazyWithReducer is a Higher Order Component (HOC) which facilitates not only the lazy loading of a
				React component but also injecting the associated Redux reducer into the Redux store upon its loading.
				This utility is especially beneficial in large applications, where code-splitting and dynamic reducer
				injection can significantly optimize the application's performance by loading only the necessary parts
				when they are required.
			</Typography>

			<Typography
				variant="h6"
				className="text-20 mt-20 mb-10 font-700"
			>
				How it works:
			</Typography>

			<Typography
				component="ul"
				className="mb-16 list-disc list-inside space-y-8"
			>
				<li>
					lazy: From React, it allows us to dynamically load components. This results in the component being
					split from the main bundle and being loaded only when it's required.
				</li>
				<li>
					withReducer: An HOC we've defined that appends a Redux reducer to the store dynamically before the
					component renders. By combining the two, lazyWithReducer provides a streamlined way to code-split
					and simultaneously manage the state associated with that component.
				</li>
			</Typography>

			<Typography
				variant="h6"
				className="text-20 mt-20 mb-10 font-700"
			>
				Usage:
			</Typography>

			<Typography
				component="p"
				className="mb-16"
			>
				Importing: To use lazyWithReducer, you first need to import it:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-typescript mb-32"
			>
				{`
					import lazyWithReducer from 'app/store/lazyWithReducer';
					`}
			</FuseHighlight>

			<Typography
				component="p"
				className="mb-16"
			>
				Basic Usage:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-typescript mb-32"
			>
				{`
					const ComponentName = lazyWithReducer('keyForReducer', () => import('./PathToComponent'), reducerInstance);
					`}
			</FuseHighlight>

			<Typography
				component="ul"
				className="mb-16 list-disc list-inside space-y-8"
			>
				<li>keyForReducer: A string which acts as a unique key for the reducer in the Redux store.</li>
				<li>
					{`() => import('./PathToComponent'): A dynamic import statement. This is the path to the component you want to lazily load.`}
				</li>

				<li>
					reducerInstance: This is the reducer associated with the component which will be dynamically
					injected into the Redux store.
				</li>
			</Typography>

			<Typography
				component="p"
				className="mb-16"
			>
				Example: As mentioned in the provided information:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-typescript mb-32"
			>
				{`
					const AcademyApp = lazyWithReducer('academyApp', () => import('./AcademyApp'), reducer);
					`}
			</FuseHighlight>

			<Typography
				variant="h6"
				className="text-20 mt-20 mb-10 font-700"
			>
				Integrating with Route:
			</Typography>

			<Typography
				component="p"
				className="mb-16"
			>
				When integrating with a routing mechanism (like react-router), you can directly use the lazyWithReducer
				function within your route definitions:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-typescript mb-32"
			>
				{`
					const AcademyApp = lazyWithReducer('academyApp', () => import('./AcademyAppComponent'), reducerInstance);
				
					const routes: RouteConfig[] = [
					{
						path: '/academy-app',
						component: <AcademyApp/>,
					},
				];
					`}
			</FuseHighlight>
		</>
	);
}

export default WithReducersCodeSplittingDoc;
