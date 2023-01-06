import { FunctionalComponent, InputHTMLAttributes } from 'vue';
import { SearchIcon } from './icon';
export interface SearcherProps extends InputHTMLAttributes {
    defaultValue?: string;
}
export const Searcher: FunctionalComponent = (props: SearcherProps) => (
    <div class={'searcher-wrap'}>
        <input type="search" placeholder={props.placeholder} />
        <SearchIcon />
    </div>
);
