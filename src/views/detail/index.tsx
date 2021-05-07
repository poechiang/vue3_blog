import { MdViewer, OutlineAside, PageArticle } from "@/components";
import marked from "@/lib/marked";
import { queryArticleById } from "@/lib/request";
import {
    BookOutlined,
    DeleteOutlined,
    EditOutlined,
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    WeiboOutlined,
    ZhihuOutlined,
} from "@ant-design/icons-vue";
import { BackTop, Button, Tag } from "ant-design-vue";
import { format } from "date-fns";
import { defineComponent, reactive, ref } from "vue";
import { useRoute } from "vue-router";
const Detail = defineComponent(() => {
    const article = reactive({
        title: "",
        tags: [],
        catagory: "",
        content: "",
    } as ArticleData);
    const mkdContent = ref("");
    const outlines = ref([]);
    const route = useRoute();

    queryArticleById(route.params.id as string).subscribe((item) => {
        article.title = item.title;
        article.tags.push(...item.tags);
        article.catagory = item.catagory;
        article.content = item.content;
        article.createdAt = new Date(item.createdAt);
        mkdContent.value = marked(item.content);
        outlines.value.push(...item.content.match(/^#+\s.*/gm));
    });

    return () => (
        <PageArticle
            id="detail"
            class="page-wrapper"
            header={false}
            aside={<OutlineAside article={mkdContent.value} />}
        >
            <header class="m-24">
                {article.catagory ? (
                    <aside style={{ color: "#656565" }}>
                        <BookOutlined class="mr-4" />
                        {article.catagory}
                        <span class="f-right">
                            <Button class="mr-8" type="primary" size="small">
                                <EditOutlined />
                编辑
                            </Button>
                            <Button type="danger" size="small">
                                <DeleteOutlined />
                删除
                            </Button>
                        </span>
                    </aside>
                ) : null}
                <h1 class="art-title" style={{ fontSize: "2em", fontWeight: "normal" }}>
                    {article.title}
                </h1>
                <div class="flex-row " style={{ fontSize: ".14rem" }}>
                    <span>
                        {article.tags.map((item: string) => (
                            <Tag color="green" key={item}>{`${item}`}</Tag>
                        ))}
                    </span>
                    <span class="flex-1"></span>
                    {article.createdAt ? (
                        <span>{format(article.createdAt, "MMM dd, yyyy HH:mm:ss")}</span>
                    ) : null}
                </div>
                <div class="shares mt-48 hor-center">
                    <a>
                        <WeiboOutlined />
                    </a>
                    <a class="ml-8">
                        <TwitterOutlined />
                    </a>
                    <a class="ml-8">
                        <InstagramOutlined />
                    </a>
                    <a class="ml-8">
                        <ZhihuOutlined />
                    </a>
                    <a class="ml-8">
                        <FacebookOutlined />
                    </a>
                </div>
            </header>
            <MdViewer>{mkdContent.value}</MdViewer>{" "}
            <BackTop
                target={() => document.querySelector(".anchor-scoller-wrapper")}
            />
        </PageArticle>
    );
});
export default Detail;
