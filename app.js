const express = require('express'),
    cors_proxy = require('cors-anywhere');
const app = express();
const port = 3000;

app.use(express.static("src"));

app.listen(port, () => console.log(`UI5 sandbox listening on port ${port}!`));

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port2 = process.env.PORT || 8080;


cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    //requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port2, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port2);
});


