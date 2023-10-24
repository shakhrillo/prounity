import { styled } from '@mui/material/styles';

const Root = styled('div')(({ color }) => ({
	display: 'flex',
	alignItems: 'center',
	height: 20,
	borderRadius: 10,
	padding: '0 6px',
	fontSize: 10,
	backgroundColor: 'rgba(0,0,0,.08);',
	'& > span': {
		width: 8,
		height: 8,
		marginRight: 4,
		borderRadius: '50%',
		backgroundColor: color
	}
}));

type MailChipProps = {
	className?: string;
	color: string;
	title: string;
};

/**
 * The mail chip.
 */
function MailChip(props: MailChipProps) {
	const { className, color, title } = props;
	return (
		<Root
			className={className}
			color={color}
		>
			<span />
			<div>{title}</div>
		</Root>
	);
}

export default MailChip;
