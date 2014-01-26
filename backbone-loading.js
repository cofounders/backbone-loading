(function (root, undefined) {

  var className = 'backbone-loading';
  var onLoading = function () {
    root.document.documentElement.classList.add(className);
  };
  var onComplete = function () {
    root.document.documentElement.classList.remove(className);
  };

  var install = function (Backbone) {
    var pendingAjaxCounter = 0;
    var backboneSync = Backbone.sync;
    Backbone.sync = function (method, model, options) {
      model.once('request', function (model, xhr, options) {
        xhr.always(function () {
          pendingAjaxCounter -= 1;
          if (pendingAjaxCounter === 0) {
            onComplete();
          }
        });
      });
      pendingAjaxCounter += 1;
      if (pendingAjaxCounter === 1) {
        onLoading();
      }
      return backboneSync.apply(this, arguments);
    };
  };

  if (typeof define === 'function' && define.amd) {
    define(['backbone'], function (Backbone) {
      install(Backbone);
      return Backbone;
    });
  } else if (typeof require === 'function' &&
    typeof module !== 'undefined' && module.exports) {
    var Backbone = require('backbone');
    install(Backbone);
    module.exports = Backbone;
  } else {
    install(root.Backbone);
  }

})(this);
