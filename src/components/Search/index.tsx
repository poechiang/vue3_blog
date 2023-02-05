import { FunctionalComponent, InputHTMLAttributes } from 'vue';
import { IconFont } from '../IconFont';

export interface SearchProps extends InputHTMLAttributes {
    defaultValue?: string;
}
export const Search: FunctionalComponent = (props: SearchProps) => (
    <span class={'search-wrap'}>
        <input type="search" />
        <IconFont type="search" />
    </span>
);
