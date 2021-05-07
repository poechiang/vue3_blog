import { defineComponent } from "vue";

export default defineComponent((_, { slots }) => () => (
    <div
        class="md-viewer"
        innerHTML={slots?.default?.()?.[0]?.children as string}
    ></div>
));
