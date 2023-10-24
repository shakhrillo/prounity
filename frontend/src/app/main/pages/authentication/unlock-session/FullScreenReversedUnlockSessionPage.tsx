import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
	name: yup.string().required('You must enter your name'),
	password: yup
		.string()
		.required('Please enter your password.')
		.min(8, 'Password is too short - should be 8 chars minimum.'),
	passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

const defaultValues = {
	name: 'Brian Hughes',
	password: '',
	passwordConfirm: ''
};

/**
 * The full screen reversed unlock session page.
 */
function FullScreenReversedUnlockSessionPage() {
	const { control, formState, handleSubmit, reset } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	function onSubmit() {
		reset(defaultValues);
	}

	return (
		<div className="flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start">
			<Box
				className="relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112"
				sx={{ backgroundColor: 'primary.main' }}
			>
				<svg
					className="pointer-events-none absolute inset-0"
					viewBox="0 0 960 540"
					width="100%"
					height="100%"
					preserveAspectRatio="xMidYMax slice"
					xmlns="http://www.w3.org/2000/svg"
				>
					<Box
						component="g"
						sx={{ color: 'primary.light' }}
						className="opacity-20"
						fill="none"
						stroke="currentColor"
						strokeWidth="100"
					>
						<circle
							r="234"
							cx="196"
							cy="23"
						/>
						<circle
							r="234"
							cx="790"
							cy="491"
						/>
					</Box>
				</svg>
				<Box
					component="svg"
					className="absolute -right-64 -top-64 opacity-20"
					sx={{ color: 'primary.light' }}
					viewBox="0 0 220 192"
					width="220px"
					height="192px"
					fill="none"
				>
					<defs>
						<pattern
							id="837c3e70-6c3a-44e6-8854-cc48c737b659"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect
								x="0"
								y="0"
								width="4"
								height="4"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect
						width="220"
						height="192"
						fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
					/>
				</Box>

				<div className="relative z-10 w-full max-w-2xl">
					<div className="text-7xl font-bold leading-none text-gray-100">
						<div>Welcome to</div>
						<div>our community</div>
					</div>
					<div className="mt-24 text-lg leading-6 tracking-tight text-gray-400">
						Fuse helps developers to build organized and well coded dashboards full of beautiful and rich
						modules. Join us and start building your application today.
					</div>
					<div className="mt-32 flex items-center">
						<AvatarGroup
							sx={{
								'& .MuiAvatar-root': {
									borderColor: 'primary.main'
								}
							}}
						>
							<Avatar src="assets/images/avatars/female-18.jpg" />
							<Avatar src="assets/images/avatars/female-11.jpg" />
							<Avatar src="assets/images/avatars/male-09.jpg" />
							<Avatar src="assets/images/avatars/male-16.jpg" />
						</AvatarGroup>

						<div className="ml-16 font-medium tracking-tight text-gray-400">
							More than 17k people joined us, it's your turn
						</div>
					</div>
				</div>
			</Box>

			<Paper className="h-full w-full px-16 py-32 ltr:border-l-1 rtl:border-r-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:rounded-none md:p-64 md:pt-96 md:shadow-none">
				<div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
					<img
						className="w-48"
						src="assets/images/logo/logo.svg"
						alt="logo"
					/>

					<Typography className="mt-32 text-4xl font-extrabold leading-tight tracking-tight">
						Unlock your session
					</Typography>
					<Typography className="font-medium">Your session is locked due to inactivity</Typography>

					<form
						name="registerForm"
						noValidate
						className="mt-32 flex w-full flex-col justify-center"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Controller
							name="name"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Full name"
									autoFocus
									type="name"
									error={!!errors.name}
									helperText={errors?.name?.message}
									variant="outlined"
									fullWidth
									disabled
								/>
							)}
						/>

						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									className="mb-24"
									label="Password"
									type="password"
									error={!!errors.password}
									helperText={errors?.password?.message}
									variant="outlined"
									required
									fullWidth
								/>
							)}
						/>

						<Button
							variant="contained"
							color="secondary"
							className=" mt-4 w-full"
							aria-label="Register"
							disabled={_.isEmpty(dirtyFields) || !isValid}
							type="submit"
							size="large"
						>
							Unlock your session
						</Button>

						<Typography
							className="mt-32 text-md font-medium"
							color="text.secondary"
						>
							<span>I'm not</span>
							<Link
								className="ml-4"
								to="/sign-in"
							>
								Brian Hughes
							</Link>
						</Typography>
					</form>
				</div>
			</Paper>
		</div>
	);
}

export default FullScreenReversedUnlockSessionPage;
