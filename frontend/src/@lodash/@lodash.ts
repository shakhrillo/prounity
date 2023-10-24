/* eslint-disable  */
import _ from 'lodash';

declare module 'lodash' {
	interface LoDashStatic {
		 /**
		 * A function that sets a value at a given path in an object.
		 */
		setIn: (state: any, name: string, value: any) => any;
	}
	interface LoDashExplicitWrapper<TValue> {
		 /**
		 * A function that sets a value at a given path in an object.
		 */
		setIn: (name: string, value: any) => LoDashExplicitWrapper<any>;
	}
}

_.mixin({
	/**
   * A function that sets a value at a given path in an object.
   */
	setIn: (state, name, value) => _.setWith(_.clone(state), name, value, _.clone)
});

export default _;
