import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

/**
 * The sign out page.
 */
function ClassicSignOutPage() {
	return (
		<div className="flex min-w-0 flex-auto flex-col items-center sm:justify-center">
			<Paper className="flex min-h-full w-full items-center rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow">
				<div className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
					<img
						className="mx-auto w-48"
						src="assets/images/logo/logo.svg"
						alt="logo"
					/>

					<Typography className="mt-32 text-center text-4xl font-extrabold leading-tight tracking-tight">
						You have signed out!
					</Typography>
					<Typography className="mt-2 flex justify-center font-medium">Redirecting in 5 seconds</Typography>

					<Typography
						className="mt-32 text-center text-md font-medium"
						color="text.secondary"
					>
						<span>Go to</span>
						<Link
							className="ml-4"
							to="/sign-in"
						>
							sign in
						</Link>
					</Typography>
				</div>
			</Paper>
		</div>
	);
}

export default ClassicSignOutPage;
