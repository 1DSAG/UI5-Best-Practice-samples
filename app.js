const express = require('express'),
 { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.use(express.static("webapp"));

app.use('/V2', createProxyMiddleware('/V2', {target: 'https://services.odata.org', changeOrigin: true}));
app.listen(port);