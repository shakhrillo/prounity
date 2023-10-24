import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useAppSelector } from 'app/store';
import { selectWidgets } from '../../../store/widgetsSlice';
import WidgetDataType, { RangeType } from '../../../types/WidgetDataType';

/**
 * The SummaryWidget widget.
 */
function SummaryWidget() {
	const widgets = useAppSelector(selectWidgets);
	const { data, ranges, currentRange: currentRangeDefault } = widgets.summary as WidgetDataType;

	const [currentRange, setCurrentRange] = useState<RangeType>(currentRangeDefault as RangeType);

	function handleChangeRange(event: SelectChangeEvent<string>) {
		setCurrentRange(event.target.value as RangeType);
	}

	return (
		<Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
			<div className="flex items-center justify-between px-8 pt-12">
				<Select
					className="mx-16"
					classes={{ select: 'py-0 flex items-center' }}
					value={currentRange}
					onChange={handleChangeRange}
					inputProps={{
						name: 'currentRange'
					}}
					variant="filled"
					size="small"
				>
					{Object.entries(ranges).map(([key, n]) => {
						return (
							<MenuItem
								key={key}
								value={key}
							>
								{n}
							</MenuItem>
						);
					})}
				</Select>
				<IconButton
					aria-label="more"
					size="large"
				>
					<FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
				</IconButton>
			</div>
			<div className="text-center mt-8">
				<Typography className="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-blue-500">
					{data.count[currentRange]}
				</Typography>
				<Typography className="text-lg font-medium text-blue-600 dark:text-blue-500">{data.name}</Typography>
			</div>
			<Typography
				className="flex items-baseline justify-center w-full mt-20 mb-24"
				color="text.secondary"
			>
				<span className="truncate">{data.extra.name}</span>:
				<b className="px-8">{data.extra.count[currentRange]}</b>
			</Typography>
		</Paper>
	);
}

export default memo(SummaryWidget);
