import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { forwardRef, memo, ReactNode, useImperativeHandle, useRef } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Theme } from '@mui/system';
import FusePageCardedSidebar from './FusePageCardedSidebar';
import FusePageCardedHeader from './FusePageCardedHeader';

const headerHeight = 120;
const toolbarHeight = 64;

/**
 * Props for the FusePageCarded component.
 */
type FusePageCardedProps = SystemStyleObject<Theme> & {
	className?: string;
	leftSidebarContent?: ReactNode;
	leftSidebarVariant?: 'permanent' | 'persistent' | 'temporary';
	rightSidebarContent?: ReactNode;
	rightSidebarVariant?: 'permanent' | 'persistent' | 'temporary';
	header?: ReactNode;
	content?: ReactNode;
	scroll?: 'normal' | 'page' | 'content';
	leftSidebarOpen?: boolean;
	rightSidebarOpen?: boolean;
	leftSidebarWidth?: number;
	rightSidebarWidth?: number;
	rightSidebarOnClose?: () => void;
	leftSidebarOnClose?: () => void;
};

const Root = styled('div')<FusePageCardedProps>(({ theme, ...props }) => ({
	display: 'flex',
	flexDirection: 'column',
	minWidth: 0,
	minHeight: '100%',
	position: 'relative',
	flex: '1 1 auto',
	width: '100%',
	height: 'auto',
	backgroundColor: theme.palette.background.default,

	'& .FusePageCarded-scroll-content': {
		height: '100%'
	},

	'& .FusePageCarded-wrapper': {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		zIndex: 2,
		maxWidth: '100%',
		minWidth: 0,
		height: '100%',
		backgroundColor: theme.palette.background.paper,

		...(props.scroll === 'content' && {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			overflow: 'hidden'
		})
	},

	'& .FusePageCarded-header': {
		display: 'flex',
		flex: '0 0 auto'
	},

	'& .FusePageCarded-contentWrapper': {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		overflow: 'auto',
		WebkitOverflowScrolling: 'touch',
		zIndex: 9999
	},

	'& .FusePageCarded-toolbar': {
		height: toolbarHeight,
		minHeight: toolbarHeight,
		display: 'flex',
		alignItems: 'center'
	},

	'& .FusePageCarded-content': {
		flex: '1 0 auto'
	},

	'& .FusePageCarded-sidebarWrapper': {
		overflow: 'hidden',
		backgroundColor: 'transparent',
		position: 'absolute',
		'&.permanent': {
			[theme.breakpoints.up('lg')]: {
				position: 'relative',
				marginLeft: 0,
				marginRight: 0,
				transition: theme.transitions.create('margin', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen
				}),
				'&.closed': {
					transition: theme.transitions.create('margin', {
						easing: theme.transitions.easing.easeOut,
						duration: theme.transitions.duration.enteringScreen
					}),

					'&.FusePageCarded-leftSidebar': {
						marginLeft: -props.leftSidebarWidth
					},
					'&.FusePageCarded-rightSidebar': {
						marginRight: -props.rightSidebarWidth
					}
				}
			}
		}
	},

	'& .FusePageCarded-sidebar': {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.primary,

		'&.permanent': {
			[theme.breakpoints.up('lg')]: {
				position: 'relative'
			}
		},
		maxWidth: '100%',
		height: '100%'
	},

	'& .FusePageCarded-leftSidebar': {
		width: props.leftSidebarWidth,

		[theme.breakpoints.up('lg')]: {
			// borderRight: `1px solid ${theme.palette.divider}`,
			// borderLeft: 0,
		}
	},

	'& .FusePageCarded-rightSidebar': {
		width: props.rightSidebarWidth,

		[theme.breakpoints.up('lg')]: {
			// borderLeft: `1px solid ${theme.palette.divider}`,
			// borderRight: 0,
		}
	},

	'& .FusePageCarded-sidebarHeader': {
		height: headerHeight,
		minHeight: headerHeight,
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.contrastText
	},

	'& .FusePageCarded-sidebarHeaderInnerSidebar': {
		backgroundColor: 'transparent',
		color: 'inherit',
		height: 'auto',
		minHeight: 'auto'
	},

	'& .FusePageCarded-sidebarContent': {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%'
	},

	'& .FusePageCarded-backdrop': {
		position: 'absolute'
	}
}));

/**
 * The FusePageCarded component is a carded page layout with left and right sidebars.
 */
const FusePageCarded = forwardRef<
	{ toggleLeftSidebar: (T: boolean) => void; toggleRightSidebar: (T: boolean) => void },
	FusePageCardedProps
>((props, ref) => {
	const {
		scroll = 'page',
		className,
		header,
		content,
		leftSidebarContent,
		rightSidebarContent,
		leftSidebarOpen = false,
		rightSidebarOpen = false,
		rightSidebarWidth = 240,
		leftSidebarWidth = 240,
		leftSidebarVariant = 'permanent',
		rightSidebarVariant = 'permanent',
		rightSidebarOnClose,
		leftSidebarOnClose
	} = props;

	const leftSidebarRef = useRef<{ toggleSidebar: (T: boolean) => void }>(null);
	const rightSidebarRef = useRef<{ toggleSidebar: (T: boolean) => void }>(null);
	const rootRef = useRef(null);

	useImperativeHandle(ref, () => ({
		rootRef,
		toggleLeftSidebar: (val: boolean) => {
			leftSidebarRef.current.toggleSidebar(val);
		},
		toggleRightSidebar: (val: boolean) => {
			rightSidebarRef.current.toggleSidebar(val);
		}
	}));

	return (
		<>
			<GlobalStyles
				styles={() => ({
					...(scroll !== 'page' && {
						'#fuse-toolbar': {
							position: 'static'
						},
						'#fuse-footer': {
							position: 'static'
						}
					}),
					...(scroll === 'page' && {
						'#fuse-toolbar': {
							position: 'sticky',
							top: 0
						},
						'#fuse-footer': {
							position: 'sticky',
							bottom: 0
						}
					})
				})}
			/>
			<Root
				className={clsx('FusePageCarded-root', `FusePageCarded-scroll-${props.scroll}`, className)}
				ref={rootRef}
				scroll={scroll}
				leftSidebarWidth={leftSidebarWidth}
				rightSidebarWidth={rightSidebarWidth}
			>
				{header && <FusePageCardedHeader header={header} />}

				<div className="container relative z-10 flex h-full flex-auto flex-col overflow-hidden rounded-t-16 shadow-1">
					<div className="FusePageCarded-wrapper">
						{leftSidebarContent && (
							<FusePageCardedSidebar
								position="left"
								variant={leftSidebarVariant}
								ref={leftSidebarRef}
								open={leftSidebarOpen}
								onClose={leftSidebarOnClose}
							>
								{leftSidebarContent}
							</FusePageCardedSidebar>
						)}
						<FuseScrollbars
							className="FusePageCarded-contentWrapper"
							enable={scroll === 'content'}
						>
							{content && <div className={clsx('FusePageCarded-content')}>{content}</div>}
						</FuseScrollbars>
						{rightSidebarContent && (
							<FusePageCardedSidebar
								position="right"
								variant={rightSidebarVariant || 'permanent'}
								ref={rightSidebarRef}
								open={rightSidebarOpen}
								onClose={rightSidebarOnClose}
							>
								{rightSidebarContent}
							</FusePageCardedSidebar>
						)}
					</div>
				</div>
			</Root>
		</>
	);
});

export default memo(styled(FusePageCarded)``);
