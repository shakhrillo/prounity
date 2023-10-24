import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';

const Root = styled('div')({
	padding: 24
});

/**
 * The BlankSample page.
 */
function BlankSample() {
	return (
		<Root>
			<DemoContent />
		</Root>
	);
}

export default BlankSample;
