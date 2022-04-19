import { DraftAside, MdViewer, PageArticle, TagEditor } from '@/components';
import marked from '@/lib/marked';
import {
    postArticle,
    queryArticleById,
    queryCatagories,
    queryDrafts,
    queryTagsStatistics,
} from '@/lib/request';
import { deleteArticle } from '@/lib/request/index';
import { SearchOutlined } from '@ant-design/icons-vue';
import { AutoComplete, Button, Card, Input, Tag } from 'ant-design-vue';
import { debounce, findIndex, indexOf } from 'lodash';
import { defineComponent, onUnmounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const Post = defineComponent(() => {
    const artCache = sessionStorage.getItem('temp_art_data');
    const emptyArtData = {
        title: '',
        tags: [],
        catagory: '',
        content: '',
    };
    const catagories = ref([]);
    const existTagList = ref([]);
    const drafts = reactive({ list: [], loading: true });

    const router = useRouter();
    const route = useRoute();
    const article = reactive(
        (artCache ? JSON.parse(artCache) : emptyArtData) as ArticleData
    );
    const mkdContent = ref(marked(article.content));
    route.params.id &&
        queryArticleById(route.params.id as string).subscribe((item) => {
            article.title = item.title;
            article.tags.push(...item.tags);
            article.catagory = item.catagory;
            article.content = item.content;
            article.createdAt = new Date(item.createdAt);
            mkdContent.value = marked(item.content);
        });

    queryDrafts().subscribe((list) => {
        drafts.list.push(...list);
        drafts.loading = false;
    });
    const updateViewer = debounce((marky) => {
        mkdContent.value = marky;
    }, 400);
    queryTagsStatistics().subscribe((list) => {
        existTagList.value.push(
            ...list.map((item) => ({
                title: item.tag,
                count: item.count,
                checked: false,
            }))
        );
    });
    queryCatagories().subscribe((list) => {
        catagories.value.push(...(list || []).map((item) => ({ value: item })));
    });
    watch(
        article,
        (val) => {
            sessionStorage.setItem('temp_art_data', JSON.stringify(val));
            updateViewer(marked(val.content));
        },
        { deep: true }
    );
    onUnmounted(() => sessionStorage.removeItem('temp_art_data'));
    const handlePost = (isDraft?: boolean) => {
        article.draft = !!isDraft;
        postArticle(article).subscribe((resp) => {
            sessionStorage.removeItem('temp_art_data');
            router.push(`/articles/${isDraft ? article._id : resp._id}`);
        });
    };
    return () => (
        <PageArticle
            id="post"
            class="page-wrapper"
            header={false}
            aside={
                <DraftAside
                    width={'360px'}
                    list={drafts.list}
                    loading={drafts.loading}
                    open={(draft) => {
                        article.title = draft.title;
                        article.catagory = draft.catagory;
                        article._id = draft._id;
                        article.draft = true;
                        article.tags = draft.tags;
                        article.content = draft.content;
                    }}
                    remove={(id) =>
                        deleteArticle(id).subscribe(() => {
                            const index = findIndex(drafts.list, (item) => {
                                return item._id === id;
                            });
                            drafts.list.splice(index, 1);
                        })
                    }
                />
            }
        >
            <Card style="width: 100%;margin-top:24px">
                <div class="flex-row mb-12">
                    <AutoComplete
                        class="cata-searcher flex-1 mr-8"
                        style={{ width: '4rem' }}
                        value={article.catagory}
                        placeholder="输入或选择主题"
                        onSelect={(e) => (article.catagory = e.target.value)}
                        onChange={(value) => (article.catagory = value)}
                        options={catagories.value}
                        suffixIcon={<SearchOutlined />}
                    ></AutoComplete>
                    <Input
                        class="art-title flex-2 mr-8"
                        placeholder="文档的标题"
                        value={article.title}
                        onChange={({ target: { value } }) =>
                            (article.title = value)
                        }
                    />
                    {route.params.id ? null : (
                        <Button
                            type="link"
                            style={{ borderRadius: '2px 0 0 2px' }}
                            onClick={() => handlePost(true)}
                            disabled={!article.title || !article.content}
                        >
                            暂存
                        </Button>
                    )}
                    <Button
                        type="primary"
                        onClick={() => handlePost()}
                        style={{ borderRadius: '0 2px 2px 0' }}
                        disabled={!article.title || !article.content}
                    >
                        发布
                    </Button>
                </div>
                <div class="flex-row mb-4">
                    <TagEditor
                        tags={article.tags}
                        added={(items) => {
                            article.tags = [...article.tags, ...items].filter(
                                (tag) => !!tag
                            );
                            // 检查建议列表，选中匹配标签
                            existTagList.value.forEach((tag) => {
                                if (indexOf(items, tag.title) >= 0) {
                                    tag.checked = true;
                                    tag.count += 1;
                                }
                            });
                        }}
                        removed={(item: string, index: number) => {
                            article.tags.splice(index, 1);
                            existTagList.value.forEach((tag) => {
                                if (item === tag.title) {
                                    tag.checked = false;
                                    tag.count -= 1;
                                }
                            });
                        }}
                    />
                </div>
                <div class="flex-row --flex-wrap mb-12">
                    {existTagList.value.map((item) => (
                        <Tag.CheckableTag
                            checked={
                                item.checked ||
                                indexOf(article.tags, item.title) >= 0
                            }
                            onChange={(value) => {
                                console.log(value);
                                item.checked = value;
                                // 根据选中状态添加/移除标签
                                if (value) {
                                    article.tags.push(item.title);
                                    item.count += 1;
                                } else {
                                    const index = indexOf(
                                        article.tags,
                                        item.title
                                    );
                                    console.log(index);
                                    article.tags.splice(index, 1);
                                    item.count -= 1;
                                }
                            }}
                            key={item.title}
                        >
                            {`${item.title} (${
                                item.count +
                                (indexOf(article.tags, item.title) >= 0 ? 1 : 0)
                            })`}
                        </Tag.CheckableTag>
                    ))}
                </div>
                <div class="pos-relative of-hidden-x of-auto-y">
                    <Input.TextArea
                        class="art-content"
                        autoSize={{ minRows: 20 }}
                        placeholder="说点什么吧？"
                        value={article.content}
                        onChange={({ target: { value } }) => {
                            article.content = value;
                        }}
                    />
                    <div class="viewer-wrapper">
                        <MdViewer>{mkdContent.value}</MdViewer>
                    </div>
                </div>
            </Card>
        </PageArticle>
    );
});
export default Post;
