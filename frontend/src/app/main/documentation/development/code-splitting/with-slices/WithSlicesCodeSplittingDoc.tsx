import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/**
 * Code Splitting with slices Doc
 * This document provides information on how to use code splitting with slices.
 */
function WithSlicesCodeSplittingDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Code Splitting with Slices
			</Typography>
			<Typography
				variant="h5"
				className="text-20 mt-20 mb-10 font-700"
			>
				Using `lazyWithSlices` in configuration pages with route definitions
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				The lazyWithSlices is a Higher Order Component (HOC) tailored to streamline the lazy loading of React
				components and simultaneously inject multiple Redux slices (crafted using Redux Toolkit) into the Redux
				store upon the component's activation. This HOC stands out in modular applications where different
				components could depend on various slices of state. With lazyWithSlices, the application ensures optimal
				performance by loading only the necessary components and their corresponding slices as needed.
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
					lazy: From React, this function provides the ability to load components dynamically, ensuring
					they're fetched only when they are to be rendered.
				</li>
				<li>
					withSlices: An HOC which injects multiple slices into the Redux store dynamically before the
					component renders.
				</li>
			</Typography>

			<Typography
				component="p"
				className="mb-16"
			>
				Combining the two, lazyWithSlices allows for dynamic component and state management, enhancing
				performance by preventing unnecessary code from being loaded upfront.
			</Typography>

			<Typography
				variant="h6"
				className="text-20 mt-20 mb-10 font-700"
			>
				Automatic Reducer Key Assignment:
			</Typography>
			<Typography
				component="p"
				className="mb-16"
			>
				One significant advantage of using slices created with Redux Toolkit is the automatic assignment of
				reducer keys based on the slice name. Therefore, with lazyWithSlices, there's no need to manually
				specify a key for the reducer. The key is derived directly from the slice name. For instance, if a slice
				is created as:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-typescript mb-32"
			>
				{`
					createSlice({
						name: "academyApp/courses"
					})

					`}
			</FuseHighlight>

			<Typography
				component="p"
				className="mb-16"
			>
				It's automatically stored in the Redux store under store.academyApp.courses.
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
				Importing: To use lazyWithSlices, first import it:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-typescript mb-32"
			>
				{`
					import lazyWithSlices from 'app/store/lazyWithSlices';
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
					const ComponentName = lazyWithSlices(() => import('./PathToComponent'), [slice1, slice2, ...]);
					`}
			</FuseHighlight>

			<Typography
				component="ul"
				className="mb-16 list-disc list-inside space-y-8"
			>
				<li>
					{`() => import('./PathToComponent'): A dynamic import function pointing to the component you wish to lazily load.`}
				</li>

				<li>
					[slice1, slice2, ...]: An array of Redux slices associated with the component that will be
					dynamically injected into the Redux store when the component is loaded.
				</li>
			</Typography>

			<Typography
				component="p"
				className="mb-16"
			>
				Example: Using the data provided:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-typescript mb-32"
			>
				{`
					const AcademyApp = lazyWithSlices(() => import('./AcademyAppConfig'), [courseSlice, coursesSlice]);
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
				When using with a routing system like react-router, you can directly utilize the lazyWithSlices function
				within your route configurations:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-typescript mb-32"
			>
				{`
					const Component = lazyWithSlices(() => import('./AcademyAppComponent'), [courseSlice, coursesSlice]);
				
					const routes: RouteConfig[] = [
					{
						path: '/academy-app',
						component: <AcademyApp/>,
					},
				];
				];
					`}
			</FuseHighlight>
		</>
	);
}

export default WithSlicesCodeSplittingDoc;
