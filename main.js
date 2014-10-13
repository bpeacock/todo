/* This is where we will initialize the Todo object */

var todo = new Todo();

$(function() {
  console.log(todo);
  todo.$wrapper.appendTo('body');
});
