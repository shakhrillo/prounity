import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/**
 * HeroKu Notes Doc
 * This document provides information on how to deploy the application to heroku.
 */
function HerokuNotesDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				HEROKU Notes
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You may encounter some issues if you want to deploy fuse-react to heroku, here is the solution:
			</Typography>

			<Typography
				className="text-16 mt-16 mb-10 font-700"
				variant="h6"
			>
				Use the{' '}
				<a
					href="https://github.com/mars/create-react-app-buildpack#user-content-quick-start"
					target="_blank"
					rel="noreferrer noopener"
				>
					mars/create-react-app
				</a>{' '}
				buildpack:
			</Typography>

			<FuseHighlight
				component="pre"
				className="mb-24"
			>
				{` heroku buildpacks:set mars/create-react-app `}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				the next build will be created with this official pack.
			</Typography>

			<Typography
				className="text-16 mt-16 mb-10 font-700"
				variant="h6"
			>
				Install devDependencies:
			</Typography>

			<FuseHighlight
				component="pre"
				className="mb-24"
			>
				{` heroku config:set NPM_CONFIG_PRODUCTION=false `}
			</FuseHighlight>

			<Typography
				className="text-16 mt-16 mb-10 font-700"
				variant="h6"
			>
				Push skeleton branch to master of heroku
			</Typography>

			<FuseHighlight
				component="pre"
				className="mb-24"
			>
				{` git push heroku skeleton:master `}
			</FuseHighlight>
		</>
	);
}

export default HerokuNotesDoc;
