import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const IconListPage = lazy(() => import('./IconListPage'));

/**
 * Route Configuration for Icons UI.
 */
const iconsUIConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'ui/icons',
			children: [
				{
					path: '',
					element: <Navigate to="heroicons" />
				},
				{
					path: 'heroicons',
					children: [
						{
							path: '',
							element: <Navigate to="outline" />
						},
						{
							path: 'outline',
							element: (
								<IconListPage
									pageTitle="Heroicons Outline"
									referenceUrl="https://heroicons.com/"
									iconName="heroicons-outline"
									apiUrl="/api/ui/icons/heroicons"
								/>
							)
						},
						{
							path: 'solid',
							element: (
								<IconListPage
									pageTitle="Heroicons Solid"
									referenceUrl="https://heroicons.com/"
									iconName="heroicons-solid"
									apiUrl="/api/ui/icons/heroicons"
								/>
							)
						}
					]
				},
				{
					path: 'material',
					children: [
						{
							path: '',
							element: <Navigate to="outline" />
						},
						{
							path: 'outline',
							element: (
								<IconListPage
									pageTitle="Material Outline"
									iconName="material-outline"
									apiUrl="/api/ui/icons/material"
								/>
							)
						},
						{
							path: 'solid',
							element: (
								<IconListPage
									pageTitle="Material Solid"
									iconName="material-solid"
									apiUrl="/api/ui/icons/material"
								/>
							)
						},
						{
							path: 'twotone',
							element: (
								<IconListPage
									pageTitle="Material Twotone"
									iconName="material-twotone"
									apiUrl="/api/ui/icons/material"
								/>
							)
						}
					]
				},
				{
					path: 'feather',
					element: (
						<IconListPage
							pageTitle="Feather"
							iconName="feather"
							apiUrl="/api/ui/icons/feather"
						/>
					)
				}
			]
		}
	]
};

export default iconsUIConfig;
