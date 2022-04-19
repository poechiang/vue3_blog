import { isString, merge } from 'lodash';

const domain = 'http://localhost:9999';
const parseUrl = (url: string) => [domain, ...url.split('/')].join('/');
const toQueryString = (query) => {
    if (!query) return '';
    if (isString(query)) return '?' + query;
    return (
        '?' +
        Object.entries(query)
            .map(([k, v]) => `${k}=${v}`)
            .join('&')
    );
};
export const get = <T = any>(
    url: string,
    query?: Object,
    options?: RequestInit
): Promise<ResponseBody<T>> =>
        fetch(
            parseUrl(url) + toQueryString(query || null),
            merge(options || ({} as any), {
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-requested-with': 'XMLHttpRequest',
                }),
                mode: 'cors',
                method: 'GET',
            })
        ).then((resp) => resp.json());

export const post = <T = any>(
    url: string,
    data: Object,
    options?: RequestInit
): Promise<ResponseBody<T>> =>
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
            })
        ).then((resp) => resp.json());

export const del = <T = any>(
    url: string,
    id: string,
    options?: RequestInit
): Promise<ResponseBody<T>> =>
        fetch(
            parseUrl(url) + '/' + id,
            merge(options || ({} as any), {
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-requested-with': 'XMLHttpRequest',
                }),
                mode: 'cors',
                method: 'DELETE',
            })
        ).then((resp) => resp.json());
