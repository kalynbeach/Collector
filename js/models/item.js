// Item Model

var app = app || {};

(function() {

  'use strict';

  app.Item = Backbone.Model.extend({

    defaults: {
      title: '',
      link: ''
    }
    
  });

})();
