import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'app/store';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { ChangeEvent } from 'react';
import { selectProductsSearchText, setProductsSearchText } from '../store/productsSlice';

/**
 * The products header.
 */
function ProductsHeader() {
	const dispatch = useAppDispatch();
	const searchText = useAppSelector(selectProductsSearchText);

	return (
		<div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">
			<motion.span
				initial={{ x: -20 }}
				animate={{ x: 0, transition: { delay: 0.2 } }}
			>
				<Typography className="text-24 md:text-32 font-extrabold tracking-tight">Products</Typography>
			</motion.span>
			<div className="flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8">
				<Paper
					component={motion.div}
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
					className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
				>
					<FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

					<Input
						placeholder="Search products"
						className="flex flex-1"
						disableUnderline
						fullWidth
						value={searchText}
						inputProps={{
							'aria-label': 'Search'
						}}
						onChange={(ev: ChangeEvent<HTMLInputElement>) =>
							dispatch(setProductsSearchText(ev.target.value))
						}
					/>
				</Paper>
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
				>
					<Button
						component={Link}
						to="/apps/e-commerce/products/new"
						variant="contained"
						color="secondary"
						startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
					>
						Add
					</Button>
				</motion.div>
			</div>
		</div>
	);
}

export default ProductsHeader;
