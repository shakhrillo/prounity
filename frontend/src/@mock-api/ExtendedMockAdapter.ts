import MockAdapter, { RequestHandler } from 'axios-mock-adapter';
import { AxiosRequestConfig } from 'axios';
/* eslint-disable */

export type ExtConfig = AxiosRequestConfig & {
	params: Record<string, string>;
}

type CustomReplyFunc = (
	config: ExtConfig
) => [number, any] | Promise<[number, any]>;

export type Params = Record<string, string>;

type matcherType = string | RegExp | undefined;

type RequestMatcherFunc = (matcher?: matcherType) => MockAdapter.RequestHandler;

class ExtendedMockAdapter extends MockAdapter {
	private RequestMatcherFunc(url: string | RegExp | undefined, requestType: string): RequestHandler {
		const transformedUrl = transformUrlIfNeeded(url);
		// @ts-ignore
		return createExtendedHandler(super[requestType](transformedUrl), transformedUrl, url);
	}

	onGet: RequestMatcherFunc = (url) => this.RequestMatcherFunc(url, 'onGet');

	onPost: RequestMatcherFunc = (url) => this.RequestMatcherFunc(url, 'onPost');

	onPut: RequestMatcherFunc = (url) => this.RequestMatcherFunc(url, 'onPut');

	onDelete: RequestMatcherFunc = (url) => this.RequestMatcherFunc(url, 'onDelete');

	onPatch: RequestMatcherFunc = (url) => this.RequestMatcherFunc(url, 'onPatch');
}

function transformUrlIfNeeded(url: matcherType): string | RegExp {
	if (typeof url === 'string' && url.includes(':')) {
		return convertUrlToRegex(url);
	}
	return url as string;
}

function convertUrlToRegex(url: string): RegExp {
	return new RegExp(
		`^${url
			.split('/')
			.map((segment) => {
				if (segment.startsWith(':')) {
					const paramName = segment.slice(1);
					return `(?<${paramName}>[^/]+)`;
				}
				return segment;
			})
			.join('/')}$`
	);
}

function createExtendedHandler(handler: RequestHandler, matcherUrl: string | RegExp, url: string): RequestHandler {
	const originalReply = handler.reply.bind(handler);

	// @ts-ignore
	handler.reply = (func: CustomReplyFunc) => {
		return originalReply((config) => {
			const params = extractParamsFromUrl(config.url, matcherUrl);

			// Assigning the extracted parameters to config.params
			config.params = {...config.params, ...params};

			return func(config as ExtConfig);
		});
	};
	return handler;
}

function extractParamsFromUrl(configUrl: string | undefined, matcherUrl: string | RegExp): Record<string, string> {
	if (typeof configUrl !== 'string' || !(matcherUrl instanceof RegExp || typeof matcherUrl === 'string')) {
		return {};
	}

	const params: Record<string, string> = {};

	if (matcherUrl instanceof RegExp) {
		const regexResult = matcherUrl.exec(configUrl);
		if (regexResult && regexResult.groups) {
			for (const key in regexResult.groups) {
				params[key] = regexResult.groups[key];
			}
		}
	} else {
		const matcherParts = matcherUrl.split('/');
		const urlParts = configUrl.split('/');
		for (let i = 0; i < matcherParts.length; i += 1) {
			if (matcherParts[i].startsWith(':')) {
				const key = matcherParts[i].slice(1);
				params[key] = urlParts[i] || '';
			}
		}
	}

	return params;
}

export default ExtendedMockAdapter;
