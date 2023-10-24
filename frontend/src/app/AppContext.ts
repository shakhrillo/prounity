import { createContext } from 'react';
import { RouteObject } from 'react-router/dist/lib/context';

// import { FuseRoutesType } from '@fuse/utils/FuseUtils';

/**
 * The type of the AppContext value.
 */
export type AppContextType = {
	/**
	 * The routes to be used in the app.
	 */
	routes: RouteObject[];
};

/**
 * The AppContext object.
 */
const AppContext = createContext<AppContextType>({ routes: [] });

export default AppContext;
