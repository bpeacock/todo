/* Define the Item class here which will be used by the Todo class */

var Item = function(todo, text) {
  this.todo = todo;

  this.$wrapper = $('<li class="item">').data('item', this);

  this.$check   = $('<input class="item-check" type="checkbox">').appendTo(this.$wrapper);

  this.$input   = $('<input class="item-input" type="text">')
    .val(text)
    .appendTo(this.$wrapper);

  this.$remove  = $('<button class="item-remove">X</button>').appendTo(this.$wrapper);
};

Item.prototype = {
  remove: function() {
    if(window.confirm('Are you sure you want to delete this to-do?')) {
      this.$wrapper.remove();
    }
  },
  dump: function() {
    return {
      complete: this.$check.is(':checked'),
      text:     this.$input.val()
    };
  }
};

$(function() {
  $(document)
    .on('click', '.item-remove', function() {
      $(this).closest('.item').data('item').remove();
    })
    .on('change', '.item-check', function() {
      var $this = $(this),
          $item = $this.closest('.item'),
          $list = $item.data('item').todo.$list;

      if($this.is(':checked')) {
        $list.append($item);
      }
      else {
        $list.prepend($item);
      }
    });
});
