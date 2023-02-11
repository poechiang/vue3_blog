import { PageFooter } from '@components/PageFooter';
import { PageHeader } from '@components/PageHeader';
import { FunctionalComponent, Suspense } from 'vue';
const App: FunctionalComponent = () => (
    <>
        <PageHeader />
        <Suspense>
            <router-view />
        </Suspense>
        <PageFooter />
    </>
);
export default App;
