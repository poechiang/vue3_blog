import { FunctionalComponent } from 'vue';
import { useRouter } from 'vue-router';
import { ArticleList } from '../components/ArticleList';

export const Articles: FunctionalComponent = () => {
    const router = useRouter();

    return (
        <section>
            <ArticleList />
        </section>
    );
};
