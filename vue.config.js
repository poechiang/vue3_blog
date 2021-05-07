module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#42b983',
                        'link-color': '#42b983',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json', '.ts', '.tsx'], // 加入ts 和 tsx
        },
    },
};
