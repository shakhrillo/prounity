import Hidden from '@mui/material/Hidden';
import { styled, ThemeProvider } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { navbarCloseMobile, selectFuseNavbar } from 'app/store/fuse/navbarSlice';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import { selectFuseCurrentLayoutConfig, selectNavbarTheme } from 'app/store/fuse/settingsSlice';
import { Layout2ConfigDefaultsType } from 'app/theme-layouts/layout2/Layout2Config';
import NavbarToggleFabLayout2 from 'app/theme-layouts/layout2/components/NavbarToggleFabLayout2';
import { useLocation } from 'react-router';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import NavbarLayout2 from './NavbarLayout2';
import NavbarMobileLayout2 from './NavbarMobileLayout2';

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
	'& > .MuiDrawer-paper': {
		height: '100%',
		flexDirection: 'column',
		flex: '1 1 auto',
		width: 280,
		minWidth: 280,
		transition: theme.transitions.create(['width', 'min-width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.shorter
		})
	}
}));

type NavbarWrapperLayout2Props = {
	className?: string;
};

/**
 * The navbar wrapper layout 2.
 */
function NavbarWrapperLayout2(props: NavbarWrapperLayout2Props) {
	const { className = '' } = props;
	const dispatch = useAppDispatch();
	const config = useSelector(selectFuseCurrentLayoutConfig) as Layout2ConfigDefaultsType;
	const navbarTheme = useSelector(selectNavbarTheme);
	const navbar = useSelector(selectFuseNavbar);
	const location = useLocation();
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const { pathname } = location;

	useEffect(() => {
		if (isMobile) {
			dispatch(navbarCloseMobile());
		}
	}, [pathname, isMobile]);

	return (
		<>
			<ThemeProvider theme={navbarTheme}>
				<Hidden lgDown>
					<NavbarLayout2 />
				</Hidden>

				<Hidden lgUp>
					<StyledSwipeableDrawer
						anchor="left"
						variant="temporary"
						open={navbar.mobileOpen}
						onClose={() => dispatch(navbarCloseMobile())}
						onOpen={() => {}}
						disableSwipeToOpen
						className={className}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						<NavbarMobileLayout2 />
					</StyledSwipeableDrawer>
				</Hidden>
			</ThemeProvider>
			{config.navbar.display && !config.toolbar.display && (
				<Hidden lgUp>
					<NavbarToggleFabLayout2 />
				</Hidden>
			)}
		</>
	);
}

export default memo(NavbarWrapperLayout2);
