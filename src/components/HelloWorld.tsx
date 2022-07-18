import { FunctionalComponent, ref } from 'vue';

const count = ref(0);
const incream = () => (count.value += 1);

export interface IHelloWorldProps {
    msg: string;
}
const HelloWorld: FunctionalComponent<IHelloWorldProps> = (props) => (
    <>
        <h1>
            {props.msg} + {count.value}
        </h1>

        <div class="card">
            <button type="button" onClick={incream}>
                count is {count.value}
            </button>
            <p>
                Edit
                <code>components/HelloWorld.vue</code> to test HMR
            </p>
        </div>

        <p>
            Check out
            <a
                href="https://vuejs.org/guide/quick-start.html#local"
                target="_blank"
            >
                create-vue
            </a>
            , the official Vue + Vite starter
        </p>
        <p>
            Install
            <a href="https://github.com/johnsoncodehk/volar" target="_blank">
                Volar
            </a>
            in your IDE for a better DX
        </p>
        <p class="read-the-docs">
            Click on the Vite and Vue logos to learn more
        </p>
    </>
);
export default HelloWorld;
