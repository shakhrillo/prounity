import FusePageCarded from '@fuse/core/FusePageCarded';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import ProductsHeader from './ProductsHeader';
import ProductsTable from './ProductsTable';

/**
 * The products page.
 */
function Products() {
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	return (
		<FusePageCarded
			header={<ProductsHeader />}
			content={<ProductsTable />}
			scroll={isMobile ? 'normal' : 'content'}
		/>
	);
}

export default Products;
