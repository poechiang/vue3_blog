import { FunctionalComponent } from 'vue';
import { useRouter } from 'vue-router';

export const NotFound: FunctionalComponent = () => {
    const router = useRouter();

    return (
        <>
            <h1>404.</h1>
            <p>page not found</p>

            <p>The requested url {router.currentRoute.value} is invalid</p>
        </>
    );
};
