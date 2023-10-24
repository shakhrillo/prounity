import _ from '@lodash';
import clsx from 'clsx';
import { OrderStatusType } from '../types/OrderStatusType';

/**
 * The order statuses.
 */
export const orderStatuses: OrderStatusType[] = [
	{
		id: '1',
		name: 'Awaiting check payment',
		color: 'bg-blue text-white'
	},
	{
		id: '2',
		name: 'Payment accepted',
		color: 'bg-green text-white'
	},
	{
		id: '3',
		name: 'Preparing the order',
		color: 'bg-orange text-black'
	},
	{
		id: '4',
		name: 'Shipped',
		color: 'bg-purple text-white'
	},
	{
		id: '5',
		name: 'Delivered',
		color: 'bg-green-700 text-white'
	},
	{
		id: '6',
		name: 'Canceled',
		color: 'bg-pink text-white'
	},
	{
		id: '7',
		name: 'Refunded',
		color: 'bg-red text-white'
	},
	{
		id: '8',
		name: 'Payment error',
		color: 'bg-red-700 text-white'
	},
	{
		id: '9',
		name: 'On pre-order (paid)',
		color: 'bg-purple-300 text-white'
	},
	{
		id: '10',
		name: 'Awaiting bank wire payment',
		color: 'bg-blue text-white'
	},
	{
		id: '11',
		name: 'Awaiting PayPal payment',
		color: 'bg-blue-700 text-white'
	},
	{
		id: '12',
		name: 'Remote payment accepted',
		color: 'bg-green-800 text-white'
	},
	{
		id: '13',
		name: 'On pre-order (not paid)',
		color: 'bg-purple-700 text-white'
	},
	{
		id: '14',
		name: 'Awaiting Cash-on-delivery payment',
		color: 'bg-blue-800 text-white'
	}
];

/**
 * The orders status properties.
 */
type OrdersStatusProps = {
	name: string;
};

/**
 * The orders status component.
 */
function OrdersStatus(props: OrdersStatusProps) {
	const { name } = props;

	return (
		<div
			className={clsx(
				'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
				_.find(orderStatuses, { name }).color
			)}
		>
			{name}
		</div>
	);
}

export default OrdersStatus;
