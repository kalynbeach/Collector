// Box View

var app = app || {};

(function($) {

	'use strict';

	app.BoxView = Backbone.View.extend({

	  // DOM element
		el: '#box-display-section',

	  template: _.template($('#box-template').html()),

	  events: {
      'click #new-box-button': 'render'
	  },

	  initialize: function() {
	    this.listenTo(this.model, 'change', this.render);
	    this.listenTo(this.model, 'destroy', this.remove);
	  },

	  render: function() {
	  	this.$el.html(this.template(this.model.attributes));
	  	return this;
	  }

	});

})(jQuery);