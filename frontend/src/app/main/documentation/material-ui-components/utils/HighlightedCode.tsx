import { forwardRef } from 'react';
import FuseHighlight from '@fuse/core/FuseHighlight';

type HighlightedCodeProps = {
	code: string;
	language: string;
};
const HighlightedCode = forwardRef<HTMLDivElement, HighlightedCodeProps>((props, ref) => {
	const { code, language, ...other } = props;

	return (
		<FuseHighlight
			component="pre"
			className={`language-${language || 'jsx'}`}
			ref={ref}
			{...other}
		>
			{code}
		</FuseHighlight>
	);
});

export default HighlightedCode;
