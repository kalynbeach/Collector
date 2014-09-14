/*
**	Resourcer
** 
**	An app for consolidating and organzing links to webpages
**
*/

// ==========================
//  Objects and Constructors
// ==========================

// Array of boxes
var boxes = [];

// Box constructor
var Box = function(name) {
	this.name = name;
	this.items = [];
	this.id;
};

// Add item object method on the Box prototype
Box.prototype.addItem = function(item) {
	this.items.push(item);
};

// Remove item object method on the Box prototype
Box.prototype.removeItem = function(item) {
	this.items.splice(item, 1);
};

Box.prototype.returnBox = function() {
	return this;
};

// Log the box's item objects to the console
Box.prototype.logBox = function() {
  console.log(this.items);
};

var Item = function(name, link, box) {
	this.name = name;
	this.link = link;
	this.parentBox = box; // <--
};

// ================
//  Main Functions
// ================

// Create new box object
function createNewBox(name) {
	// Create new box object
	var box = new Box(name);

	// Append the box object to the boxes array
	boxes.push(box);

	// Assign box id based on its index in the boxes array
	box.id = boxes.indexOf(box);
};

// Create new item object
function createNewItem(name, link, box) {
	var item = new Item(name, link);
  //
};

// Create button element for each item and append item buttons to the #items-section
function displayItems(box) {
 	
	box.items.forEach(function(item) {
		var itemButton = $('<a>', {
			class: "btn btn-default item-button",
			href: item.link,
			text: item.name
		});

		$('.display-section').append(itemButton);
	});
};

// Find and return a box's id based on name argument match
function findBoxId(name) {

	var boxName = name;
	var boxId;

	// Loops through the boxes array to find the box object with matching name
  boxes.forEach(function(box) {
  	if (boxName === box.name) {
  		boxId = box.id;
  	}
  	return boxId;
  });
  return boxId;
};




//
// ==========================
//

// =================
//  Header Controls
// =================

$(document).ready(function() {

	// New Box button
	$('#new-box-button').click(function() {
	  $('#create-box-form').slideToggle();
	});

	// Create Box button
	$('#create-box-form').submit(function() {

		// Store inputted box name to boxName variable
		var boxName = $('#create-box-name-input').val();

		// Create new box with given name value
		createNewBox(boxName);

		// Find the box's id (index in the boxes array)
		var boxId = findBoxId(boxName);

		// Create new button element for the box with its respective name as its text
		var boxButton = $('<button>', {
			type: "button",
			class: "btn btn-default btn-lg btn-block box-button",
			value: boxId,
			text: boxName
		});

	  // Append the box button to the boxes section
		$('#boxes-section').append(boxButton);

		// Reset input form text
		$('#create-box-name-input').val('');

	  // Slide form back up (hide it)
	  $('#create-box-form').slideToggle();
	  
	  return false;
	});

	// Edit Box button

	// Save Box button

	// Export Box button

	//
	// ==========================
	//

	// ==================
	//  Content Controls
	// ==================

	// Box button
	$('.box-button').click(function() {

    $('.display-section').empty();

    var boxId = $(this).attr("value");

    displayItems(boxes[boxId]);

	});
}); // End of document.ready

// =========
//  Testing
// =========

/*

var exampleItem1 = {name: "Kalyn's homepage", link: "https://kalynbeach.github.io"};
var exampleItem2 = {name: "Google", link: "https://google.com"};
var exampleItem3 = {name: "Reddit", link: "https://reddit.com"};

createNewBox("Example Box");

exampleBoxId = findBoxId("Example Box")

var exampleBox = boxes[exampleBoxId];

exampleBox.items = [exampleItem1, exampleItem2, exampleItem3];

//var runTest = displayItems(exampleBox);

function testDisplay(testItem) {
	boxes[0].addItem(testItem);
	displayItems(boxes[0]);
};

*/

//
// ==========================
//