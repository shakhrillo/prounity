import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { AsyncStateType, RootStateType } from 'app/store/types';
import { ProductType } from '../types/ProductType';
import ProductModel from '../product/models/ProductModel';

export type AppRootStateType = RootStateType<productSliceType>;

/**
 * Get product from server by id
 */
export const getProduct = createAppAsyncThunk<ProductType, string>(
	'eCommerceApp/product/getProduct',
	async (productId) => {
		const response = await axios.get(`/api/ecommerce/products/${productId}`);

		const data = (await response.data) as ProductType;

		return data;
	}
);

/**
 * Remove product
 */
export const removeProduct = createAppAsyncThunk<string>(
	'eCommerceApp/product/removeProduct',
	async (_, { getState }) => {
		const AppState = getState() as AppRootStateType;

		const { id } = AppState.eCommerceApp.product.data as ProductType;

		await axios.delete(`/api/ecommerce/products/${id}`);

		return id;
	}
);

/**
 * Save product
 */
export const saveProduct = createAppAsyncThunk<ProductType, ProductType>(
	'eCommerceApp/product/saveProduct',
	async (productData, { getState }) => {
		const AppState = getState() as AppRootStateType;

		const { id } = AppState.eCommerceApp.product.data as ProductType;

		const response = await axios.put(`/api/ecommerce/products/${id}`, productData);

		const data = (await response.data) as ProductType;

		return data;
	}
);

const initialState: AsyncStateType<ProductType> = {
	data: null,
	status: 'idle'
};

/**
 * The E-Commerce product slice.
 */
export const productSlice = createSlice({
	name: 'eCommerceApp/product',
	initialState,
	reducers: {
		resetProduct: () => initialState,
		newProduct: (state) => {
			state.data = ProductModel({});
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProduct.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'succeeded';
			})
			.addCase(saveProduct.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(removeProduct.fulfilled, () => initialState);
	}
});

export const selectProduct = (state: AppRootStateType) => state.eCommerceApp.product;

export const { newProduct, resetProduct } = productSlice.actions;

export type productSliceType = typeof productSlice;

export default productSlice.reducer;
