import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

/**
 * The inventory tab.
 */
function InventoryTab() {
	const methods = useFormContext();
	const { control } = methods;

	return (
		<div>
			<Controller
				name="sku"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mt-8 mb-16"
						required
						label="SKU"
						autoFocus
						id="sku"
						variant="outlined"
						fullWidth
					/>
				)}
			/>

			<Controller
				name="quantity"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mt-8 mb-16"
						label="Quantity"
						id="quantity"
						variant="outlined"
						type="number"
						fullWidth
					/>
				)}
			/>
		</div>
	);
}

export default InventoryTab;
