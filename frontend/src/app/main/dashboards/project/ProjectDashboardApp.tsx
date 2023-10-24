import FusePageSimple from '@fuse/core/FusePageSimple';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import _ from '@lodash';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'app/store';
import * as React from 'react';
import ProjectDashboardAppHeader from './ProjectDashboardAppHeader';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import HomeTab from './tabs/home/HomeTab';
import TeamTab from './tabs/team/TeamTab';
import BudgetTab from './tabs/budget/BudgetTab';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`
	}
}));

/**
 * The ProjectDashboardApp page.
 */
function ProjectDashboardApp() {
	const dispatch = useAppDispatch();
	const widgets = useAppSelector(selectWidgets);

	const [tabValue, setTabValue] = useState(0);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	function handleChangeTab(event: React.SyntheticEvent, value: number) {
		setTabValue(value);
	}

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<Root
			header={<ProjectDashboardAppHeader />}
			content={
				<div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
					<Tabs
						value={tabValue}
						onChange={handleChangeTab}
						indicatorColor="secondary"
						textColor="inherit"
						variant="scrollable"
						scrollButtons={false}
						className="w-full px-24 -mx-4 min-h-40"
						classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
						TabIndicatorProps={{
							children: (
								<Box
									sx={{ bgcolor: 'text.disabled' }}
									className="w-full h-full rounded-full opacity-20"
								/>
							)
						}}
					>
						<Tab
							className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
							disableRipple
							label="Home"
						/>
						<Tab
							className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
							disableRipple
							label="Budget"
						/>
						<Tab
							className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
							disableRipple
							label="Team"
						/>
					</Tabs>
					{tabValue === 0 && <HomeTab />}
					{tabValue === 1 && <BudgetTab />}
					{tabValue === 2 && <TeamTab />}
				</div>
			}
		/>
	);
}

export default ProjectDashboardApp;
