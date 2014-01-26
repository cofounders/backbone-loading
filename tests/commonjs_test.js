'use strict';

var Backbone = require('backbone');

exports['CommonJS compatibility'] = {

  default: function (test) {
    test.equal(require('../backbone-loading'), Backbone);
    test.done();
  }

};
