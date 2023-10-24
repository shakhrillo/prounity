import Typography from '@mui/material/Typography';

/**
 * Deployment Doc
 * This document provides information on how to deploy the application.
 */
function DeploymentDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Deployment
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You may encounter difficulties refreshing the application URL. If so, you will need to configure server
				settings.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				For assistance, please refer to the deployment settings provided by Facebook's create-react-app
				documentation:
				<a
					href="https://facebook.github.io/create-react-app/docs/deployment"
					target="_blank"
					rel="noreferrer noopener"
					className="ml-4"
				>
					Deployment
				</a>
			</Typography>
		</>
	);
}

export default DeploymentDoc;
