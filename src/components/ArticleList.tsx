import { get } from '@common/http';
import { loggerWithTags } from '@jeffchi/logger';

import * as fns from 'date-fns';
import { IArticle } from 'src/sources';
import { defineComponent, onBeforeMount, ref } from 'vue';

const { log } = loggerWithTags('article');
const queryArticles = (lastTimestamp?: number) => {
    log('starting query article list...');
    return get<IArticle[]>('/api/blog/articles', {
        order: 'desc',
        lastTimestamp: lastTimestamp,
        pageSize: 10,
    }).then((list) => {
        log('query article success...');
        return list.map(({ createdAt, modifyAt, ...rest }) => ({
            ...rest,
            createdAt: createdAt ? new Date(createdAt || '') : '',
            modifyAt: modifyAt ? new Date(modifyAt || '') : '',
        }));
    });
};
export const ArticleList = defineComponent({
    setup() {
        const data = ref<IArticle[]>([]);
        onBeforeMount(() => {
            queryArticles().then((list) => {
                data.value = list;
            });
        });
        return () => {
            return (
                <ul class={'art-list-wrap'}>
                    {data.value?.map((article) => (
                        <li class="art-list-item ">
                            <h3 class="art-list-item-title">{article.title}</h3>

                            <div class="created-at">{fns.format(article.createdAt as Date, 'MMM dd, yyyy HH:mm:ss')}</div>
                        </li>
                    ))}
                </ul>
            );
        };
    },
});
