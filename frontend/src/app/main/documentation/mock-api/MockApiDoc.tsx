import Typography from '@mui/material/Typography';
import mockApiJson from '@mock-api/mock-api.json';
import { RedocStandalone } from 'redoc';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { RedocRawOptions } from 'redoc/typings/services/RedocNormalizedOptions';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

const Root = styled('div')(() => ({
	'& .menu-content': {
		top: '64px!important',
		bottom: 64,
		height: 'calc(100vh - 128px)!important'
	}
}));

/**
 * Mock API Doc
 * This document provides information on how to use the mock API.
 */
function MockApiDoc() {
	const theme = useTheme();

	return (
		<Root className="w-full">
			<div className="flex flex-col flex-0 p-24 sm:py-32 sm:px-40 w-full">
				<Typography
					className="flex items-center sm:mb-12"
					component={Link}
					role="button"
					to="/documentation"
					color="inherit"
				>
					<FuseSvgIcon size={20}>
						{theme.direction === 'ltr'
							? 'heroicons-outline:arrow-sm-left'
							: 'heroicons-outline:arrow-sm-right'}
					</FuseSvgIcon>
					<span className="flex mx-4 font-medium">Documentation</span>
				</Typography>
				<Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
					Mock API Definitions (OpenAPI 3.0)
				</Typography>
				<Typography
					className="mt-12"
					component="p"
				>
					These definitions are used while creating
					<Link
						className="link mx-8"
						to="/documentation/development/api-calls"
					>
						@mock-api
					</Link>
				</Typography>
			</div>
			<Paper className="sticky top-0 w-full shadow">
				<RedocStandalone
					spec={mockApiJson as object}
					options={
						{
							layout: 'stacked',
							hideHostname: true,
							hideInfoSection: true,
							hideInfoDescription: true,
							hideDownloadButton: true,
							noAutoAuth: true,
							hideLoading: true,
							nativeScrollbars: true,
							expandResponses: '',
							jsonSampleExpandLevel: 1,
							sortOperationsAlphabetically: true,
							sortPropsAlphabetically: true,
							sortTagsAlphabetically: true,
							pathInMiddlePanel: true
						} as RedocRawOptions
					}
				/>
			</Paper>
		</Root>
	);
}

export default MockApiDoc;
