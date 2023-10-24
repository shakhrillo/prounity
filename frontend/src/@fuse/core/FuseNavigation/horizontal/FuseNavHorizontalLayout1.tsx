import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import FuseNavItem from '../FuseNavItem';
import { FuseNavigationProps } from '../FuseNavigation';

const StyledList = styled(List)(({ theme }) => ({
	'& .fuse-list-item': {
		'&:hover': {
			backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,.04)'
		},
		'&:focus:not(.active)': {
			backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0,0,0,.05)'
		},
		padding: '8px 12px 8px 12px',
		height: 40,
		minHeight: 40,
		'&.level-0': {
			minHeight: 44,
			minminHeight: 44
		},
		'& .fuse-list-item-text': {
			padding: '0 0 0 8px'
		}
	},
	'&.active-square-list': {
		'& .fuse-list-item': {
			borderRadius: '0'
		}
	}
}));

/**
 * FuseNavHorizontalLayout1 is a react component used for building and
 * rendering horizontal navigation menus, using the Material UI List component.
 */
function FuseNavHorizontalLayout1(props: FuseNavigationProps) {
	const { navigation, active, dense, className, checkPermission } = props;

	return (
		<StyledList
			className={clsx(
				'navigation flex whitespace-nowrap p-0',
				`active-${active}-list`,
				dense && 'dense',
				className
			)}
		>
			{navigation.map((_item) => (
				<FuseNavItem
					key={_item.id}
					type={`horizontal-${_item.type}`}
					item={_item}
					nestedLevel={0}
					dense={dense}
					checkPermission={checkPermission}
				/>
			))}
		</StyledList>
	);
}

export default FuseNavHorizontalLayout1;
