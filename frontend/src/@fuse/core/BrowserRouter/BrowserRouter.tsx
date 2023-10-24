import React, { useLayoutEffect, useState } from 'react';
import history from '@history';
import { BrowserRouterProps, Router } from 'react-router-dom';

/**
 * The BrowserRouter component provides an interface for users to interact with the application's history.
 * It is responsible for managing the routing through the use of the `react-router-dom` library and the browser's `history` object.
 * It also integrates with `useLayoutEffect` to listen for changes to the `location` state from the browser's `history` object.
 */
function BrowserRouter(props: BrowserRouterProps) {
	const { basename, children } = props;

	const [state, setState] = useState({
		action: history.action,
		location: history.location
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<Router
			basename={basename}
			location={state.location}
			navigationType={state.action}
			navigator={history}
		>
			{children}
		</Router>
	);
}

export default BrowserRouter;
