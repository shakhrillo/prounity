import Hidden from '@mui/material/Hidden';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useAppDispatch } from 'app/store';
import { useSelector } from 'react-redux';
import { navbarCloseMobile, selectFuseNavbar } from 'app/store/fuse/navbarSlice';
import GlobalStyles from '@mui/material/GlobalStyles';
import { selectFuseCurrentLayoutConfig } from 'app/store/fuse/settingsSlice';
import { Theme } from '@mui/system/createTheme';
import { Layout1ConfigDefaultsType } from 'app/theme-layouts/layout1/Layout1Config';
import clsx from 'clsx';
import NavbarStyle3Content from './NavbarStyle3Content';

const navbarWidth = 120;
const navbarWidthDense = 64;
const panelWidth = 280;

type StyledNavBarProps = {
	theme?: Theme;
	open?: boolean;
	folded?: number;
	dense?: number;
	position?: string;
	className?: string;
	anchor?: string;
};

const StyledNavBar = styled('div')<StyledNavBarProps>(({ theme, dense, open, folded, position }) => ({
	minWidth: navbarWidth,
	width: navbarWidth,
	maxWidth: navbarWidth,

	...(dense && {
		minWidth: navbarWidthDense,
		width: navbarWidthDense,
		maxWidth: navbarWidthDense,

		...(!open && {
			...(position === 'left' && {
				marginLeft: -navbarWidthDense
			}),

			...(position === 'right' && {
				marginRight: -navbarWidthDense
			})
		})
	}),

	...(!folded && {
		minWidth: dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth,
		width: dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth,
		maxWidth: dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth,

		'& #fuse-navbar-panel': {
			opacity: '1!important',
			pointerEvents: 'initial!important'
		},

		...(!open && {
			...(position === 'left' && {
				marginLeft: -(dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth)
			}),

			...(position === 'right' && {
				marginRight: -(dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth)
			})
		})
	}),

	...(!open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.leavingScreen
		}),
		...(position === 'left' && {
			marginLeft: -(dense ? navbarWidthDense : navbarWidth)
		}),

		...(position === 'right' && {
			marginRight: -(dense ? navbarWidthDense : navbarWidth)
		})
	}),

	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));

const StyledNavBarMobile = styled(SwipeableDrawer)<StyledNavBarProps>(() => ({
	'& .MuiDrawer-paper': {
		'& #fuse-navbar-side-panel': {
			minWidth: 'auto',
			wdith: 'auto'
		},
		'& #fuse-navbar-panel': {
			opacity: '1!important',
			pointerEvents: 'initial!important'
		}
	}
}));

type NavbarStyle3Props = {
	className?: string;
	dense?: boolean;
};

/**
 * The navbar style 3.
 */
function NavbarStyle3(props: NavbarStyle3Props) {
	const { className = '', dense = false } = props;
	const dispatch = useAppDispatch();
	const config = useSelector(selectFuseCurrentLayoutConfig) as Layout1ConfigDefaultsType;
	const navbar = useSelector(selectFuseNavbar);
	const { folded } = config.navbar;

	return (
		<>
			<GlobalStyles
				styles={(theme) => ({
					'& #fuse-navbar-side-panel': {
						width: dense ? navbarWidthDense : navbarWidth,
						minWidth: dense ? navbarWidthDense : navbarWidth,
						maxWidth: dense ? navbarWidthDense : navbarWidth
					},
					'& #fuse-navbar-panel': {
						maxWidth: '100%',
						width: panelWidth,
						[theme.breakpoints.up('lg')]: {
							minWidth: panelWidth,
							maxWidth: 'initial'
						}
					}
				})}
			/>
			<Hidden lgDown>
				<StyledNavBar
					open={navbar.open}
					dense={dense ? 1 : 0}
					folded={folded ? 1 : 0}
					position={config.navbar.position}
					className={clsx('sticky top-0 z-20 h-screen flex-auto shrink-0 flex-col shadow-5', className)}
				>
					<NavbarStyle3Content dense={dense ? 1 : 0} />
				</StyledNavBar>
			</Hidden>
			<Hidden lgUp>
				<StyledNavBarMobile
					classes={{
						paper: clsx('h-screen w-auto max-w-full flex-auto flex-col overflow-hidden', className)
					}}
					anchor={config.navbar.position as 'left' | 'right'}
					variant="temporary"
					open={navbar.mobileOpen}
					onClose={() => dispatch(navbarCloseMobile())}
					onOpen={() => {}}
					disableSwipeToOpen
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					<NavbarStyle3Content dense={dense ? 1 : 0} />
				</StyledNavBarMobile>
			</Hidden>
		</>
	);
}

export default NavbarStyle3;
