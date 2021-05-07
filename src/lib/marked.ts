import marked from "marked";
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
        const hljs = require("highlight.js");
        const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: true,

    baseUrl: null,
    headerIds: true,
    headerPrefix: "",
    langPrefix: "language-",
    mangle: true,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false,
    sanitize: false,
});

// Override function
// const renderer = {
//   heading(text, level) {
//     return `
//             <h${level} id="${uid(16)}" role="head-anchor" head-level="${level}">
//               ${text}
//             </h${level}>`;
//   },
// };

// marked.use({ renderer });

export default marked;
