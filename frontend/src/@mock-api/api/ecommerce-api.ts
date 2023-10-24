import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import { ProductType, ProductsType } from '../../app/main/apps/e-commerce/types/ProductType';
import mockApi from '../mock-api.json';
import mock from '../mock';
import { OrderType, OrdersType } from '../../app/main/apps/e-commerce/types/OrderType';
import { Params } from '../ExtendedMockAdapter';

let productsDB = mockApi.components.examples.ecommerce_products.value as ProductsType;
let ordersDB = mockApi.components.examples.ecommerce_orders.value as OrdersType;

mock.onGet('/api/ecommerce/products').reply(() => {
	return [200, productsDB];
});

mock.onPost('/api/ecommerce/products').reply(({ data }) => {
	const newProduct = { id: FuseUtils.generateGUID(), ...JSON.parse(data as string) } as ProductType;

	productsDB.push(newProduct);

	return [200, newProduct];
});

mock.onDelete('/api/ecommerce/products').reply(({ data }) => {
	const ids = JSON.parse(data as string) as string[];

	productsDB = productsDB.filter((item) => ids.includes(item.id));

	return [200, productsDB];
});

mock.onGet('/api/ecommerce/products/:id').reply((config) => {
	const { id } = config.params as Params;

	return [200, _.find(productsDB, { id })];
});

mock.onPut('/api/ecommerce/products/:id').reply((config) => {
	const { id } = config.params as Params;

	_.assign(_.find(productsDB, { id }), JSON.parse(config.data as string));

	return [200, _.find(productsDB, { id })];
});

mock.onDelete('/api/ecommerce/products/:id').reply((config) => {
	const { id } = config.params as Params;

	_.remove(productsDB, { id });

	return [200, id];
});

mock.onGet('/api/ecommerce/orders').reply(() => {
	return [200, ordersDB];
});

mock.onPost('/api/ecommerce/orders').reply((config) => {
	const newOrder = { id: FuseUtils.generateGUID(), ...JSON.parse(config.data as string) } as OrderType;

	ordersDB.push(newOrder);

	return [200, newOrder];
});

mock.onDelete('/api/ecommerce/orders').reply((config) => {
	const ids = JSON.parse(config.data as string) as string[];
	ordersDB = ordersDB.filter((item) => ids.includes(item.id));

	return [200, ordersDB];
});

mock.onGet('/api/ecommerce/orders/:id').reply((config) => {
	const { id } = config.params as Params;

	return [200, _.find(ordersDB, { id })];
});

mock.onPut('/api/ecommerce/orders/:id').reply((config) => {
	const { id } = config.params as Params;

	_.assign(_.find(ordersDB, { id }), JSON.parse(config.data as string) as OrderType);

	return [200, _.find(ordersDB, { id })];
});

mock.onDelete('/api/ecommerce/orders/:id').reply((config) => {
	const { id } = config.params as Params;

	_.remove(ordersDB, { id });

	return [200, id];
});
