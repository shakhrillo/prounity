import { useCallback } from 'react';
import debounce from 'lodash/debounce';

/**
 * useDebounce hook
 *
 * @param callback - Function to debounce.
 * @param delay - The number of milliseconds to delay.
 * @returns - A new debounced function.
 */
function useDebounce<T extends (...args: never[]) => void>(
	callback: T,
	delay: number
): (...args: Parameters<T>) => void {
	// Using useCallback to return a memorized version of the debounced function
	return useCallback(
		debounce((...args: Parameters<T>) => callback(...args), delay),
		[delay, callback]
	);
}

export default useDebounce;
