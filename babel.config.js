module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
        "@vue/babel-plugin-jsx",
        [
            "import",
            {
                libraryName: "ant-design-vue",
                libraryDirectory: "es",
                style: true,
            },
            "antd",
        ],
        [
            "import",
            {
                libraryName: "lodash",
                libraryDirectory: "",
                camel2DashComponentName: false, // default: true
            },
            "lodash",
        ],
    ],
};
