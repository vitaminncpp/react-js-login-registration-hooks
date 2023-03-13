const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://54.234.242.221:8080",
      changeOrigin: true,
    })
  );
};
