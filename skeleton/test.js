var test = require('tape');
var logic = require('./logic.js');

// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });

// tests for eleteTodo
test('deleteTodo should return an array', function(t) {
  var actual = typeof(logic.deleteTodo());
  var expected = 'Array';
  t.equal(actual, expected, 'should return an array');
  t.end();
});
