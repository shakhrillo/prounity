import lazyWithReducer from 'app/store/lazyWithReducer';
import HelpCenterHome from './home/HelpCenterHome';
import HelpCenterFaqs from './faqs/HelpCenterFaqs';
import HelpCenterGuides from './guides/HelpCenterGuides';
import HelpCenterSupport from './support/HelpCenterSupport';
import GuideCategory from './guides/GuideCategory';
import GuideCategories from './guides/GuideCategories';
import HelpCenterGuide from './guide/HelpCenterGuide';
import reducer from './store';

const HelpCenterApp = lazyWithReducer('helpCenterApp', () => import('./HelpCenterApp'), reducer);

/**
 * The help center app config.
 */
const HelpCenterAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'apps/help-center',
			element: <HelpCenterApp />,
			children: [
				{
					path: '',
					element: <HelpCenterHome />
				},
				{
					path: 'faqs',
					element: <HelpCenterFaqs />
				},
				{
					path: 'guides',
					element: <HelpCenterGuides />,
					children: [
						{
							path: '',
							element: <GuideCategories />
						},
						{
							path: ':categorySlug',
							element: <GuideCategory />
						},
						{
							path: ':categorySlug/:guideSlug',
							element: <HelpCenterGuide />
						}
					]
				},
				{
					path: 'support',
					element: <HelpCenterSupport />
				}
			]
		}
	]
};

export default HelpCenterAppConfig;
