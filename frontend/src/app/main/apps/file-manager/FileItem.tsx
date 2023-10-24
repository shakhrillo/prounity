import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'app/store';
import ItemIcon from './ItemIcon';
import { setSelectedItem } from './store/itemsSlice';
import { FileManagerItemType } from './types/FileManagerItemType';

type FileItemProps = {
	item: FileManagerItemType;
};

/**
 * The file item.
 */
function FileItem(props: FileItemProps) {
	const { item } = props;

	const dispatch = useAppDispatch();

	if (!item) {
		return null;
	}

	return (
		<Box
			sx={{ backgroundColor: 'background.paper' }}
			className="flex flex-col relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16 cursor-pointer"
			onClick={() => dispatch(setSelectedItem(item.id))}
		>
			<div className="flex flex-auto w-full items-center justify-center">
				<ItemIcon type={item.type} />
			</div>
			<div className="flex shrink flex-col justify-center text-center">
				<Typography className="truncate text-12 font-medium">{item.name}</Typography>
				{item.contents && (
					<Typography
						className="truncate text-12 font-medium"
						color="text.secondary"
					>
						{item.contents}
					</Typography>
				)}
			</div>
		</Box>
	);
}

export default FileItem;
