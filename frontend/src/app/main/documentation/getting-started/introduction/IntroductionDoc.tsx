import Typography from '@mui/material/Typography';

/**
 * Introduction Doc
 * This document provides information on how to use Fuse React.
 */
function IntroductionDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Introduction
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				This version of Fuse is <i>NOT</i> a traditional admin template, it's a React app written entirely with
				Javascript and has no jQuery dependency.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				While Fuse React is a great tool and source for learning React, it also requires at least an entry-level
				of React, Redux knowledge so you can find your way within the source code.
			</Typography>
			<Typography
				className="mb-32"
				component="p"
			>
				Here you can find a list of core libraries, design specifications, and coding standards that we use in
				Fuse React:
			</Typography>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Google's Material Design
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				All libraries and custom made components are following{' '}
				<a
					href="https://www.google.com/design/spec/material-design/introduction.html"
					target="_blank"
					rel="noreferrer noopener"
				>
					Google's Material Design Specifications.
				</a>
			</Typography>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				React
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<a
					href="https://reactjs.org/"
					target="_blank"
					rel="noreferrer noopener"
				>
					React
				</a>{' '}
				is the core of our template. If you don't know what React is or don't know how to use it, we strongly
				recommend checking the React before start doing anything with Fuse.
			</Typography>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Material-UI
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<a
					href="https://mui.com"
					target="_blank"
					rel="noreferrer noopener"
				>
					Material-UI
				</a>{' '}
				is a react UI library that implements Google's Material Design specification.
			</Typography>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				TailwindCSS
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noreferrer noopener"
				>
					TailwindCSS
				</a>{' '}
				It is the core of the style configuration and it provides utility classes for almost every CSS rule
				available.
			</Typography>
			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Create React App (CLI)
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				<a
					href="https://github.com/facebook/create-react-app"
					target="_blank"
					rel="noreferrer noopener"
				>
					Create React App
				</a>{' '}
				is a tool built by developers at Facebook to help you build React applications. It saves you from
				time-consuming setup and configuration.
			</Typography>
		</>
	);
}

export default IntroductionDoc;
