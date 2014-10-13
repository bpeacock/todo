/* Define the Todo class here */

var Todo = function() {
  var self = this;

  /*** Cache ***/
  this.$wrapper = $('<div class="todo-list">');
  this.$input   = $('<input type="text" placeholder="Add new to-do">').appendTo(this.$wrapper);
  this.$add     = $('<button>Add</button>').appendTo(this.$wrapper);
  this.$list    = $('<ul>').appendTo(this.$wrapper);

  /*** Bind Events ***/
  this.$add.click(function() {
    self.add();
  });

  this.$input.keydown(function(e) {
    if(e.keyCode == 13) {
      self.add();
    }
  });
};

Todo.prototype = {
  add: function() {
    var val = this.$input.val();

    if(val.length !== 0) {
      // Create a new item
      var item = new Item(this, val);

      // Place the item's wrapper element at the beginning of the list element
      this.$list.prepend(item.$wrapper);

      // Clear the input & focus
      this.$input
        .val('')
        .focus();
    }
  },
  dump: function() {
    return this.$list.find('.item').map(function() {

    });
  }
};
