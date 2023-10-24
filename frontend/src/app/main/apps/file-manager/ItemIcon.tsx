import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { amber, blue, green, grey, red } from '@mui/material/colors';

const TypeBadge = styled(Box)(({ ...props }) => ({
	backgroundColor: {
		PDF: red[600],
		DOC: blue[600],
		XLS: green[600],
		TXT: grey[600],
		JPG: amber[600]
	}[props.color as string]
}));

type ItemIconProps = {
	type: string;
};

/**
 * The item icon component.
 */
function ItemIcon(props: ItemIconProps) {
	const { type } = props;

	if (type === 'folder') {
		return (
			<FuseSvgIcon
				size={56}
				color="disabled"
			>
				heroicons-outline:folder
			</FuseSvgIcon>
		);
	}

	return (
		<div className="relative">
			<FuseSvgIcon
				size={56}
				color="disabled"
			>
				heroicons-outline:document
			</FuseSvgIcon>
			<TypeBadge
				color={type}
				className="absolute left-0 bottom-0 px-6 rounded text-12 font-semibold leading-20 text-white"
			>
				{type}
			</TypeBadge>
		</div>
	);
}

export default ItemIcon;
