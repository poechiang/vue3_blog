import { defineComponent } from "vue";
import { CSS_BORDER_BOX } from "./styles";

const styles = {
    hello: {
        backgroundColor: "#fffd",
        padding: "48px",
        boxSizing: CSS_BORDER_BOX as any,
        borderRadius: "12px",
        marginTop: "48px",
    },
    h3: {
        margin: "0.4rem 0 0.2rem",
    },
};

const data = [
    {
        title: "Installed CLI Plugins",
        links: [
            {
                label: "babel",
                rel: "noopener",
                target: "_blank",
                link:
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
            },
            {
                link:
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",
                target: "_blank",
                rel: "noopener",
                label: "router",
            },
            {
                link:
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",
                target: "_blank",
                rel: "noopener",
                label: "vuex",
            },
            {
                link:
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
                target: "_blank",
                rel: "noopener",
                label: "eslint",
            },
            {
                link:
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",
                target: "_blank",
                rel: "noopener",
                label: "unit-mocha",
            },
            {
                link:
          "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
                target: "_blank",
                rel: "noopener",
                babel: "typescript",
            },
        ],
    },
    {
        title: "Essential Links",
        links: [
            {
                link: "https://vuejs.org",
                target: "_blank",
                rel: "noopener",
                label: "Core Docs",
            },
            {
                link: "https://forum.vuejs.org",
                target: "_blank",
                rel: "noopener",
                label: "Forum",
            },
            {
                link: "https://chat.vuejs.org",
                target: "_blank",
                rel: "noopener",
                label: "Community Chat",
            },
            {
                link: "https://twitter.com/vuejs",
                target: "_blank",
                rel: "noopener",
                label: "Twitter",
            },
            {
                link: "https://news.vuejs.org",
                target: "_blank",
                rel: "noopener",
                label: "News",
            },
        ],
    },
    {
        title: "Ecosystem",
        links: [
            {
                link: "https://router.vuejs.org",
                target: "_blank",
                rel: "noopener",
                label: "vue-router",
            },
            {
                link: "https://vuex.vuejs.org",
                target: "_blank",
                rel: "noopener",
                label: "vuex",
            },
            {
                link: "https://github.com/vuejs/vue-devtools#vue-devtools",
                target: "_blank",
                rel: "noopener",
                label: "vue-devtools",
            },
            {
                link: "https://vue-loader.vuejs.org",
                target: "_blank",
                rel: "noopener",
                label: "vue-loader",
            },
            {
                link: "https://github.com/vuejs/awesome-vue",
                target: "_blank",
                rel: "noopener",
                label: "awesome-vue",
            },
        ],
    },
];

export default defineComponent({
    props: {
        msg: String,
    },
    render() {
        return (
            <article class="hello flex-row" style={styles.hello}>
                {data.map(({ title, links }) => (
                    <dl class="flex-1">
                        <dt>
                            <h3 style={styles.h3}>{title}</h3>
                            {links.map(({ label, link, ...props }) => (
                                <dd>
                                    <a href={link} {...props}>
                                        {label}
                                    </a>
                                </dd>
                            ))}
                        </dt>
                    </dl>
                ))}
            </article>
        );
    },
});
