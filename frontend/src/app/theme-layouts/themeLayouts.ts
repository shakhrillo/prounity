import layout1 from './layout1/Layout1';
import layout2 from './layout2/Layout2';
import layout3 from './layout3/Layout3';

/**
 * The type definition for the theme layouts.
 */
export type themeLayoutsType = {
	[key: string]: React.ComponentType;
};

/**
 * The theme layouts.
 */
const themeLayouts: themeLayoutsType = {
	layout1,
	layout2,
	layout3
};

export default themeLayouts;
