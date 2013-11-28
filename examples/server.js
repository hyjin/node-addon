var http = require('http');
var glob = require('glob');
var server = http.createServer();
server.addon = require('../');

glob.sync('./plugins/*.js').forEach(function (m) { server.addon(require(m)); });

server.listen(3000, function () {
    console.log('listening...');

    http.get('http://localhost:3000/ping', function (res) {
        console.log('ping:', res.statusCode);
    });

    http.get('http://localhost:3000/hello', function (res) {
        console.log('hello:', res.statusCode);
        var buf = [];
        res.on('data', function (chunk) {
            buf.push(chunk);
        });
        res.on('end', function () {
            var body = Buffer.concat(buf).toString();
            console.log('hello:', body);
        });
    });

});

