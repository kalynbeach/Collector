// Boxes Collection

var app = app || {};

(function() {

	'use strict';

	var BoxCollection = Backbone.Collection.extend({
	  
	  // Reference to the collection model
	  model: app.Box,

	  // Save all items in the local storage module under the 'box-backbone' namespace
	  localStorage: new Backbone.LocalStorage('box-backbone')

	});

	app.Boxes = new BoxCollection();

})();

