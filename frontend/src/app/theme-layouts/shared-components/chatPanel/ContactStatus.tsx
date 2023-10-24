import { styled } from '@mui/material/styles';

const StyledStatus = styled('div')<{ value: string }>(({ theme, value }) => ({
	position: 'absolute',
	width: 12,
	height: 12,
	bottom: 4,
	left: 44,
	border: `2px solid ${theme.palette.background.default}`,
	borderRadius: '50%',
	zIndex: 10,

	...(value === 'online' && {
		backgroundColor: '#4CAF50'
	}),

	...(value === 'do-not-disturb' && {
		backgroundColor: '#F44336'
	}),

	...(value === 'away' && {
		backgroundColor: '#FFC107'
	}),

	...(value === 'offline' && {
		backgroundColor: '#646464'
	})
}));

type ContactStatusProps = {
	value: 'online' | 'do-not-disturb' | 'away' | 'offline';
};

function ContactStatus(props: ContactStatusProps) {
	const { value } = props;

	return <StyledStatus value={value} />;
}

export default ContactStatus;
