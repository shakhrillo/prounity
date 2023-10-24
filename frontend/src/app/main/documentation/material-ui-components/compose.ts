// eslint-disable-next-line no-unused-vars
type Func<A, B> = (arg: A) => B;

export default function compose<A, B, C>(f: Func<B, C>, g: Func<A, B>): Func<A, C> {
	// eslint-disable-next-line func-names
	return function (x: A): C {
		return f(g(x));
	};
}
