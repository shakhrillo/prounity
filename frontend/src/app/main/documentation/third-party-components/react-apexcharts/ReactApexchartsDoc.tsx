import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/* eslint-disable import/no-webpack-loader-syntax, import/extensions, global-require, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

/**
 * GoogleMapReact Doc
 * This document provides information on how to use GoogleMapReact.
 */
function ReactApexchartsDoc() {
	return (
		<>
			<div className="flex w-full items-center justify-between mb-24">
				<Typography variant="h4">react-apexcharts</Typography>
				<Button
					variant="contained"
					color="secondary"
					component="a"
					href="https://github.com/apexcharts/react-apexcharts"
					target="_blank"
					role="button"
					startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
				>
					Reference
				</Button>
			</div>

			<Typography
				className="mb-16"
				component="p"
			>
				React.js wrapper for ApexCharts to build interactive visualizations in react.
			</Typography>

			<hr />

			<Typography
				className="text-32 mt-32 mb-8"
				component="h2"
			>
				Example Usages
			</Typography>

			<FuseExample
				className="mb-64"
				component={require('./examples/Area.tsx').default}
				raw={require('!raw-loader!./examples/Area.tsx')}
			/>

			<FuseExample
				className="mb-64"
				component={require('./examples/Bar.tsx').default}
				raw={require('!raw-loader!./examples/Bar.tsx')}
			/>

			<FuseExample
				className="mb-64"
				component={require('./examples/Column.tsx').default}
				raw={require('!raw-loader!./examples/Column.tsx')}
			/>

			<FuseExample
				className="mb-64"
				component={require('./examples/Donut.tsx').default}
				raw={require('!raw-loader!./examples/Donut.tsx')}
			/>

			<FuseExample
				className="mb-64"
				component={require('./examples/Line.tsx').default}
				raw={require('!raw-loader!./examples/Line.tsx')}
			/>

			<FuseExample
				className="mb-64"
				component={require('./examples/RadialBar.tsx').default}
				raw={require('!raw-loader!./examples/RadialBar.tsx')}
			/>

			<Typography
				className="text-32 mt-32 mb-8"
				component="h2"
			>
				Demos
			</Typography>

			<ul>
				<li className="mb-8">
					<Link to="/dashboards/analytics">Analytics Dashboard</Link>
				</li>
				<li className="mb-8">
					<Link to="/dashboards/project">Project Dashboard</Link>
				</li>
			</ul>
		</>
	);
}

export default ReactApexchartsDoc;
