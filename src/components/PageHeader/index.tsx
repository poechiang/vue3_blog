import { ThemeSwitch } from '@components/Switch';
import { FunctionalComponent } from 'vue';
export const PageHeader: FunctionalComponent = () => (
    <header class={'page-hd-wrap flexable --line-center'}>
        <h1>Jeffrey · Chiang</h1>
        <span class="flex-auto"></span>
        <ThemeSwitch />
    </header>
);
