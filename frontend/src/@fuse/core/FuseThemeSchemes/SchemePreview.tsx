import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { FuseThemeType } from '@fuse/core/FuseSettings/FuseSettings';

type SchemePreviewProps = {
	id: string;
	className?: string;
	onSelect: (T: FuseThemeType) => void;
	theme: FuseThemeType;
};

/**
 * The SchemePreview component is responsible for rendering a preview of a theme scheme.
 * It uses various MUI components to render the preview.
 * The component is memoized to prevent unnecessary re-renders.
 */
function SchemePreview(props: SchemePreviewProps) {
	const { theme, className, id, onSelect = () => {} } = props;

	const _theme = useTheme();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const primaryColor: string = theme.palette.primary[500] ? theme.palette.primary[500] : theme.palette.primary.main;
	const primaryColorContrast = theme.palette.primary.contrastText || _theme.palette.getContrastText(primaryColor);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const secondaryColor: string = theme.palette.secondary[500]
		? theme.palette.secondary[500]
		: theme.palette.secondary.main;
	const secondaryColorContrast =
		theme.palette.secondary.contrastText || _theme.palette.getContrastText(secondaryColor);
	const backgroundColor = theme.palette.background.default;
	const backgroundColorContrast = _theme.palette.getContrastText(theme.palette.background.default);
	const paperColor = theme.palette.background.paper;
	const paperColorContrast = _theme.palette.getContrastText(theme.palette.background.paper);

	return (
		<div className={clsx(className, 'mb-8')}>
			<button
				className={clsx(
					'relative w-full cursor-pointer overflow-hidden rounded-6 text-left font-500 shadow transition-shadow hover:shadow-md'
				)}
				style={{
					backgroundColor,
					color: backgroundColorContrast
				}}
				onClick={() => onSelect(theme)}
				type="button"
			>
				<div
					className="relative h-56 w-full px-8 pt-8"
					style={{
						backgroundColor: primaryColor,
						color: primaryColorContrast
					}}
				>
					<span className="text-12 opacity-75">Header (Primary)</span>

					<div
						className="absolute bottom-0 right-0 -mb-10 mr-4 flex h-20 w-20 items-center justify-center rounded-full text-10 shadow"
						style={{
							backgroundColor: secondaryColor,
							color: secondaryColorContrast
						}}
					>
						<span className="opacity-75">S</span>
					</div>
				</div>
				<div className="-mt-24 w-full pl-8 pr-28">
					<div
						className="relative h-96 w-full rounded-4 p-8 shadow"
						style={{
							backgroundColor: paperColor,
							color: paperColorContrast
						}}
					>
						<span className="text-12 opacity-75">Paper</span>
					</div>
				</div>

				<div className="w-full p-8">
					<span className="text-12 opacity-75">Background</span>
				</div>
			</button>
			<Typography className="mt-12 w-full text-center font-semibold">{id}</Typography>
		</div>
	);
}

export default SchemePreview;
