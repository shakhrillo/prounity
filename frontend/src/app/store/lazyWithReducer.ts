import React, { ComponentType, lazy } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import withReducer from 'app/store/withReducer';

/**
 * The type of the function that imports a component.
 */
type ImportFunctionType = () => Promise<{ default: ComponentType<unknown> }>;

/**
 * A Higher Order Component that lazily loads a component and injects the provided reducer.
 */
const lazyWithReducer = (key: string, importFunction: ImportFunctionType, reducer: Reducer): React.FC => {
	const LazyComponent = lazy(importFunction);
	return withReducer(key, reducer)(LazyComponent);
};

export default lazyWithReducer;
