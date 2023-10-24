/**
 * Event Type
 */

export type EventType = {
	id: string;
	title: string;
	start: string;
	end: string;
	allDay: boolean | undefined;
	extendedProps: {
		desc?: string;
		label?: string;
	};
};
