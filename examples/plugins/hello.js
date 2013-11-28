module.exports = function helloPlugin() {
    console.log('attach hello plugin');
    this.on('request', function (req, res) {
        if (req.url.indexOf('/hello') === 0 && ! res.headersSent) {
            res.writeHead(200);
            res.end('hello');
        }
    });
};

