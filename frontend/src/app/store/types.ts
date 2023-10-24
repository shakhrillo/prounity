import { Action, Reducer, ThunkAction, ThunkDispatch, Dispatch, AnyAction } from '@reduxjs/toolkit';
import store from 'app/store';

/**
 * The type of the dispatch function for this application (AppState).
 */
// export type AppDispatchType = typeof store.dispatch;
// export type AppDispatchType = ThunkDispatch<RootStateType, unknown, Action<string>> & Dispatch<Action<string>>;

// export type AppDispatchType = ThunkDispatch<RootStateType, undefined, AnyAction>;

// This represents any action that can be dispatched to the store, either regular actions or thunks.
export type AppAction<R = Promise<void>> = Action<string> | ThunkAction<R, RootStateType, unknown, Action<string>>;

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, Action<string>>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootStateType,
	{ s: string; n: number },
	Action<string>
>;

export type AppDispatchType = Dispatch<Action<string>> & ((thunk: AppThunk) => Promise<AnyAction>);

/**
 * The base type of the root state for this application (AppState).
 */
export type BaseRootStateType = typeof store.getState;

/**
 * The extended type of the root state for this application (AppState).
 */
type ExtendedRootStateType<T extends string, State> = BaseRootStateType & { [K in T]: State };

/**
 * The type of the async reducers for this application (AppState).
 */
export type AsyncReducersType = {
	[key: string]: Reducer;
};

/**
 * Type to return from async actions (redux-thunk).
 * `R` describes the return value of the thunk.
 * `E` describes the extra argument type given to the action thunk, e.g.
 * `(dispatch, getState, extraArgument) => {}`
 */

// export type AppThunkAction<R, S, E, A> = (dispatch: AppThunkDispatchType<E>, getState: () => S, extraArgument: E) => R;

export type AppThunkType<R = Promise<void>, E = unknown> = ThunkAction<R, RootStateType, E, Action<string>>;

// export type AppThunkDispatchTyp3e<E = unknown> = (
// 	thunkAction: AppThunkAction<Promise<void>, RootStateType, E, Action<string>>
// ) => Promise<void>;

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

/**
 * Dispatch function for this application (AppState).
 * `E` describes the extra argument type given to the action thunk, e.g.
 * `(dispatch, getState, extraArgument) => {}`
 */
export type AppThunkDispatchType<E = unknown> = ThunkDispatch<RootStateType, E, Action<string>>;

/**
 * The type of a path to a specific type.
 */
type PathToType<Str extends string, T> = Str extends `${infer Start}/${infer Rest}`
	? { [P in Start as P]: PathToType<Rest, T> }
	: { [P in Str]: T };

/**
 * The type of multiple paths to specific types.
 * _T - The type to return.
 */
type MultiplePathsToType<Slices extends unknown[], _T = unknown> = Slices extends [infer First, ...infer Rest]
	? First extends { name: string; getInitialState: () => unknown }
		? PathToType<First['name'], ReturnType<First['getInitialState']>> & MultiplePathsToType<Rest>
		: Record<string, never>
	: Record<string, never>;

/**
 * The type of the root state for this application (AppState) with a specific slice.
 */
export type RootStateWithSliceType<SliceType extends { name: string; getInitialState: () => unknown }> =
	BaseRootStateType & PathToType<SliceType['name'], ReturnType<SliceType['getInitialState']>>;

export type RootStateType<
	T extends
		| string
		| { name: string; getInitialState: () => unknown }
		| Array<{ name: string; getInitialState: () => unknown }> = never,
	State = never
> = T extends string
	? ExtendedRootStateType<T, State>
	: T extends { name: string; getInitialState: () => unknown }
	? RootStateWithSliceType<T>
	: T extends Array<{ name: string; getInitialState: () => unknown }>
	? BaseRootStateType & MultiplePathsToType<T>
	: BaseRootStateType;

export type AsyncStateType<T> = {
	data: T | null;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error?: string | null;
};
