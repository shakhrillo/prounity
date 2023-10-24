import React, { ComponentType, lazy } from 'react';
import { Slice } from '@reduxjs/toolkit';
import withSlices from './withSlices';

export type SlicesType = Slice[];

/**
 * The type of the function that imports a component.
 */
type ImportFunctionType = () => Promise<{ default: ComponentType<unknown> }>;

/**
 * A Higher Order Component that lazily loads a component and injects reducers for the provided slices.
 */
const lazyWithSlices = (importFunction: ImportFunctionType, slices: SlicesType): React.FC => {
	const LazyComponent = lazy(importFunction);
	return withSlices(slices)(LazyComponent);
};

export default lazyWithSlices;
