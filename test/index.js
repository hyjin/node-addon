var assert = require('assert');
var addon = require('../');

var app = {};
app.addon = addon;

app.addon(require('./plugins/foo'));


assert.equal(app.foo, true);

console.log('ok');
