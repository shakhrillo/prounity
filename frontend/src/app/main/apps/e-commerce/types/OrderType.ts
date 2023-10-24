import { PartialDeep } from 'type-fest';
import { ProductType } from './ProductType';
import { OrderStatusType } from './OrderStatusType';
import { OrderShippingDetailType } from './OrderShippingDetailType';
import { OrderCustomerType } from './OrderCustomerType';
import { OrderPaymentType } from './OrderPaymentType';

/**
 * Order Type
 */
export type OrderType = {
	id: string;
	reference: string;
	subtotal: string;
	tax: string;
	discount: string;
	total: string;
	date: string;
	customer: OrderCustomerType;
	products: PartialDeep<ProductType>[];
	status: OrderStatusType[];
	payment: OrderPaymentType;
	shippingDetails: OrderShippingDetailType[];
};

export type OrdersType = OrderType[];
