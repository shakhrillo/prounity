import { createEntityAdapter, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunkType, RootStateType } from 'app/store/types';
import { PartialDeep } from 'type-fest';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import { FuseNavigationType } from '@fuse/core/FuseNavigation/types/FuseNavigationType';
import { selectUserRole, userSliceType } from 'app/store/user/userSlice';
import FuseNavigationHelper from '@fuse/utils/FuseNavigationHelper';
import i18next from 'i18next';
import FuseNavItemModel from '@fuse/core/FuseNavigation/models/FuseNavItemModel';
import FuseUtils from '@fuse/utils';
import navigationConfig from 'app/configs/navigationConfig';
import { selectCurrentLanguageId } from '../i18nSlice';

type AppRootStateType = RootStateType<[navigationSliceType, userSliceType]>;

const navigationAdapter = createEntityAdapter<FuseNavItemType>();

const emptyInitialState = navigationAdapter.getInitialState([]);

const initialState = navigationAdapter.upsertMany(emptyInitialState, navigationConfig);

/**
 * Redux Thunk actions related to the navigation store state
 */

/**
 * Appends a navigation item to the navigation store state.
 */
export const appendNavigationItem =
	(item: FuseNavItemType, parentId?: string | null): AppThunkType =>
	async (dispatch, getState) => {
		const AppState = getState() as AppRootStateType;
		const navigation = selectNavigationAll(AppState);

		dispatch(setNavigation(FuseNavigationHelper.appendNavItem(navigation, FuseNavItemModel(item), parentId)));

		return Promise.resolve();
	};

/**
 * Prepends a navigation item to the navigation store state.
 */
export const prependNavigationItem =
	(item: FuseNavItemType, parentId?: string | null): AppThunkType =>
	async (dispatch, getState) => {
		const AppState = getState() as AppRootStateType;
		const navigation = selectNavigationAll(AppState);

		dispatch(setNavigation(FuseNavigationHelper.prependNavItem(navigation, FuseNavItemModel(item), parentId)));

		return Promise.resolve();
	};

/**
 * Adds a navigation item to the navigation store state at the specified index.
 */
export const updateNavigationItem =
	(id: string, item: PartialDeep<FuseNavItemType>): AppThunkType =>
	async (dispatch, getState) => {
		const AppState = getState() as AppRootStateType;
		const navigation = selectNavigationAll(AppState);

		dispatch(setNavigation(FuseNavigationHelper.updateNavItem(navigation, id, item)));

		return Promise.resolve();
	};

/**
 * Removes a navigation item from the navigation store state.
 */
export const removeNavigationItem =
	(id: string): AppThunkType =>
	async (dispatch, getState) => {
		const AppState = getState() as AppRootStateType;
		const navigation = selectNavigationAll(AppState);

		dispatch(setNavigation(FuseNavigationHelper.removeNavItem(navigation, id)));

		return Promise.resolve();
	};

export const {
	selectAll: selectNavigationAll,
	selectIds: selectNavigationIds,
	selectById: selectNavigationItemById
} = navigationAdapter.getSelectors((state: AppRootStateType) => state.fuse.navigation);

/**
 * The navigation slice
 */
export const navigationSlice = createSlice({
	name: 'fuse/navigation',
	initialState,
	reducers: {
		setNavigation: (state, action: PayloadAction<FuseNavigationType>) =>
			navigationAdapter.setAll(state, action.payload),
		resetNavigation: () => initialState
	}
});

export const { setNavigation, resetNavigation } = navigationSlice.actions;

export const selectNavigation = createSelector(
	[selectNavigationAll, selectUserRole, selectCurrentLanguageId],
	(navigation, userRole) => {
		function setAdditionalData(data: FuseNavigationType): FuseNavigationType {
			return data?.map((item) => ({
				hasPermission: Boolean(FuseUtils.hasPermission(item?.auth, userRole)),
				...item,
				...(item.translate && item.title ? { title: i18next.t(`navigation:${item.translate}`) } : {}),
				...(item.children ? { children: setAdditionalData(item.children) } : {})
			}));
		}

		const translatedValues = setAdditionalData(navigation);

		return translatedValues;
	}
);

export const selectFlatNavigation = createSelector([selectNavigation], (navigation) =>
	FuseNavigationHelper.getFlatNavigation(navigation)
);

export type navigationSliceType = typeof navigationSlice;

export default navigationSlice.reducer;
