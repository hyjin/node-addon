node-addon
==========

Make your app modular

## Usage
```js
var addon = require('addon');

var app = {};

addon.call(app, __dirname + '/plugins/*.js');

app.hello();

// console output
hello, anonymous
```
In plugins/hello.js:

```js
module.exports = function helloPlugin() {
  var app = this;
  app.hello = function (name) {
    console.log('hello, ' + name || 'anonymous');
  };
};
```

