module.exports = function pingPlugin() {
    console.log('attach ping plugin');
    this.on('request', function (req, res) {
        console.log('request', req.url);
        if (req.url.indexOf('/ping') === 0 && ! res.headersSent) {
            res.writeHead(200);
            res.end();
        }
    });
};
