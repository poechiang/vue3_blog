import HelloWorld from '@components/HelloWorld';
import { FunctionalComponent } from 'vue';
export const About: FunctionalComponent = () => (
    <>
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
        </div>
        <HelloWorld msg="Vite + Vue" />
    </>
);
