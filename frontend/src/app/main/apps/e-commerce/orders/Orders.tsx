import FusePageCarded from '@fuse/core/FusePageCarded';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import OrdersHeader from './OrdersHeader';
import OrdersTable from './OrdersTable';

/**
 * The orders page.
 */
function Orders() {
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	return (
		<FusePageCarded
			header={<OrdersHeader />}
			content={<OrdersTable />}
			scroll={isMobile ? 'normal' : 'content'}
		/>
	);
}

export default Orders;
