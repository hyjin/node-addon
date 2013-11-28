node-addon
==========

Make your app modular

## Silly Usage
```js
var app = {};
app.addon = require('addon');

app.addon(function hello() {
    this.hello = function (name) {
        console.log('hello, ' + name || 'John');
    };
});

app.hello();

// console output
hello, John
```

## Usage
```js
var http = require('http');
var glob = require('glob');
var server = http.createServer();
server.addon = require('../');

glob.sync('./plugins/*.js').forEach(function (m) { server.addon(require(m)); });

server.listen(3000, function () {
    http.get('http://localhost:3000/ping', function (res) {
        console.log('ping:', res.statusCode);
    });

    http.get('http://localhost:3000/hello', function (res) {
        var buf = [];
        res.on('data', function (chunk) {
            buf.push(chunk);
        });
        res.on('end', function () {
            var body = Buffer.concat(buf).toString();
            console.log('hello:', res.statusCode, body);
        });
    });

});


```

In plugins/ping.js:

```js
module.exports = function pingPlugin() {
    this.on('request', function (req, res) {
        if (req.url.indexOf('/ping') === 0 && ! res.headersSent) {
            res.writeHead(200);
            res.end();
        }
    });
};```

In plugins/hello.js:

```js
module.exports = function helloPlugin() {
    this.on('request', function (req, res) {
        if (req.url.indexOf('/hello') === 0 && ! res.headersSent) {
            res.writeHead(200);
            res.end('hello');
        }
    });
};

```

Results:
```bash
ping: 200
hello: 200 hello
```

