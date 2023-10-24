import MailList from './MailList';
import MailsToolbar from './MailsToolbar';

type MailsProps = {
	onToggleLeftSidebar: () => void;
};

/**
 * The mails component.
 */
function Mails(props: MailsProps) {
	const { onToggleLeftSidebar } = props;

	return (
		<div className="flex flex-col w-full">
			<MailsToolbar onToggleLeftSidebar={onToggleLeftSidebar} />
			<MailList />
		</div>
	);
}

export default Mails;
