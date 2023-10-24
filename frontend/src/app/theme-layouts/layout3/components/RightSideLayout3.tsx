import { memo } from 'react';
import NotificationPanel from '../../shared-components/notificationPanel/NotificationPanel';
import QuickPanel from '../../shared-components/quickPanel/QuickPanel';

/**
 * The right side layout 3.
 */
function RightSideLayout3() {
	return (
		<>
			<QuickPanel />

			<NotificationPanel />
		</>
	);
}

export default memo(RightSideLayout3);
