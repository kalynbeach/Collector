// App View

var app = app || {};

(function($) {

	'use strict';

	app.AppView = Backbone.View.extend({
	  
	  // Bind to the container element
	  el: '.container',

	  events: {
	  	'click #new-box-button': 'createOnEnter',
	  	'keystroke #new-box-name-input': 'createOnEnter'

	  },

	  // Initialize
	  initialize: function() {
	  	// Bind to the relevant events on the 'Boxes' collection 
      this.$input = this.$('#create-box-name-input');

	  	// Initialization listeners
	    this.listenTo(app.Boxes, 'add', this.addItem);

	  },

	  render: function() {
      
	  },

	  addItem: function(item) {
	  	var view = new app.ItemView({model: item});
	  	$("#item-display-section").append(view.render().el);
	  },

	  addBox: function(box) {
	  	var view = new app.BoxView({model: box});
	  	$("#box-display-section").append(view.render().el);
	  },

	  // Return text input from new Box form as name attribute
	  newBoxAttributes: function() {
	  	return {
	  		name: this.$input.val()
	  	};
	  },

	  // Create new Box on enter
	  createOnEnter: function(e) {
      var box;
      box = app.Boxes.create(this.newBoxAttributes());
	    this.$input.val('');

	    e.preventDefault();
	  }

	});

})(jQuery);
