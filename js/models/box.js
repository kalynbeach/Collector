// Box Model

var app = app || {};

(function() {

  'use strict';
  
  app.Box = Backbone.Model.extend({

    // Reference to the collection's model
    model: {
      item: app.Item
    },

    defaults: {
      name: ''
    },

    initialize: function() {
    
    }


  });

})();


