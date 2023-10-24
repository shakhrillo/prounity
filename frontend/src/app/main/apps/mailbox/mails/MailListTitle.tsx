import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useAppSelector } from 'app/store';
import { selectMailsTitle } from '../store/mailsSlice';

/**
 * The mail list title.
 */
function MailListTitle() {
	const routeParams = useParams();
	const title = useAppSelector(selectMailsTitle(routeParams));

	return <Typography className="font-semibold uppercase mx-8">{title}</Typography>;
}

export default MailListTitle;
