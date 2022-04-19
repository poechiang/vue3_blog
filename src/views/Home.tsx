import { PageArticle } from '@/components';
import marked from '@/lib/marked';
import { queryArticles } from '@/lib/request';
import striptags from '@/lib/striptags';
import {
    ClockCircleOutlined,
    DeleteOutlined,
    HeartOutlined,
    LinkOutlined,
    MessageOutlined,
    PushpinOutlined,
    ReadOutlined,
} from '@ant-design/icons-vue';
import { Card, Empty } from 'ant-design-vue';
import { format } from 'date-fns';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent(() => {
    const router = useRouter();
    const articles = ref([] as ArticleData[]);
    queryArticles().subscribe((data) => {
        articles.value = data;
    });
    return () => (
        <PageArticle id="home">
            {articles.value.length ? (
                <div class="art-list" style={{ marginTop: '200px' }}>
                    {articles.value.map((item) => {
                        return (
                            <Card class="art-item mb-24" hoverable>
                                <Card.Meta
                                    title={
                                        <span class="art-title-wrapper">
                                            <a class="art-pin">
                                                <PushpinOutlined />
                                            </a>
                                            <a class="art-cata">
                                                {item.catagory}
                                            </a>
                                            <a
                                                class="art-title"
                                                onClick={() =>
                                                    router.push(
                                                        `/articles/${item._id}`
                                                    )
                                                }
                                            >
                                                {item.title}
                                            </a>
                                            <a class="art-copy">
                                                <LinkOutlined class="ml-4" />
                                            </a>
                                        </span>
                                    }
                                    description={striptags(
                                        marked(item.content),
                                        {
                                            removeTags: ['code', 'pre'],
                                        }
                                    ).substring(0, 200)}
                                />
                                <ul class="art-footer">
                                    <li>
                                        <ReadOutlined />{' '}
                                        {item.stats?.readings || 0}
                                    </li>
                                    <li>
                                        <MessageOutlined />{' '}
                                        {item.stats?.comments || 0}
                                    </li>
                                    <li>
                                        <HeartOutlined />{' '}
                                        {item.stats?.favorites || 0}
                                    </li>
                                    <li>
                                        <ClockCircleOutlined />{' '}
                                        {format(
                                            new Date(item.createdAt),
                                            'MMM dd, yyyy HH:mm:ss'
                                        )}
                                    </li>
                                    <li class="flex-1"></li>
                                    <li>
                                        <a
                                            href="javascript:;"
                                            class="link danger"
                                        >
                                            <DeleteOutlined />
                                        </a>
                                    </li>
                                </ul>
                            </Card>
                        );
                    })}
                </div>
            ) : (
                <Card style={{ marginTop: '200px', padding: '100px 0' }}>
                    <Empty />
                </Card>
            )}
        </PageArticle>
    );
});
