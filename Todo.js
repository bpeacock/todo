/* Define the Todo class here */

var Todo = function($wrapper) {
  var self = this;

  /*** Cache ***/
  this.$wrapper = $wrapper;
  this.$add     = $('<button>Add Item</button>').appendTo($wrapper);
  this.$list    = $('<ul>').appendTo($wrapper);

  /*** Bind Events ***/
  this.$add.click(function() {
    self.add();
  });

};

Todo.prototype = {
  add: function() {
    // Create a new item
    var item = new Item();

    // Place the item's wrapper element at the beginning of the list element
    this.$list.prepend(item.$wrapper);

    // Call the item's focus method which will focus the cursor there
    item.focus();
  },
  dump: function() {

  }
};
