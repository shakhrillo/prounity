import { createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { AsyncStateType, RootStateType } from 'app/store/types';
import axios from 'axios';
import { OrderType } from '../types/OrderType';

export type AppRootStateType = RootStateType<orderSliceType>;

/**
 * Get order from server by id
 */
export const getOrder = createAppAsyncThunk('eCommerceApp/order/getOrder', async (orderId: string) => {
	const response = await axios.get(`/api/ecommerce/orders/${orderId}`);

	const data = (await response.data) as OrderType;

	return data || null;
});

/**
 * Save order
 */
export const saveOrder = createAppAsyncThunk('eCommerceApp/order/saveOrder', async (order: OrderType) => {
	const response = await axios.put('/api/ecommerce/orders', order);

	const data = (await response.data) as OrderType;

	return data;
});

const initialState: AsyncStateType<OrderType> = {
	data: null,
	status: 'idle'
};

/**
 * The E-Commerce order slice.
 */
export const orderSlice = createSlice({
	name: 'eCommerceApp/order',
	initialState,
	reducers: {
		resetOrder: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getOrder.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getOrder.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'succeeded';
			})
			.addCase(saveOrder.fulfilled, (state, action) => {
				state.data = action.payload;
			});
	}
});

export const { resetOrder } = orderSlice.actions;

export const selectOrder = (state: AppRootStateType) => state.eCommerceApp.order;

export type orderSliceType = typeof orderSlice;

export default orderSlice.reducer;
