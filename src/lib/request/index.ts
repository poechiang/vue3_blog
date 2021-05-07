import { merge } from 'lodash';
import { from, Observable } from 'rxjs';
import { del, get, post } from './core';

export const queryDrafts = (query?: Query): Observable<ArticleData[]> =>
    from<Promise<ArticleData[]>>(
        new Promise((resolve, reject) => {
            get('blog/articles', merge(query || {}, { draft: true }))
                .then((resp: ResponseBody<ArticleData[]>) => {
                    if (resp.code !== 200) {
                        return reject(resp.errMsg || resp.msg);
                    }
                    return resolve(resp.result);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    );
export const queryArticleById = (id: string): Observable<ArticleData> =>
    from<Promise<ArticleData>>(
        new Promise((resolve, reject) => {
            get(`blog/articles/${id}`)
                .then((resp: ResponseBody<ArticleData>) => {
                    if (resp.code !== 200) {
                        return reject(resp.errMsg || resp.msg);
                    }
                    return resolve(resp.result);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    );
export const queryArticles = (query?: Query): Observable<ArticleData[]> =>
    from<Promise<ArticleData[]>>(
        new Promise((resolve, reject) => {
            get('blog/articles', merge(query || {}, { draft: false }))
                .then((resp: ResponseBody<ArticleData[]>) => {
                    if (resp.code !== 200) {
                        return reject(resp.errMsg || resp.msg);
                    }
                    return resolve(resp.result);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    );

export const postArticle = (article: ArticleData): Observable<ArticleData> =>
    from<Promise<ArticleData>>(
        new Promise((resolve, reject) => {
            post(`blog/articles/${article._id || ''}`, article)
                .then((resp: ResponseBody<ArticleData>) => {
                    if (resp.code !== 200) {
                        return reject(resp.errMsg || resp.msg);
                    }
                    return resolve(resp.result);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    );
export const deleteArticle = (id: string): Observable<any> =>
    from(
        new Promise((resolve, reject) => {
            del('blog/articles', id)
                .then((resp: ResponseBody) => {
                    if (resp.code !== 200) {
                        return reject(resp.errMsg || resp.msg);
                    }
                    return resolve(resp.result);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    );
export const queryTagsStatistics = (): Observable<TagInfo> =>
    from<Promise<TagInfo>>(
        new Promise((resolve, reject) => {
            get('blog/tags/statistics').then((resp: ResponseBody<TagInfo>) => {
                if (resp.code !== 200) {
                    return reject(resp.errMsg || resp.msg);
                }
                return resolve(resp.result);
            });
        })
    );
export const queryCatagories = (): Observable<string[]> =>
    from<Promise<string[]>>(
        new Promise((resolve, reject) => {
            get('blog/catagories').then((resp: ResponseBody<string[]>) => {
                if (resp.code !== 200) {
                    return reject(resp.errMsg || resp.msg);
                }
                return resolve(resp.result);
            });
        })
    );
