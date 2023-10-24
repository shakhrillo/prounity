import { combineReducers } from '@reduxjs/toolkit';
import faqs from './faqsSlice';
import faqsMost from './faqsMostSlice';
import guides from './guidesSlice';
import guide from './guideSlice';
import faqCategories from './faqCategoriesSlice';
import guideCategories from './guideCategoriesSlice';

/**
 * The Help Center App reducer.
 */
const reducer = combineReducers({
	guide,
	guides,
	guideCategories,
	faqs,
	faqCategories,
	faqsMost
});

export default reducer;
