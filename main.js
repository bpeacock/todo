/* This is where we will initialize the Todo object */

var todo = new Todo();

$(function() {
  todo.$wrapper.appendTo('body');
  todo.focus();
});
