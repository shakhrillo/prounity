import FuseSidePanel from '@fuse/core/FuseSidePanel';
import { memo } from 'react';
import NavigationShortcuts from '../../shared-components/NavigationShortcuts';

/**
 * The left side layout 3.
 */
function LeftSideLayout3() {
	return (
		<FuseSidePanel>
			<NavigationShortcuts
				className="px-8 py-16"
				variant="vertical"
			/>
		</FuseSidePanel>
	);
}

export default memo(LeftSideLayout3);
