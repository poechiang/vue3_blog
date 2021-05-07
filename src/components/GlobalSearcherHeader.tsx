import { AutoComplete, Input } from "ant-design-vue";
import { defineComponent, Fragment, h as createElement } from "vue";
import { useStore } from "vuex";

const React = { createElement, Fragment };

const GlobalSearcherHeader = defineComponent(
    ({ options, defaultValue, value, placeholder }: any, { emit }) => {
        const store = useStore();
        const handleSelect = (value: string) => emit("select", value);
        const handleSearch = (value: string) => emit("search", value);
        const handleFocus = () => store.commit("filterBanner");
        const handleBlur = () => store.commit("cancelFilterBanner");
        return () => (
            <header class="global-searcher-wrapper">
                <AutoComplete
                    class="global-searcher"
                    value={value || defaultValue}
                    size="large"
                    option-label-prop="title"
                    onSearch={handleSearch}
                    onSelect={handleSelect}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    <Input.Search
                        size="large"
                        placeholder={placeholder || "标题、标签、关键字"}
                    />
                    {{
                        options: () =>
                            options?.map(({ category }) => (
                                <AutoComplete.Option key={category} title={category} />
                            )),
                    }}
                </AutoComplete>
            </header>
        );
    }
);
export default GlobalSearcherHeader;
