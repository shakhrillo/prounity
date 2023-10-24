import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useAppSelector } from 'app/store';
import { selectWidgets } from '../../../store/widgetsSlice';
import ScheduleDataType from '../../../types/ScheduleDataType';

/**
 * The ScheduleWidget widget.
 */
function ScheduleWidget() {
	const widgets = useAppSelector(selectWidgets);
	const { series, ranges } = widgets.schedule as ScheduleDataType;
	const [tabValue, setTabValue] = useState(0);
	const currentRange = Object.keys(ranges)[tabValue];

	return (
		<Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
			<div className="flex flex-col sm:flex-row items-start justify-between">
				<Typography className="text-lg font-medium tracking-tight leading-6 truncate">Schedule</Typography>
				<div className="mt-12 sm:mt-0 sm:ml-8">
					<Tabs
						value={tabValue}
						onChange={(ev, value: number) => setTabValue(value)}
						indicatorColor="secondary"
						textColor="inherit"
						variant="scrollable"
						scrollButtons={false}
						className="-mx-16 min-h-40"
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
						{Object.entries(ranges).map(([key, label]) => (
							<Tab
								className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
								disableRipple
								key={key}
								label={label}
							/>
						))}
					</Tabs>
				</div>
			</div>
			<List className="py-0 mt-8 divide-y">
				{series[currentRange].map((item, index) => (
					<ListItem
						key={index}
						className="px-0"
					>
						<ListItemText
							classes={{ root: 'px-8', primary: 'font-medium' }}
							primary={item.title}
							secondary={
								<span className="flex flex-col sm:flex-row sm:items-center -ml-2 mt-8 sm:mt-4 space-y-4 sm:space-y-0 sm:space-x-12">
									{item.time && (
										<span className="flex items-center">
											<FuseSvgIcon
												size={20}
												color="disabled"
											>
												heroicons-solid:clock
											</FuseSvgIcon>
											<Typography
												component="span"
												className="mx-6 text-md"
												color="text.secondary"
											>
												{item.time}
											</Typography>
										</span>
									)}

									{item.location && (
										<span className="flex items-center">
											<FuseSvgIcon
												size={20}
												color="disabled"
											>
												heroicons-solid:location-marker
											</FuseSvgIcon>
											<Typography
												component="span"
												className="mx-6 text-md"
												color="text.secondary"
											>
												{item.location}
											</Typography>
										</span>
									)}
								</span>
							}
						/>
						<ListItemSecondaryAction>
							<IconButton
								aria-label="more"
								size="large"
							>
								<FuseSvgIcon>heroicons-solid:chevron-right</FuseSvgIcon>
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</Paper>
	);
}

export default memo(ScheduleWidget);
