var glob = require('glob');

module.exports = function addon(name) {
    if (!~name.indexOf('*')) {
        // require
        require(name).call(this);
    } else {
        // glob
        var files = glob.sync(name, { strict: true });
        if (! files.length)
            throw new Error("Cannot find modules under '" + name + "'");
        files.forEach(function (mod) {
            require(mod).call(this);
        }, this);
    }
    return this;
};

