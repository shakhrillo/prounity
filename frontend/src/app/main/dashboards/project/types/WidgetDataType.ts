type ExtraData = {
	name: string;
	count: Record<RangeType, number>;
};

type WidgetInnerData = {
	name: string;
	count: Record<RangeType, number>;
	extra: ExtraData;
};

/**
 * The type definition for the data used to populate the widget.
 */
type WidgetDataType = {
	title?: string;
	ranges: Record<RangeType, string>;
	currentRange?: string;
	data: WidgetInnerData;
	detail?: string;
};

export type RangeType = 'DY' | 'DT' | 'DTM';

export default WidgetDataType;
