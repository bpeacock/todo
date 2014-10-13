/* This is where we will initialize the Todo object */

var $wrapper = $('<div class="todo">'),
    todo     = new Todo($wrapper);

$(function() {
  $wrapper.appendTo('body');
});
