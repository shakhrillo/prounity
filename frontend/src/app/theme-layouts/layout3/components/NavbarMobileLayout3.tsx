import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import Navigation from '../../shared-components/Navigation';
import UserNavbarHeader from '../../shared-components/UserNavbarHeader';
import NavbarToggleButton from '../../shared-components/NavbarToggleButton';
import Logo from '../../shared-components/Logo';

const Root = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	color: theme.palette.text.primary,

	'& ::-webkit-scrollbar-thumb': {
		boxShadow: `inset 0 0 0 20px ${
			theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.24)' : 'rgba(255, 255, 255, 0.24)'
		}`
	},
	'& ::-webkit-scrollbar-thumb:active': {
		boxShadow: `inset 0 0 0 20px ${
			theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.37)' : 'rgba(255, 255, 255, 0.37)'
		}`
	}
}));

const StyledContent = styled(FuseScrollbars)(() => ({
	overscrollBehavior: 'contain',
	overflowX: 'hidden',
	overflowY: 'auto',
	WebkitOverflowScrolling: 'touch',
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100% 40px, 100% 10px',
	backgroundAttachment: 'local, scroll'
}));

type NavbarMobileLayout3Props = {
	className?: string;
};

/**
 * The navbar mobile layout 3.
 */
function NavbarMobileLayout3(props: NavbarMobileLayout3Props) {
	const { className = '' } = props;

	return (
		<Root className={clsx('flex h-full flex-col overflow-hidden', className)}>
			<div className="flex h-48 shrink-0 flex-row items-center px-20 md:h-72">
				<div className="mx-4 flex flex-1">
					<Logo />
				</div>

				<NavbarToggleButton className="h-40 w-40 p-0" />
			</div>

			<StyledContent
				className="flex min-h-0 flex-1 flex-col"
				option={{ suppressScrollX: true, wheelPropagation: false }}
			>
				<UserNavbarHeader />

				<Navigation layout="vertical" />

				<div className="flex-0 flex items-center justify-center py-48 opacity-10">
					<img
						className="w-full max-w-64"
						src="assets/images/logo/logo.svg"
						alt="footer logo"
					/>
				</div>
			</StyledContent>
		</Root>
	);
}

export default memo(NavbarMobileLayout3);
