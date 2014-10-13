/* Define the Item class here which will be used by the Todo class */

var Item = function(todo, text) {
  this.todo = todo;

  this.$wrapper = $('<li class="item">').data('item', this);

  this.$check   = $('<input class="item-check" type="checkbox">').appendTo(this.$wrapper);

  this.$input   = $('<input class="item-input" type="text">')
    .val(text)
    .appendTo(this.$wrapper);

  this.$remove  = $('<button class="item-remove">x</button>').appendTo(this.$wrapper);
};

Item.prototype = {
  remove: function() {
    if(window.confirm('Are you sure you want to delete this to-do?')) {
      this.$wrapper.remove();
    }

    this.todo.focus();
  }
};

$(function() {
  $(document)
    .on('click', '.item-remove', function() {
      $(this).closest('.item').data('item').remove();
    })
    .on('keydown', '.item-input', function(e) {
      if(e.keyCode == 13) {
        $(this).blur();
      }
    })
    .on('blur', '.item-input', function() {
      $(this).closest('.item').data('item').todo.focus();
    })
    .on('change', '.item-check', function() {
      var $this = $(this),
          $item = $this.closest('.item'),
          todo = $item.data('item').todo;

      if($this.is(':checked')) {
        todo.$list.append($item);
      }
      else {
        todo.$list.prepend($item);
      }

      todo.focus();
    });
});
