import { get } from '@common/http';
import { IconFont } from '@components/IconFont';
import { Search } from '@components/Search';
import logo from '@images/IMG_1862.jpg';
import { withTags } from '@jeffchi/logger';
import * as fns from 'date-fns';
import { defineComponent, ref } from 'vue';

const { log } = withTags('article');

const queryArticles = (lastTimestamp?: number) => {
    log('starting query article list...');
    return get<IArticle[]>('/api/blog/articles', {
        order: 'desc',
        lastTimestamp: lastTimestamp,
        pageSize: 10,
    }).then((list) => {
        log('query article success...', list);
        return list.map(({ createdAt, modifyAt, ...rest }) => ({
            ...rest,
            id: rest._id,
            createdAt: createdAt ? new Date(createdAt || '') : '',
            modifyAt: modifyAt ? new Date(modifyAt || '') : '',
        }));
    });
};
export const Articles = defineComponent(() => {
    const data = ref<IArticle[]>([]);
    queryArticles().then((list) => {
        data.value = list;
    });
    return () => (
        <>
            <aside class={'author-info flexable --line-center'}>
                <img src={logo} alt="用户头像" class="user-photo mr-8" />
                <span class="flex-auto">
                    Everything is inferior but reading
                    <br /> A millennial coder
                </span>
                <span class={'contacts'}>
                    <a href="javascript:;" title="Github">
                        <IconFont type="github3" />
                    </a>
                    <a href="javascript:;" title="Instagram">
                        <IconFont type="ins" />
                    </a>
                    <a href="javascript:;" title="Twitter">
                        <IconFont type="twitter3" />
                    </a>
                    <a href="javascript:;" title="Sina Weibo">
                        <IconFont type="weibo3" />
                    </a>
                </span>
            </aside>
            <Search
                placeholder="标题、内容、标签、关键字"
                width={260}
                height={32}
                roundCorner={true}
                style={{ display: 'block', margin: '0 auto' }}
                inputStyle={{ padding: '2px 24px 2px 14px' }}
            />
            <section class={'art-list-wrap'}>
                {data.value?.map((article) => (
                    <li class="art-list-item ">
                        <h3 class="art-list-item-title">
                            <a href={`articles/${article.id}`}>{article.title}</a>
                        </h3>

                        <div class="created-at">{fns.format(article.createdAt as Date, 'MMM dd, yyyy HH:mm:ss')}</div>
                    </li>
                ))}
            </section>
        </>
    );
});
