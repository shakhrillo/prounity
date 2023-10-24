import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { alpha, styled } from '@mui/material/styles';
import clsx from 'clsx';
import { useMemo } from 'react';
import { ListItem, ListItemButtonProps, ListItemText } from '@mui/material';
import FuseNavItem, { FuseNavItemComponentProps } from '../../FuseNavItem';

type ListItemButtonComponentProps = ListItemButtonProps & {
	itempadding: number;
};

const Root = styled(ListItem)<ListItemButtonComponentProps>(({ theme, ...props }) => ({
	minminHeight: 44,
	width: '100%',
	borderRadius: '6px',
	margin: '28px 0 0 0',
	paddingRight: 16,
	paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
	paddingTop: 10,
	paddingBottom: 10,
	color: alpha(theme.palette.text.primary, 0.7),
	fontWeight: 600,
	letterSpacing: '0.025em'
}));

/**
 * FuseNavVerticalGroup is a component used to render a group of navigation items in a vertical layout.
 */
function FuseNavVerticalGroup(props: FuseNavItemComponentProps) {
	const { item, nestedLevel = 0, onItemClick, checkPermission } = props;

	const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;

	const component = item.url ? NavLinkAdapter : 'li';

	let itemProps = {};

	if (typeof component !== 'string') {
		itemProps = {
			disabled: item.disabled,
			to: item.url,
			end: item.end,
			role: 'button'
		};
	}

	if (checkPermission && !item?.hasPermission) {
		return null;
	}

	return useMemo(
		() => (
			<>
				<Root
					component={component}
					itempadding={itempadding}
					className={clsx('fuse-list-subheader flex items-center  py-10', !item.url ? 'cursor-default' : '')}
					onClick={() => onItemClick && onItemClick(item)}
					sx={item.sx}
					{...itemProps}
				>
					<ListItemText
						className="fuse-list-subheader-text"
						sx={{
							margin: 0,
							'& > .MuiListItemText-primary': {
								fontSize: 12,
								color: 'secondary.light',
								fontWeight: 600,
								textTransform: 'uppercase',
								letterSpacing: '.05em',
								lineHeight: '20px'
							},

							'& > .MuiListItemText-secondary': {
								fontSize: 11,
								color: 'text.disabled',
								letterSpacing: '.06px',
								fontWeight: 500,
								lineHeight: '1.5'
							}
						}}
						primary={item.title}
						secondary={item.subtitle}
					/>
				</Root>
				{item.children && (
					<>
						{item.children.map((_item) => (
							<FuseNavItem
								key={_item.id}
								type={`vertical-${_item.type}`}
								item={_item}
								nestedLevel={nestedLevel}
								onItemClick={onItemClick}
								checkPermission={checkPermission}
							/>
						))}
					</>
				)}
			</>
		),
		[item, itempadding, nestedLevel, onItemClick]
	);
}

const NavVerticalGroup = FuseNavVerticalGroup;

export default NavVerticalGroup;
