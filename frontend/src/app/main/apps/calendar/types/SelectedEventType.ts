/**
 * Selected Event Type
 */
export type SelectedEventType = {
	id: string;
	title: string;
	allDay: boolean;
	start: string;
	end: string;
	extendedProps: { desc?: string; label?: string };
};
