var test = require('tape');
var logic = require('./logic.js');

var todoarray = [{id: 1, txt: 'go for run'}, {id: 4, txt: 'drink water'}];

// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });


// tests for deleteTodo
test('deleteTodo should return an array', function(t) {
  var actual = Array.isArray(logic.deleteTodo([5], [5]));
  var expected = true;
  t.deepEqual(actual, expected, 'should return an array');
  t.end();
});

// return a new array, this should not contain any todo with an id of idToDelete
test('new array should not contain todo with id of idToDelete', function(t) {
  var actual = logic.deleteTodo([{id: 1, txt: 'go for run'}, {id: 2, txt: 'drink water'}], 2);
  var expected = [{id: 1, txt: 'go for run'}];
  t.deepEqual(actual, expected, 'should delete object with id idToDelete');
  t.end();
});

test('should leave the input argument todos unchanged', function(t) {

  logic.deleteTodo(todoarray, 4);
  var actual = todoarray;
  var expected = [{id: 1, txt: 'go for run'}, {id: 4, txt: 'drink water'}];
  t.deepEqual(actual, expected, 'should leave the input argument todos unchanged');
  t.end();
});
