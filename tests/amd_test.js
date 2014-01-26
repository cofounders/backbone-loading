'use strict';

var requirejs = require('requirejs');

requirejs.config({
  baseUrl: __dirname + '/..'
});

exports['AMD compatibility'] = {

  default: function (test) {
    requirejs(['backbone-loading', 'backbone'], function (loading, backbone) {
      test.equal(loading, backbone);
      test.done();
    });
  }

};
