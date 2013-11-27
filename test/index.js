var assert = require('assert');
var addon = require('../');

var app = {};

addon.call(app, __dirname + '/plugins/*.js');

assert.equal(app.foo, true);

console.log('ok');
