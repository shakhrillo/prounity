import { useDeepCompareEffect } from '@fuse/hooks';
import _ from '@lodash';
import AppContext from 'app/AppContext';
import {
	generateSettings,
	selectFuseCurrentSettings,
	selectFuseDefaultSettings,
	setSettings
} from 'app/store/fuse/settingsSlice';
import { memo, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import { matchRoutes, useLocation, RouteMatch, RouteObject } from 'react-router-dom';
import { FuseSettingsConfigType } from '@fuse/core/FuseSettings/FuseSettings';
import { themeLayoutsType } from 'app/theme-layouts/themeLayouts';
import { PartialDeep } from 'type-fest';

export type FuseRouteObjectType = RouteObject & {
	settings?: FuseSettingsConfigType;
};

export type FuseRouteMatchType = RouteMatch & {
	route: FuseRouteObjectType;
};

type FuseLayoutProps = {
	layouts: themeLayoutsType;
};

/**
 * FuseLayout
 * React frontend component in a React project that is used for layouting the user interface. The component
 * handles generating user interface settings related to current routes, merged with default settings, and uses
 * the new settings to generate layouts.
 */
function FuseLayout(props: FuseLayoutProps) {
	const { layouts, ...restProps } = props;
	const dispatch = useAppDispatch();
	const settings = useAppSelector(selectFuseCurrentSettings);
	const defaultSettings = useAppSelector(selectFuseDefaultSettings);

	const appContext = useContext(AppContext);
	const { routes } = appContext;

	const location = useLocation();
	const { pathname } = location;

	const matchedRoutes = matchRoutes(routes, pathname) as FuseRouteMatchType[] | null;

	const matched = matchedRoutes?.[0] || false;

	const newSettings = useRef<PartialDeep<FuseSettingsConfigType>>({});

	const shouldAwaitRender = useCallback(() => {
		let _newSettings: FuseSettingsConfigType;

		/**
		 * On Path changed
		 */
		// if (prevPathname !== pathname) {
		if (typeof matched !== 'boolean') {
			/**
			 * if matched route has settings
			 */

			const routeSettings = matched.route.settings;

			_newSettings = generateSettings(defaultSettings, routeSettings);
		} else if (!_.isEqual(newSettings.current, defaultSettings)) {
			/**
			 * Reset to default settings on the new path
			 */
			_newSettings = _.merge({}, defaultSettings);
		} else {
			_newSettings = newSettings.current as FuseSettingsConfigType;
		}

		if (!_.isEqual(newSettings.current, _newSettings)) {
			newSettings.current = _newSettings;
		}
	}, [defaultSettings, matched]);

	shouldAwaitRender();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useDeepCompareEffect(() => {
		if (!_.isEqual(newSettings.current, settings)) {
			dispatch(setSettings(newSettings.current as FuseSettingsConfigType));
		}
	}, [dispatch, newSettings.current, settings]);

	// console.warn('::FuseLayout:: rendered');
	const Layout = useMemo(() => layouts[settings.layout.style], [layouts, settings.layout.style]);

	return _.isEqual(newSettings.current, settings) ? <Layout {...restProps} /> : null;
}

export default memo(FuseLayout);
