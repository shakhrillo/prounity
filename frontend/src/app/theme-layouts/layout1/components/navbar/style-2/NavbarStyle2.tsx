import Hidden from '@mui/material/Hidden';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { navbarCloseFolded, navbarCloseMobile, navbarOpenFolded, selectFuseNavbar } from 'app/store/fuse/navbarSlice';
import { useAppDispatch } from 'app/store';
import { useSelector } from 'react-redux';
import { selectFuseCurrentLayoutConfig } from 'app/store/fuse/settingsSlice';
import { Theme } from '@mui/system/createTheme';
import { Layout1ConfigDefaultsType } from 'app/theme-layouts/layout1/Layout1Config';
import NavbarStyle2Content from './NavbarStyle2Content';

const navbarWidth = 280;

type StyledNavBarPropsProps = {
	theme?: Theme;
	folded: number;
	open: boolean;
};

const Root = styled('div')<StyledNavBarPropsProps>(({ theme, folded }) => ({
	display: 'flex',
	flexDirection: 'column',
	zIndex: 4,
	[theme.breakpoints.up('lg')]: {
		width: navbarWidth,
		minWidth: navbarWidth
	},

	...(folded && {
		[theme.breakpoints.up('lg')]: {
			width: 76,
			minWidth: 76
		}
	})
}));

type StyledNavBarProps = {
	theme?: Theme;
	open?: boolean;
	folded: number;
	foldedandopened: number;
	foldedandclosed: number;
	position?: string;
	anchor?: string;
};

const StyledNavbar = styled('div')<StyledNavBarProps>(
	({ theme, position, folded, foldedandopened, foldedandclosed }) => ({
		minWidth: navbarWidth,
		width: navbarWidth,
		maxWidth: navbarWidth,
		maxHeight: '100%',
		transition: theme.transitions.create(['width', 'min-width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.shorter
		}),

		...(position === 'left' && {
			left: 0
		}),

		...(position === 'right' && {
			right: 0
		}),

		...(folded && {
			position: 'absolute',
			width: 76,
			minWidth: 76,
			top: 0,
			bottom: 0
		}),

		...(foldedandopened && {
			width: navbarWidth,
			minWidth: navbarWidth
		}),

		...(foldedandclosed && {
			'& .NavbarStyle2-content': {
				'& .logo-icon': {
					width: 44,
					height: 44
				},
				'& .logo-text': {
					opacity: 0
				},
				'& .react-badge': {
					opacity: 0
				},
				'& .fuse-list-item': {
					width: 56
				},
				'& .fuse-list-item-text, & .arrow-icon, & .item-badge': {
					opacity: 0
				},
				'& .fuse-list-subheader .fuse-list-subheader-text': {
					opacity: 0
				},
				'& .fuse-list-subheader:before': {
					content: '""',
					display: 'block',
					position: 'absolute',
					minWidth: 16,
					borderTop: '2px solid',
					opacity: 0.2
				},
				'& .collapse-children': {
					display: 'none'
				}
			}
		})
	})
);

const StyledNavbarMobile = styled(SwipeableDrawer)<StyledNavBarProps>(({ theme }) => ({
	'& > .MuiDrawer-paper': {
		minWidth: navbarWidth,
		width: navbarWidth,
		maxWidth: navbarWidth,
		maxHeight: '100%',
		transition: theme.transitions.create(['width', 'min-width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.shorter
		})
	}
}));

/**
 * The navbar style 2.
 */
function NavbarStyle2() {
	const dispatch = useAppDispatch();
	const config = useSelector(selectFuseCurrentLayoutConfig) as Layout1ConfigDefaultsType;
	const navbar = useSelector(selectFuseNavbar);

	// const folded = !navbar.open;
	const folded = config.navbar?.folded;
	const foldedandclosed = folded && !navbar.foldedOpen;
	const foldedandopened = folded && navbar.foldedOpen;

	return (
		<Root
			folded={folded ? 1 : 0}
			open={navbar.open}
			id="fuse-navbar"
			className="sticky top-0 z-20 h-screen shrink-0 shadow-5"
		>
			<Hidden lgDown>
				<StyledNavbar
					className="flex-auto flex-col"
					position={config?.navbar?.position}
					folded={folded ? 1 : 0}
					foldedandopened={foldedandopened ? 1 : 0}
					foldedandclosed={foldedandclosed ? 1 : 0}
					onMouseEnter={() => foldedandclosed && dispatch(navbarOpenFolded())}
					onMouseLeave={() => foldedandopened && dispatch(navbarCloseFolded())}
				>
					<NavbarStyle2Content className="NavbarStyle2-content" />
				</StyledNavbar>
			</Hidden>

			<Hidden lgUp>
				<StyledNavbarMobile
					classes={{
						paper: 'flex-col flex-auto h-full'
					}}
					folded={folded ? 1 : 0}
					foldedandopened={foldedandopened ? 1 : 0}
					foldedandclosed={foldedandclosed ? 1 : 0}
					anchor={config?.navbar?.position as 'left' | 'top' | 'right' | 'bottom'}
					variant="temporary"
					open={navbar.mobileOpen}
					onClose={() => dispatch(navbarCloseMobile())}
					onOpen={() => {}}
					disableSwipeToOpen
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					<NavbarStyle2Content className="NavbarStyle2-content" />
				</StyledNavbarMobile>
			</Hidden>
		</Root>
	);
}

export default NavbarStyle2;
