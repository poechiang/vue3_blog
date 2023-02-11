import { CSSProperties, ExtractPropTypes, PropType } from 'vue';

export const SearchProps = {
    defaultValue: String,
    roundCorner: Boolean,
    placeholder: String,
    width: Number,
    height: Number,
    radius: Number,
    inputStyle: Object as PropType<CSSProperties>,
    style: Object as PropType<CSSProperties>,
    onSearch: Function as PropType<(args: boolean) => void>,
};

export type TSearchProps = Partial<ExtractPropTypes<typeof SearchProps>>;
