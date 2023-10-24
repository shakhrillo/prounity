type AvailableOption = {
	value: string;
	title: string;
};

type Option = {
	description: string;
	link: string;
	component?: React.ComponentType<unknown>;
};

/**
 * LayoutOptionType specifies the interface for customizing options across different
 * components in the layout.
 */
export type LayoutOptionType = {
	title: string;
	description: string;
	availableOptions: AvailableOption[];
	selectedOption: string;
	options: {
		[key: string]: Option;
	};
};
