import {
    DeleteOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons-vue';
import { Button, Input, List, Modal, PageHeader } from 'ant-design-vue';
import { createVNode, defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
const DraftAside = defineComponent({
    props: {
        width: [Number, String] as PropType<string | number>,
        loading: Boolean,
        list: (Array as unknown) as PropType<any[]>,
        remove: (Function as unknown) as PropType<(_args: string) => void>,
        open: (Function as unknown) as PropType<(_args: ArticleData) => void>,
    },
    setup: (props) => {
        const router = useRouter();
        return () => (
            <aside class="nav-sider" style={{ width: props.width }}>
                <PageHeader
                    title="草稿箱"
                    extra={
                        <Input.Search
                            placeholder={'草稿标题'}
                            style={{ width: '208px' }}
                        />
                    }
                    onBack={() => router.back()}
                    style={{ padding: 0 }}
                >
                    <List
                        dataSource={props.list}
                        loading={props.loading}
                        style={{
                            minHeight: '100px',
                            paddingTop: props.loading ? '50px' : 0,
                        }}
                        renderItem={({ item }) => (
                            <List.Item
                                class="hor-left"
                                actions={[
                                    <Button
                                        size="small"
                                        type="danger"
                                        ghost
                                        class="p-0"
                                        onClick={() => {
                                            Modal.confirm({
                                                title: '是否要删除该草稿？',
                                                icon: createVNode(
                                                    ExclamationCircleOutlined
                                                ),
                                                content:
                                                    '操作不可恢复，请慎重操作！',
                                                okText: '删除',
                                                okType: 'danger',
                                                cancelText: '暂时不',
                                                onOk() {
                                                    props.remove(item._id);
                                                },
                                            });
                                        }}
                                        style={{
                                            border: 'none',
                                            boxShadow: 'none',
                                        }}
                                    >
                                        <DeleteOutlined />
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta
                                    description={item.catagory}
                                    title={
                                        <a onClick={() => props.open(item)}>
                                            {item.title}
                                        </a>
                                    }
                                ></List.Item.Meta>
                            </List.Item>
                        )}
                    />
                </PageHeader>
            </aside>
        );
    },
});

export default DraftAside;
