"use strict";
var path = require('path');
var fs = require('fs');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');

require(lib+'/calender.js').show_date();