import { get } from '@common/http';
import { withTags } from '@jeffchi/logger';
import * as fns from 'date-fns';
import hljs, { Language } from 'highlight.js';

import { marked } from 'marked';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

const { log } = withTags('art-view');
const languages = hljs.listLanguages();
hljs.safeMode();
languages.forEach((lang) => {
    hljs.registerLanguage(lang, (hljs) => hljs.getLanguage(lang) as Language);
});

hljs.registerAliases('js', { languageName: 'javascript' });
hljs.registerAliases('bask', { languageName: 'bash' });
hljs.initHighlighting();
marked.setOptions({
    langPrefix: 'hljs language-',
    highlight: (code, lang) => hljs.highlight(code, { language: lang || 'bash' }).value,
});

const queryArticle = (aid: string) => {
    log(`starting query article for id:${aid}...`);
    return get<IArticle>(`/api/blog/articles/${aid}`).then(({ createdAt, modifyAt, ...rest }) => {
        log('query article success...');
        return {
            ...rest,
            id: rest._id,
            createdAt: createdAt ? new Date(createdAt || '') : '',
            modifyAt: modifyAt ? new Date(modifyAt || '') : '',
        };
    });
};
export const View = defineComponent(async () => {
    const article = ref<IArticle>();
    const route = useRoute();

    queryArticle(route.params.id as string).then((a) => {
        article.value = a;
    });
    return () =>
        !article.value ? (
            <div>Loading...</div>
        ) : (
            <>
                <header class={'art-view-hd'}>
                    <h1 class={'art-title'}> {article.value.title}</h1>
                </header>
                <aside class={'art-post-date'}>{fns.format(article.value.createdAt as Date, 'MMM dd, yyyy HH:mm:ss')}</aside>
                <article class={'art-view-bd'} innerHTML={marked(article.value.content || '')} />
            </>
        );
});
