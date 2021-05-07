import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent(() => () => {
    const classes = ["banner-wrapper"];

    const store = useStore();

    const GlobalSearcherFocused = computed(() => {
        return store.state.bannerBlur;
    });
    if (GlobalSearcherFocused) {
        classes.push("--focused");
    }
    return (
        <>
            <div class={classes.join(" ")} />
            <router-view />
        </>
    );
});
