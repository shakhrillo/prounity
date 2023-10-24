import { useAppDispatch } from 'app/store';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getGuideCategories } from '../store/guideCategoriesSlice';

/**
 * The help center guides.
 */
function HelpCenterGuides() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getGuideCategories());
	}, [dispatch]);

	return <Outlet />;
}

export default HelpCenterGuides;
