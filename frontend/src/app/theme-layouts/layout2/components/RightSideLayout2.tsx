import { memo } from 'react';
import ChatPanel from 'app/theme-layouts/shared-components/chatPanel/ChatPanel';
import QuickPanel from '../../shared-components/quickPanel/QuickPanel';
import NotificationPanel from '../../shared-components/notificationPanel/NotificationPanel';

/**
 * The right side layout 2.
 */
function RightSideLayout2() {
	return (
		<>
			<ChatPanel />

			<QuickPanel />

			<NotificationPanel />
		</>
	);
}

export default memo(RightSideLayout2);
