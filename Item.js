/* Define the Item class here which will be used by the Todo class */

var Item = function() {
  this.$wrapper = $('<li class="item">').data('item', this);

  this.$check   = $('<input class="item-check" type="checkbox">').appendTo(this.$wrapper);
  this.$input   = $('<input class="item-input" type="text">').appendTo(this.$wrapper);
  this.$remove  = $('<button class="item-remove">X</button>').appendTo(this.$wrapper);
};

Item.prototype = {
  focus: function() {
    this.$input.focus();
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
      $(this).closest('.item').remove();
    })
    .on('keydown', '.item-input', function(e) {
      if(e.keyCode == 8 || e.keyCode == 13) {
        $(this).blur();
      }
    });
});
