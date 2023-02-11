import { defineComponent } from 'vue';
import { IconFont } from '../IconFont';
import { SearchProps, TSearchProps } from './props';
const Search = defineComponent((props: TSearchProps) => {
    const { width, height, roundCorner, style = {}, inputStyle, ...others } = props;

    const innerStyle = { ...inputStyle, width: `${width}px`, height: `${height}px` };

    if (roundCorner) {
        (style as any).borderRadius = `${(height as number) / 2}px`;
    }

    return () => (
        <span class={'search-wrap'} style={style}>
            <input type="search" style={innerStyle} {...others} />
            <IconFont type="search" />
        </span>
    );
});

Search.inheritAttrs = false;
Search.compatConfig = { MODE: 3 };
Search.props = SearchProps;
Search.name = 'Search';
export { Search };
