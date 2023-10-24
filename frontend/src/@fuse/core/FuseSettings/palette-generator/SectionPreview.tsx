import clsx from 'clsx';
import Box from '@mui/material/Box';
import { darken, lighten } from '@mui/material/styles';
import { red } from '@mui/material/colors';

/**
 * Props for SectionPreview component
 */
type SectionPreviewProps = {
	className?: string;
	section?: 'main' | 'navbar' | 'toolbar' | 'footer';
};

/**
 * SectionPreview component
 */
function SectionPreview(props: SectionPreviewProps) {
	const { section, className } = props;
	return (
		<div className={clsx('flex h-80 w-128 overflow-hidden rounded-md border-1 hover:opacity-80', className)}>
			<Box
				sx={{
					backgroundColor:
						section === 'navbar'
							? red['100']
							: (theme) =>
									theme.palette.mode === 'light'
										? lighten(theme.palette.background.default, 0.4)
										: lighten(theme.palette.background.default, 0.02),
					'& > div': {
						backgroundColor:
							section === 'navbar'
								? red['200']
								: (theme) =>
										theme.palette.mode === 'light'
											? darken(theme.palette.background.default, 0.1)
											: lighten(theme.palette.background.default, 0.1)
					}
				}}
				className="w-32 space-y-1 px-6 pt-12"
			>
				<div className="h-4 rounded-sm" />
				<div className="h-4 rounded-sm" />
				<div className="h-4 rounded-sm" />
				<div className="h-4 rounded-sm" />
				<div className="h-4 rounded-sm" />
			</Box>
			<div className="flex flex-auto flex-col border-l">
				<Box
					sx={{
						backgroundColor:
							section === 'toolbar'
								? red['100']
								: (theme) =>
										theme.palette.mode === 'light'
											? lighten(theme.palette.background.default, 0.4)
											: lighten(theme.palette.background.default, 0.02),
						'& > div': {
							backgroundColor:
								section === 'toolbar'
									? red['200']
									: (theme) =>
											theme.palette.mode === 'light'
												? darken(theme.palette.background.default, 0.1)
												: lighten(theme.palette.background.default, 0.1)
						}
					}}
					className={clsx('flex h-12 items-center justify-end pr-6')}
				>
					<div className="ml-4 h-4 w-4 rounded-full" />
					<div className="ml-4 h-4 w-4 rounded-full" />
					<div className="ml-4 h-4 w-4 rounded-full" />
				</Box>
				<Box
					sx={{
						backgroundColor:
							section === 'main'
								? red['100']
								: (theme) =>
										theme.palette.mode === 'light'
											? lighten(theme.palette.background.default, 0.4)
											: lighten(theme.palette.background.default, 0.02)
					}}
					className={clsx('flex flex-auto border-y')}
				/>
				<Box
					sx={{
						backgroundColor:
							section === 'footer'
								? red['100']
								: (theme) =>
										theme.palette.mode === 'light'
											? lighten(theme.palette.background.default, 0.4)
											: lighten(theme.palette.background.default, 0.02),
						'& > div': {
							backgroundColor:
								section === 'footer'
									? red['200']
									: (theme) =>
											theme.palette.mode === 'light'
												? darken(theme.palette.background.default, 0.1)
												: lighten(theme.palette.background.default, 0.1)
						}
					}}
					className={clsx('flex h-12 items-center pr-6')}
				>
					<div className="ml-4 h-4 w-4 rounded-full" />
					<div className="ml-4 h-4 w-4 rounded-full" />
					<div className="ml-4 h-4 w-4 rounded-full" />
				</Box>
			</div>
		</div>
	);
}

export default SectionPreview;
