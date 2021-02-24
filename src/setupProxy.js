/* eslint-disable */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: 'http://localhost:8181',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    }),
  );
};
