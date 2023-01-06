import { get } from '@common/http';
import * as fns from 'date-fns';
import { defineComponent, onBeforeMount, ref } from 'vue';

const queryArticles = (lastTimestamp?: number) => {
    return get<IArticle[]>('/api/blog/articles', {
        order: 'desc',
        lastTimestamp: lastTimestamp,
        pageSize: 10,
    }).then((list) =>
        list.map(({ createdAt, modifyAt, ...rest }) => ({
            ...rest,
            createdAt: createdAt ? new Date(createdAt || '') : '',
            modifyAt: modifyAt ? new Date(modifyAt || '') : '',
        })),
    );
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
                <>
                    {data.value?.map((article) => (
                        <dl class="art-list-item">
                            <dt class="flexable --cross-center">
                                <span class="art-list-item-title">{article.title}</span>
                                <span class="flex-auto"></span>

                                <span class="created-at">{fns.format(article.createdAt as Date, 'MMM dd, yyyy HH:mm:ss')}</span>
                            </dt>
                            <dd class="art-list-item-content">{article.content?.substring(0, 200)}</dd>
                        </dl>
                    ))}
                </>
            );
        };
    },
});
