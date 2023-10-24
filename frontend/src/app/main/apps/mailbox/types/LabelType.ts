import { LabelColorsType } from '../mail/labelColors';

/**
 * Label Type
 */
export type LabelType = {
	id: string;
	title: string;
	slug: string;
	color: LabelColorsType;
};

/**
 * Labels Type
 */
export type LabelsType = LabelType[];
