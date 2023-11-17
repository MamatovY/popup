const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/nuxt/api',
        createProxyMiddleware({
            target: 'https://layout.solvintech.ru',
            changeOrigin: true,
            followRedirects: false,
        })
    );
};
