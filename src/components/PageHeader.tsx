import { FunctionalComponent } from 'vue';
import { Searcher } from './Searcher';

export const PageHeader: FunctionalComponent = () => {
    return (
        <header class={'page-hd'}>
            <h1>JEFFERY</h1>
            <Searcher />
        </header>
    );
};
