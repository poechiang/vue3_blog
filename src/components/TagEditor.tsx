import { Input, Tag } from 'ant-design-vue';
import { last } from 'lodash';
import { defineComponent, PropType, ref } from 'vue';

const TagEditor = defineComponent({
    props: {
        tags: Array as PropType<string[]>,
        added: (Function as unknown) as PropType<(_: string[]) => void>,
        removed: (Function as unknown) as PropType<
            (_item: string, _index: number) => void
        >,
    },
    setup: (props) => {
        const newTag = ref('');
        const handleInput = (e) => (newTag.value = e.target.value);
        const handleTagsChanged = (e) => {
            if (e.keyCode === 13 && newTag.value) {
                const splitter = e.altKey ? /,/g : /,|\s/g;
                props.added?.(newTag.value.split(splitter));
                // emit("added", ["asdfsdf"]);
                newTag.value = '';
            } else if (
                e.keyCode === 8 &&
                props?.tags?.length &&
                !newTag.value
            ) {
                //删除最后一个元素
                props.removed?.(last(props.tags), props?.tags?.length - 1);
            }
        };
        return () => (
            <Input
                class="flex-item"
                placeholder="文章标签，以空格分隔，回车确认"
                value={newTag.value}
                prefix={props.tags?.map((item, index: number) => (
                    <Tag
                        closable
                        onClose={() => props.removed?.(item, index)}
                        key={item as string}
                    >
                        {'' + item}
                    </Tag>
                ))}
                suffix={props.tags?.length + '/9'}
                onChange={handleInput}
                onKeydown={handleTagsChanged}
            />
        );
    },
});

export default TagEditor;
