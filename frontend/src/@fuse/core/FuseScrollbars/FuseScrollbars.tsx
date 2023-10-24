import { styled } from '@mui/material/styles';
import MobileDetect from 'mobile-detect';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import React, { forwardRef, useEffect, useRef, ReactNode, useCallback, useState } from 'react';
import history from '@history';
import { useAppSelector } from 'app/store';
import { selectCustomScrollbarsEnabled } from 'app/store/fuse/settingsSlice';

const Root = styled('div')(() => ({
	overscrollBehavior: 'contain',
	minHeight: '100%'
}));

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

type EventHandlerMap = { [key: string]: string };

const handlerNameByEvent: EventHandlerMap = {
	'ps-scroll-y': 'onScrollY',
	'ps-scroll-x': 'onScrollX',
	'ps-scroll-up': 'onScrollUp',
	'ps-scroll-down': 'onScrollDown',
	'ps-scroll-left': 'onScrollLeft',
	'ps-scroll-right': 'onScrollRight',
	'ps-y-reach-start': 'onYReachStart',
	'ps-y-reach-end': 'onYReachEnd',
	'ps-x-reach-start': 'onXReachStart',
	'ps-x-reach-end': 'onXReachEnd'
};

Object.freeze(handlerNameByEvent);

type FuseScrollbarsProps = {
	id?: string;
	className?: string;
	children: ReactNode;
	enable?: boolean;
	scrollToTopOnChildChange?: () => void;
	scrollToTopOnRouteChange?: () => void;
	option?: {
		wheelPropagation?: boolean;
		suppressScrollX?: boolean;
	};
};

/**
 * FuseScrollbars Component for app-level scrollbar
 * Unlike normal scrollbars, this component supports mobile device as well
 */
const FuseScrollbars = forwardRef<HTMLDivElement, FuseScrollbarsProps>((props, ref) => {
	const {
		className = '',
		children,
		id = '',
		scrollToTopOnChildChange = false,
		scrollToTopOnRouteChange = false,
		enable = true,
		option = {
			wheelPropagation: true
		}
	} = props;
	const containerRef = useRef<HTMLDivElement>(null);
	const psRef = useRef<PerfectScrollbar | null>(null);
	const handlerByEvent = useRef<Map<string, EventListener>>(new Map());
	const [style, setStyle] = useState({});
	const customScrollbars = useAppSelector(selectCustomScrollbarsEnabled);

	const hookUpEvents = useCallback(() => {
		Object.keys(handlerNameByEvent).forEach((key) => {
			const callback = props[handlerNameByEvent[key] as keyof FuseScrollbarsProps] as (T: HTMLDivElement) => void;

			if (callback) {
				const handler: EventListener = () => callback(containerRef.current);
				handlerByEvent.current.set(key, handler);

				if ('current' in containerRef && containerRef.current instanceof HTMLDivElement) {
					containerRef.current.addEventListener(key, handler, false);
				}
			}
		});
	}, [ref]);

	const unHookUpEvents = useCallback(() => {
		handlerByEvent.current.forEach((value, key) => {
			if ('current' in containerRef && containerRef.current instanceof HTMLDivElement) {
				containerRef.current.removeEventListener(key, value, false);
			}
		});
		handlerByEvent.current.clear();
	}, [ref]);

	useEffect(() => {
		if (customScrollbars && containerRef.current && !isMobile) {
			psRef.current = new PerfectScrollbar(containerRef.current, option);
			hookUpEvents();
		}

		return () => {
			if (psRef.current) {
				psRef.current.destroy();
				psRef.current = null;
				unHookUpEvents();
			}
		};
	}, [customScrollbars]);

	const scrollToTop = useCallback(() => {
		if (ref && containerRef.current) {
			containerRef.current.scrollTop = 0;
		}
	}, [ref]);

	useEffect(() => {
		if (scrollToTopOnChildChange) {
			scrollToTop();
		}
	}, [scrollToTop, children, scrollToTopOnChildChange]);

	useEffect(
		() =>
			history.listen(() => {
				if (scrollToTopOnRouteChange) {
					scrollToTop();
				}
			}),
		[scrollToTop, scrollToTopOnRouteChange]
	);

	useEffect(() => {
		if (customScrollbars && enable && !isMobile) {
			setStyle({
				position: 'relative',
				overflow: 'hidden!important'
			});
		} else {
			setStyle({});
		}
	}, [customScrollbars, enable, isMobile]);

	return (
		<Root
			id={id}
			className={className}
			style={style}
			ref={(el) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				containerRef.current = el;
				if (typeof ref === 'function') {
					ref(el);
				} else if (ref) {
					ref.current = el;
				}
			}}
		>
			{children}
		</Root>
	);
});

export default FuseScrollbars;
