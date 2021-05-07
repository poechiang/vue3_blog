import { createStore } from "vuex";

export default createStore({
    state: {
        bannerBlur: false,
    },
    mutations: {
        filterBanner: (state) => {
            state.bannerBlur = true;
        },
        cancelFilterBanner: (state) => {
            state.bannerBlur = false;
        },
    },
    actions: {},
    modules: {},
});
