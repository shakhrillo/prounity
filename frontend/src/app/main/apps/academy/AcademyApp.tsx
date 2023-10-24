import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from 'app/store';
import { getCategories } from './store/categoriesSlice';

/**
 * The Academy app.
 */
function AcademyApp() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	return <Outlet />;
}

export default AcademyApp;
