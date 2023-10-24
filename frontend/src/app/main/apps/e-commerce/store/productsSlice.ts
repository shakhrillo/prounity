import axios from 'axios';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import createAppAsyncThunk from 'app/store/createAppAsyncThunk';
import { RootStateType } from 'app/store/types';
import { ProductType, ProductsType } from '../types/ProductType';

export type AppRootStateType = RootStateType<productsSliceType>;

/**
 * Get products from server
 */
export const getProducts = createAppAsyncThunk<ProductsType>('eCommerceApp/products/getProducts', async () => {
	const response = await axios.get('/api/ecommerce/products');
	const data = (await response.data) as ProductsType;

	return data;
});

/**
 * Remove products
 */
export const removeProducts = createAppAsyncThunk<string[], string[]>('eCommerceApp/products', async (productIds) => {
	await axios.delete('/api/ecommerce/products', { data: productIds });

	return productIds;
});

const productsAdapter = createEntityAdapter<ProductType>({});

export const { selectAll: selectProducts, selectById: selectProductById } = productsAdapter.getSelectors(
	(state: AppRootStateType) => state.eCommerceApp.products
);

const initialState = productsAdapter.getInitialState({
	searchText: ''
});

/**
 * The E-Commerce products slice.
 */
export const productsSlice = createSlice({
	name: 'eCommerceApp/products',
	initialState,
	reducers: {
		setProductsSearchText: (state, action) => {
			state.searchText = action.payload as string;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.fulfilled, (state, action) => {
				productsAdapter.setAll(state, action.payload);
				state.searchText = '';
			})
			.addCase(removeProducts.fulfilled, (state, action) => {
				productsAdapter.removeMany(state, action.payload);
			});

		// You can add more cases here similar to the provided example, e.g. removeProducts
	}
});

export const { setProductsSearchText } = productsSlice.actions;

export const selectProductsSearchText = (state: AppRootStateType) => state.eCommerceApp?.products?.searchText;

export type productsSliceType = typeof productsSlice;

export default productsSlice.reducer;
