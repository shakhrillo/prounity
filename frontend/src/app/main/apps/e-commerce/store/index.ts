import { combineReducers } from '@reduxjs/toolkit';
import products from './productsSlice';
import product from './productSlice';
import orders from './ordersSlice';
import order from './orderSlice';

/**
 * The E-Commerce store reducer.
 */
const reducer = combineReducers({
	products,
	product,
	orders,
	order
});

export default reducer;
