/* Define the Todo class here */

var Todo = function() {
  var self = this;

  /*** Cache ***/
  this.$wrapper = $('<div class="todo">');
  this.$input   = $('<input class="todo-input" type="text" placeholder="Add new to-do">').appendTo(this.$wrapper);
  this.$add     = $('<button class="todo-add">Add</button>').appendTo(this.$wrapper);
  this.$list    = $('<ul class="todo-list">').appendTo(this.$wrapper);

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
  focus: function() {
    this.$input.focus();
  }
};
