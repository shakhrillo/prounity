import { configureStore, Reducer, Middleware, ReducersMapObject } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { createLogger } from 'redux-logger';
import _ from '@lodash';
import createReducer from './rootReducer';
import { AppDispatchType, AsyncReducersType, BaseRootStateType } from './types';

/* if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./rootReducer', () => {
		// eslint-disable-next-line global-require
		const newRootReducer = require('./rootReducer').default;
		store.replaceReducer(newRootReducer.createReducer());
	});
} */

/**
 * Configures the middleware which are used during the React application lifecycle.
 */
const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
	const logger = createLogger({ collapsed: (getState, action, logEntry) => (logEntry ? !logEntry.error : true) });
	middlewares.push(logger);
}

/**
 * Configures the application's store by calling `configureStore` with an object of settings.
 */
const store = configureStore({
	reducer: createReducer({}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false
		}).concat(middlewares),
	devTools: process.env.NODE_ENV === 'development'
});

/**
 * The type of an object containing async reducers.
 */
const asyncReducers: AsyncReducersType = {};

/**
 * injects a single reducer to the store
 */
export const injectReducer = (key: string, reducer: Reducer) => {
	if (asyncReducers[key]) {
		return false;
	}

	asyncReducers[key] = reducer;

	store.replaceReducer(createReducer(asyncReducers));

	return store;
};

/**
 */
export const injectReducers = (reducers: ReducersMapObject) => {
	store.replaceReducer(createReducer(_.merge(asyncReducers, reducers)));

	return store;
};

/**
 * Typed hook to get the dispatch function from the Redux store.
 */
// export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppDispatch: () => AppDispatchType = useDispatch;

/**
 * Typed hook to get a slice of the Redux store state.
 * T - The type of the slice of state to retrieve.
 */
export const useAppSelector: TypedUseSelectorHook<ReturnType<BaseRootStateType>> = useSelector;

export default store;
