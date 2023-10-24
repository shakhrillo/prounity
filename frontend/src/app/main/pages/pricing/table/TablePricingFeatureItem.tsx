import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

type TablePricingFeatureItemProps = {
	title?: string;
	subtitle?: string;
	icon?: string;
};

/**
 * The table pricing feature item component.
 */
function TablePricingFeatureItem(props: TablePricingFeatureItemProps) {
	const { title = '', subtitle = '', icon = '' } = props;

	return (
		<div>
			<Box
				className="flex h-48 w-48 items-center justify-center rounded"
				sx={{ backgroundColor: 'secondary.main', color: 'secondary.contrastText' }}
			>
				<FuseSvgIcon>{icon}</FuseSvgIcon>
			</Box>
			<Typography className="mt-16 text-xl font-medium">{title}</Typography>
			<Typography
				className="leading-24 mt-8"
				color="text.secondary"
			>
				{subtitle}
			</Typography>
		</div>
	);
}

export default TablePricingFeatureItem;
