import { Anchor, PageHeader } from "ant-design-vue";
import $ from "jquery";
import { forEach, last, toLower } from "lodash";
import { defineComponent, PropType, ref } from "vue";
import { useRouter } from "vue-router";

const getCurrTitle = (list: any[], level) => {
    const child = last(list);
    if (!child) {
        return null;
    }
    if (child.level >= level) {
        return null;
    } else {
        return getCurrTitle(child.children, level) || child;
    }
};
const buildAnchorList = (list) => {
    return list?.length
        ? list.map((item) => {
            const classNames = [
                item?.children?.length ? "anchor-link-expandable" : "",
            ];
            if (item.expanded) {
                classNames.push("expanded");
            }
            return (
                <Anchor.Link
                    class={classNames.filter((item) => !!item).join(" ")}
                    href={`#${item.anchor}`}
                    title={item.title}
                    key={item.id}
                >
                    {() => buildAnchorList(item?.children || [])}
                </Anchor.Link>
            );
        })
        : [];
};
const parseArticle = (art: string) => {
    const list = [];
    $(`<div>${art}</div>`)
    // .find('[role="head-anchor"]')
        .find("h1,h2,h3,h4,h5,h6")
        .each((_, item) => {
            const $item = $(item);
            list.push({
                title: $item.text().trim(),
                level: parseInt(toLower(item.tagName).replace("h", "")),
                anchor: $item.attr("id"),
            });
        });
    return list;
};

const OutlineAside = defineComponent({
    props: {
        width: [Number, String] as PropType<string | number>,
        article: { type: String as PropType<string>, default: "" },
    },
    setup: (props) => {
        const list = ref([]);
        const router = useRouter();
        return () => {
            const headingList = parseArticle(props.article);
            const headingTree = [];
            forEach(headingList, (item) => {
                const curr = getCurrTitle(headingTree, item.level);
                if (curr) {
                    curr.children = [...(curr.children || []), item];
                } else {
                    headingTree.push(item);
                }
            });

            list.value.push(...headingTree);
            return (
                <aside class="nav-sider" style={{ width: props.width || "360px" }}>
                    <PageHeader
                        title="目录大纲"
                        onBack={() => router.back()}
                        style={{ padding: 0 }}
                    >
                        <Anchor
                            getContainer={() =>
                                document.querySelector(".anchor-scoller-wrapper")
                            }
                            getCurrentAnchor={() => decodeURI(window.location.hash)}
                        >
                            {() => buildAnchorList(list.value)}
                        </Anchor>
                    </PageHeader>
                </aside>
            );
        };
    },
});

export default OutlineAside;
