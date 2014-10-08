// Item View

var app = app || {};

(function($) {

	'use strict';

	app.ItemView = Backbone.View.extend({

	  // DOM element
		el: '#item-display-section',

	  template: _.template($('#item-template').html()),

	  events: {

	  },

	  initialize: function() {
	    this.listenTo(this.model, 'change', this.render);
	  },

	  render: function() {
	  	this.$el.html(this.template(this.model.attributes));
	  	return this;
	  }

	});

})(jQuery);

