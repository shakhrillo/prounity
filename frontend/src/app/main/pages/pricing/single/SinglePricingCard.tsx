import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/**
 * The single pricing card component.
 */
function SinglePricingCard() {
	return (
		<Paper className="flex max-w-sm flex-col overflow-hidden lg:max-w-xl lg:flex-row">
			<div className="p-24 sm:p-32 lg:p-40">
				<Typography className="text-3xl font-bold">Lifetime Membership</Typography>

				<Typography
					className="mt-8 leading-relaxed"
					color="text.secondary"
				>
					Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay
					once and get lifetime access to the community.
				</Typography>

				<div className="mt-40 flex items-center">
					<Typography
						className="font-medium"
						color="text.secondary"
					>
						INCLUDED FEATURES
					</Typography>
					<Divider className="ml-8 flex-auto" />
				</div>

				<div className="mt-24 grid grid-cols-1 gap-y-16 lg:grid-cols-2">
					<div className="flex items-center">
						<FuseSvgIcon
							size={20}
							color="secondary"
						>
							heroicons-solid:check-circle
						</FuseSvgIcon>
						<div className="ml-8">Private forum access</div>
					</div>
					<div className="flex items-center">
						<FuseSvgIcon
							size={20}
							color="secondary"
						>
							heroicons-solid:check-circle
						</FuseSvgIcon>
						<div className="ml-8">Access to annual online conference</div>
					</div>
					<div className="flex items-center">
						<FuseSvgIcon
							size={20}
							color="secondary"
						>
							heroicons-solid:check-circle
						</FuseSvgIcon>
						<div className="ml-8">Member resources</div>
					</div>
					<div className="flex items-center">
						<FuseSvgIcon
							size={20}
							color="secondary"
						>
							heroicons-solid:check-circle
						</FuseSvgIcon>
						<div className="ml-8">Official member T-Shirt</div>
					</div>
				</div>
			</div>

			<Box
				sx={{ backgroundColor: 'primary.main' }}
				className="flex flex-col items-center p-8 lg:min-w-320 lg:px-40 lg:py-48"
			>
				<div className="flex items-center whitespace-nowrap">
					<Typography
						className="text-8xl font-extrabold tracking-tight"
						color="primary.contrastText"
					>
						$599
					</Typography>
					<Typography
						className="ml-2 text-2xl font-semibold"
						color="text.secondary"
					>
						USD
					</Typography>
				</div>
				<Typography
					className="text-center font-medium"
					color="text.secondary"
				>
					No monthly subscription,
					<br />
					you only pay once.
				</Typography>
				<Button
					variant="contained"
					color="secondary"
					className="mt-32 w-full lg:mt-auto"
				>
					Get Started
				</Button>
			</Box>
		</Paper>
	);
}

export default SinglePricingCard;
