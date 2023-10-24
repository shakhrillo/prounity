import { memo } from 'react';
import QuickPanel from '../../shared-components/quickPanel/QuickPanel';
import NotificationPanel from '../../shared-components/notificationPanel/NotificationPanel';

/**
 * The right side layout 1.
 */
function RightSideLayout1() {
	return (
		<>
			<QuickPanel />

			<NotificationPanel />
		</>
	);
}

export default memo(RightSideLayout1);
