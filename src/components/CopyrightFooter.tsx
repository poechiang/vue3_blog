import { format } from 'date-fns';
import { defineComponent } from 'vue';

const CopyrightFooter = defineComponent(() => {
    const year = format(Date.now(), 'yyyy');
    return () => (
        <footer class={'copy-wrapper flex-row'}>
            <router-link class="mr-8" to="/">
                首页
            </router-link>
            <router-link class="mr-8" to="/about">
                关于
            </router-link>
            <span class="flex-1"></span>
            <span>Jeff &copy; {year}</span>
        </footer>
    );
});

export default CopyrightFooter;
