import { isString, isUndefined, merge, pickBy } from 'lodash';
import { Loose } from 'src/sources';
import { snake } from './utils';

const parseUrl = (url: string) => [...url.split('/')].join('/');
const toQueryString = (query: Loose) => {
    if (!query) return '';
    if (isString(query)) return '?' + query;
    const queryObj = pickBy(query, (v) => !isUndefined(v));
    const queryStr = Object.entries(queryObj)
        .map(([k, v]) => `${snake(k)}=${v}`)
        .join('&');

    return `?${queryStr}`;
};
export const get = <T = any>(url: string, query?: Loose, options?: RequestInit): Promise<T> =>
    fetch(
        parseUrl(url) + toQueryString(query || null),
        merge(options || ({} as any), {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-requested-with': 'XMLHttpRequest',
            }),
            mode: 'cors',
            method: 'GET',
        }),
    ).then((resp) => resp.json());

export const post = <T = any>(url: string, data: Object, options?: RequestInit): Promise<IResponse<T>> =>
    fetch(
        parseUrl(url),
        merge(options || ({} as any), {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-requested-with': 'XMLHttpRequest',
            }),
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(data),
        }),
    ).then((resp) => resp.json());

export const del = <T = any>(url: string, id: string, options?: RequestInit): Promise<IResponse<T>> =>
    fetch(
        parseUrl(url) + '/' + id,
        merge(options || ({} as any), {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-requested-with': 'XMLHttpRequest',
            }),
            mode: 'cors',
            method: 'DELETE',
        }),
    ).then((resp) => resp.json());
