var test = require('tape');
var logic = require('./logic.js');

var todoarray = [{id: 1, description: "go for run", done: false}, {id: 4, description: "drink water", done: false}];

// tests for deleteTodo
test('deleteTodo should return an array', function(t) {
  var actual = Array.isArray(logic.deleteTodo([5], [5]));
  var expected = true;
  t.deepEqual(actual, expected, 'should return an array');
  t.end();
});

// return a new array, this should not contain any todo with an id of idToDelete
test('new array should not contain todo with id of idToDelete', function(t) {
  var actual = logic.deleteTodo([{id: 1, description: "go for run"}, {id: 2, description: "drink water", done: false}], 2);
  var expected = [{id: 1, description: "go for run", done: false}];

  t.deepEqual(actual, expected, 'should delete object with id idToDelete');
  t.end();
});

// should leave the input argument todos unchanged
test('should leave the input argument todos unchanged', function(t) {
  logic.deleteTodo(todoarray, 4);
  var actual = todoarray;
  var expected = [{id: 1, description: "go for run", done: false}, {id: 4, description: "drink water", done: false}];
  t.deepEqual(actual, expected, 'should leave the input argument todos unchanged');
  t.end();
});

// addToDo function tests
test('See if addToDo returns an array', function(t) {
  var actual = Array.isArray(logic.addTodo([], []));
  var expected = true;
  t.equal(actual, expected, "addToDo should return an array");
  t.end();
});

test('Check if the toDo array has the newToDo array', function(t) {
  var actual = logic.addTodo([1, 2, 3], [4]).length;
  var expected = 4;
  t.deepEqual(actual, expected, "length should have increased by 1, from 3 to 4");
  t.end();
});


test('check that the last added value is an object in the array', function (t) {
  var todo =[{1:"one", 2:"two"}];
  var newtodo ={3:"three"};
  var actual = typeof logic.addTodo(todo,newtodo)[logic.addTodo(todo,newtodo).length -1];
  var expected = 'object';

  t.deepEqual(actual, expected, "array should have an object as its last element");
  t.end();
});

test('Check if last element has a key of \'id\'', function(t) {
  var todo = [{
    one: "one",
    name: "two"
  }];
  var newtodo = {
    three: "three"
  };
  var actual = "id" in logic.addTodo(todo, newtodo)[logic.addTodo(todo, newtodo).length - 1];
  var expected = true;
  t.equal(actual, expected, "the array has an key of id");
  t.end();

});

test('Check if last element has a description', function(t) {
  var todo = [{
    one: "one",
    name: "two"
  }];
  var newtodo = {three: "three"};
  var actual = "description" in logic.addTodo(todo, newtodo)[logic.addTodo(todo, newtodo).length - 1];
  var expected = true;
  t.equal(actual, expected, "the array will have a description");
  t.end();

});

test('Check if last element has a markId', function(t) {
  var todo = [{
    one: "one",
    name: "two"
  }];
  var newtodo = {
    three: "three"
  };
  var actual = logic.addTodo(todo, newtodo)[logic.addTodo(todo, newtodo).length - 1].markId;
  var expected = false;
  t.equal(actual, expected, "the array will not have a markId");
  t.end();

});


//markToDo function
test('function should return an array of Objects', function(t) {
  var todo = [{
    2: 'two',
    3: 'three'
  }];
  var newTodo = 0;
  var actual = typeof logic.markTodo(todo, newTodo);
  var expected = 'object';
  t.deepEqual(actual, expected, "it should be an object'");
  t.end();
})


test('check if markId has become true', function(t) {
  var todo = [{
    one: "one",
    name: "two",
    markId: false
  }];
  var newVar = 0;
  var actual = logic.markTodo(todo, newVar)[newVar].markId;
  var expected = true;
  t.equal(actual, expected, "the array will have a markId 'true'");
  t.end();
})
