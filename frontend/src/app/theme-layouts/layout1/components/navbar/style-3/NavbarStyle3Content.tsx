import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useAppDispatch } from 'app/store';
import { useSelector } from 'react-redux';
import FuseNavigation from '@fuse/core/FuseNavigation';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import { useLocation } from 'react-router-dom';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { selectNavigation } from 'app/store/fuse/navigationSlice';
import isUrlInChildren from '@fuse/core/FuseNavigation/isUrlInChildren';
import { Location } from 'history';
import { Theme } from '@mui/system';
import { FuseNavigationType } from '@fuse/core/FuseNavigation/types/FuseNavigationType';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';

const Root = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	color: theme.palette.text.primary
}));

type StyledPanelProps = {
	theme?: Theme;
	opened?: boolean;
};

const StyledPanel = styled(FuseScrollbars)<StyledPanelProps>(({ theme, opened }) => ({
	backgroundColor: theme.palette.background.default,
	color: theme.palette.text.primary,
	transition: theme.transitions.create(['opacity'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.shortest
	}),
	opacity: 0,
	pointerEvents: 'none',
	...(opened && {
		opacity: 1,
		pointerEvents: 'initial'
	})
}));

/**
 * Check if the item needs to be opened.
 */
function needsToBeOpened(location: Location, item: FuseNavItemType) {
	return location && isUrlInChildren(item, location.pathname);
}

type NavbarStyle3ContentProps = { className?: string; dense?: number };

/**
 * The navbar style 3 content.
 */
function NavbarStyle3Content(props: NavbarStyle3ContentProps) {
	const { className = '', dense = false } = props;
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const navigation = useSelector(selectNavigation);
	const [selectedNavigation, setSelectedNavigation] = useState<FuseNavigationType>([]);
	const [panelOpen, setPanelOpen] = useState(false);
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
	const location = useLocation();

	useEffect(() => {
		navigation?.forEach((item) => {
			if (needsToBeOpened(location, item)) {
				setSelectedNavigation([item]);
			}
		});
	}, [navigation, location]);

	function handleParentItemClick(selected: FuseNavItemType) {
		/** if there is no child item do not set/open panel
		 */
		if (!selected.children) {
			setSelectedNavigation([]);
			setPanelOpen(false);
			return;
		}

		/**
		 * If navigation already selected toggle panel visibility
		 */
		if (selectedNavigation[0]?.id === selected.id) {
			setPanelOpen(!panelOpen);
		} else {
			/**
			 * Set navigation and open panel
			 */
			setSelectedNavigation([selected]);
			setPanelOpen(true);
		}
	}

	function handleChildItemClick() {
		setPanelOpen(false);
		if (isMobile) {
			dispatch(navbarCloseMobile());
		}
	}

	return (
		<ClickAwayListener onClickAway={() => setPanelOpen(false)}>
			<Root className={clsx('flex h-full flex-auto', className)}>
				<ThemeProvider theme={contrastTheme}>
					<div
						id="fuse-navbar-side-panel"
						className="flex shrink-0 flex-col items-center"
					>
						<img
							className="my-32 w-44"
							src="assets/images/logo/logo.svg"
							alt="logo"
						/>

						<FuseScrollbars
							className="flex min-h-0 w-full flex-1 justify-center overflow-y-auto overflow-x-hidden"
							option={{ suppressScrollX: true, wheelPropagation: false }}
						>
							<FuseNavigation
								className={clsx('navigation')}
								navigation={navigation}
								layout="vertical-2"
								onItemClick={handleParentItemClick}
								firstLevel
								selectedId={selectedNavigation[0]?.id}
								dense={Boolean(dense)}
							/>
						</FuseScrollbars>
					</div>
				</ThemeProvider>

				{selectedNavigation.length > 0 && (
					<StyledPanel
						id="fuse-navbar-panel"
						opened={panelOpen}
						className={clsx('overflow-y-auto overflow-x-hidden shadow-5')}
						option={{ suppressScrollX: true, wheelPropagation: false }}
					>
						<FuseNavigation
							className={clsx('navigation')}
							navigation={selectedNavigation}
							layout="vertical"
							onItemClick={handleChildItemClick}
						/>
					</StyledPanel>
				)}
			</Root>
		</ClickAwayListener>
	);
}

export default memo(NavbarStyle3Content);
