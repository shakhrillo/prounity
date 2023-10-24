import { memo } from 'react';
import { FuseThemesType, FuseThemeType } from '@fuse/core/FuseSettings/FuseSettings';
import SchemePreview from './SchemePreview';

type FuseThemeSchemesProps = {
	themes: FuseThemesType;
	onSelect?: (t: FuseThemeType) => void;
};

/**
 * The FuseThemeSchemes component is responsible for rendering a list of theme schemes with preview images.
 * It uses the SchemePreview component to render each scheme preview.
 * The component is memoized to prevent unnecessary re-renders.
 */
function FuseThemeSchemes(props: FuseThemeSchemesProps) {
	const { themes, onSelect = () => {} } = props;

	return (
		<div>
			<div className="-mx-8 flex w-full flex-wrap">
				{Object.entries(themes)
					.filter(([key]) => !(key === 'mainThemeDark' || key === 'mainThemeLight'))
					.map(([key, val]) => (
						<div
							key={key}
							className="w-1/2 p-8"
						>
							<SchemePreview
								id={key}
								theme={val}
								onSelect={() => onSelect(val)}
							/>
						</div>
					))}
			</div>
		</div>
	);
}

export default memo(FuseThemeSchemes);
