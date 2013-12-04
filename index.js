var extend = require('util-extend');
var glob = require('glob');

module.exports = function addon(fn) {
    if ( typeof fn === 'function' ) {
        fn.call(this);
    } else if ( typeof fn === 'string' ) {
        glob.sync(fn).map(require).forEach(addon, this);
    } else if ( typeof fn === 'object') {
        extend(this, fn);
    }
    return this;
};
