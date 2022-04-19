import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent(() => {
    const store = useStore();
    const globalSearcherFocused = computed(
        (): boolean => store.state.bannerBlur
    );

    return () => {
        const classes = ['banner-wrapper'];

        if (globalSearcherFocused.value) {
            classes.push('--focused');
        }
        return (
            <>
                <div class={classes.join(' ')} />
                <router-view />
            </>
        );
    };
});
