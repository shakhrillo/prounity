import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import axios from 'axios';
import { RootStateType } from 'app/store/types';
import { OrderType, OrdersType } from '../types/OrderType';

export type AppRootStateType = RootStateType<ordersSliceType>;

/**
 * Get orders from server
 */
export const getOrders = createAppAsyncThunk<OrdersType>('eCommerceApp/orders/getOrders', async () => {
	const response = await axios.get('/api/ecommerce/orders');

	const data = (await response.data) as OrdersType;

	return data;
});

/**
 * Remove orders
 */
export const removeOrders = createAppAsyncThunk<string[], string[]>(
	'eCommerceApp/orders/removeOrders',
	async (orderIds) => {
		await axios.delete('/api/ecommerce/orders', { data: orderIds });

		return orderIds;
	}
);

const ordersAdapter = createEntityAdapter<OrderType>({});

export const { selectAll: selectOrders, selectById: selectOrderById } = ordersAdapter.getSelectors(
	(state: AppRootStateType) => state.eCommerceApp.orders
);

const initialState = ordersAdapter.getInitialState({
	searchText: ''
});

/**
 * The E-Commerce orders slice.
 */
export const ordersSlice = createSlice({
	name: 'eCommerceApp/orders',
	initialState,
	reducers: {
		setOrdersSearchText: (state, action) => {
			state.searchText = action.payload as string;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getOrders.fulfilled, (state, action) => ordersAdapter.setAll(state, action.payload))
			.addCase(removeOrders.fulfilled, (state, action) => ordersAdapter.removeMany(state, action.payload));
	}
});

export const { setOrdersSearchText } = ordersSlice.actions;

export const selectOrdersSearchText = (state: AppRootStateType) => state.eCommerceApp.orders.searchText;

export type ordersSliceType = typeof ordersSlice;

export default ordersSlice.reducer;
