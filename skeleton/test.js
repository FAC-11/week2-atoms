var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

// addToDo function tests
test('See if addToDo returns an array', function(t){
  var actual = Array.isArray(logic.addTodo([],[]));
  var expected = true;
  t.equal(actual,expected,"addToDo should return an array");
  t.end();
});

test('Check if the toDo array has the newToDo array', function (t) {
    var actual = logic.addTodo([1,2,3], [4]).length;
    var expected = 4;
    t.deepEqual(actual,expected, "length should have increased by 1, from 3 to 4");
    t.end();
});



test('check that the last added value is an object in the array', function (t) {
  var todo =[{1:"one", 2:"two"}];
  var newtodo ={3:"three"};
  var actual = typeof logic.addTodo(todo,newtodo)[logic.addTodo(todo,newtodo).length -1];
  var expected = 'object';

  t.deepEqual(actual,expected, "array should have an object as its last element");
  t.end();
});


test('Check if last element has a key of \'id\'', function(t){
    var todo =[{one:"one", name:"two"}];
    var newtodo ={three:"three"};
    var actual = "id" in logic.addTodo(todo,newtodo)[logic.addTodo(todo,newtodo).length -1];
    var expected = true;
    t.equal(actual,expected, "the array has an key of id");
    t.end();

} )