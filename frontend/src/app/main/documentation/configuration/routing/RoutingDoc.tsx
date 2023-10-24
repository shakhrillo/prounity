import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
/* eslint-disable import/no-webpack-loader-syntax, import/extensions, global-require, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

/**
 * Theme Layouts Doc
 * This document provides information on how to use theme layouts.
 */
function RoutingDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Routing
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Fuse React utilizes a custom routing system based on the popular packages
				<a
					href="https://reacttraining.com/react-router/"
					target="_blank"
					rel="noopener noreferrer"
				>
					react-router
				</a>{' '}
				and{' '}
				<a
					href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config"
					target="_blank"
					rel="noopener noreferrer"
				>
					react-router-config
				</a>{' '}
				It follows a modular approach and is based on route settings determined from config files.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Fuse React follows a modular approach and is based on route settings determined from config files.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				For example, have a look at the code in <code>MailboxAppConfig.tsx</code>. Here you can override all
				settings for a particular route.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-24"
			>
				{require('!raw-loader!src/app/main/apps/mailbox/MailboxAppConfig.tsx')}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				The routes are then generated in <code>app/configs/routesConfig</code>, as seen in the code snippet
				below:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-32"
			>
				{`
          import {appsRoutes} from '../main/apps/mailbox/MailboxAppConfig.tsx';
          import FuseUtils from '@fuse/utils';
          import { Navigate } from 'react-router-dom';

          const routeConfigs = [
              MailAppConfig
          ];
          
          const routes = [
            ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
            {
              path: '/',
              element: <Navigate to="dashboards/analytics" />,
              auth: settingsConfig.defaultAuth,
            },
            {
              path: 'loading',
              element: <FuseLoading />,
            },
            {
              path: '*',
              element: <Navigate to="pages/error/404" />,
            },
          ];
          
          export default routes;
      `}
			</FuseHighlight>
		</>
	);
}

export default RoutingDoc;
