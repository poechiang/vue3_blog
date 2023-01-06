import { PageHeader } from '@components/PageHeader';
import { FunctionalComponent } from 'vue';
const App: FunctionalComponent = () => (
    <>
        <PageHeader />
        <router-view />
    </>
);
export default App;
