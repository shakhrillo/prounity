import { navbarToggle, navbarToggleMobile } from 'app/store/fuse/navbarSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { selectFuseCurrentLayoutConfig } from 'app/store/fuse/settingsSlice';
import { Layout1ConfigDefaultsType } from 'app/theme-layouts/layout1/Layout1Config';
import NavbarToggleFab from 'app/theme-layouts/shared-components/NavbarToggleFab';

type NavbarToggleFabLayout1Props = {
	className?: string;
};

/**
 * The navbar toggle fab layout 1.
 */
function NavbarToggleFabLayout1(props: NavbarToggleFabLayout1Props) {
	const { className } = props;

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const config = useSelector(selectFuseCurrentLayoutConfig) as Layout1ConfigDefaultsType;

	const dispatch = useAppDispatch();

	return (
		<NavbarToggleFab
			className={className}
			onClick={() => {
				dispatch(isMobile ? navbarToggleMobile() : navbarToggle());
			}}
			position={config.navbar.position}
		/>
	);
}

export default NavbarToggleFabLayout1;
