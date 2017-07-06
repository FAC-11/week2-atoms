var test = require('tape');
var logic = require('./logic.js');

/**** TESTS FOR DELETETODO ****/
test('deleteTodo should return an array', function(t) {
  var actual = Array.isArray(logic.deleteTodo([5], [5]));
  var expected = true;
  t.deepEqual(actual, expected, 'should return an array');
  t.end();
});

// new array returned should not contain todo with id of idToDelete
test('new array returned should not contain todo with id of idToDelete', function(t) {
  var actual = logic.deleteTodo([{
    id: 1,
    description: "go for run", done: false
  }, {
    id: 2,
    description: "drink water",
    done: false
  }], 2);
  var expected = [{
    id: 1,
    description: "go for run",
    done: false
  }];
  t.deepEqual(actual, expected, 'should delete object with id idToDelete');
  t.end();
});

// should leave the input argument todos unchanged
test('should leave the input argument todos unchanged', function(t) {
  var todoarray = [{
  id: 1,
  description: "go for run",
  done: false
}, {
  id: 4,
  description: "drink water",
  done: false
}];
  // run our function
  logic.deleteTodo(todoarray, 4);
  var actual = todoarray;
  var expected = [{
    id: 1,
    description: "go for run",
    done: false
  }, {
    id: 4,
    description: "drink water",
    done: false
  }];
  // check if todoarray has changed
  t.deepEqual(actual, expected, 'should leave the input argument todos unchanged');
  t.end();
});


/**** TESTS FOR ADDTODO ****/
// test('logic.addTodo should add a todo to the list', function(t) {
//   var todos = [{
//     description: 'make tea'
//   }];
//   var newTodo = {
//     description: 'make eggs'
//   };

// should leave the input argument todos unchanged
test('should leave the input argument todos unchanged', function(t) {
  var todoarray = [{id: 1, description: "go for run", done: false}, {id: 4, description: "drink water", done: false}];
  logic.deleteTodo(todoarray, 4);
  var actual = todoarray;
  var expected = [{id: 1, description: "go for run", done: false}, {id: 4, description: "drink water", done: false}];
  t.deepEqual(actual, expected, 'should leave the input argument todos unchanged');
  t.end();
});

  // please use test('description here', function(t) { etc format for consistency

test('logic.addTodo should add a todo to the list', function(t) {
    var todos = [{
      description: 'make tea'
    }];
    var newTodo = {
      description: 'make eggs'
    };

  var updatedTodos = logic.addTodo(todos, newTodo);

  var expected = [{
      description: 'make tea',
    },
    {
      id: 1,
      description: 'make eggs',
      done: false,
    }
  ]

  t.deepEqual(
    updatedTodos,
    expected,
    'The updated todos should have the new todo in the array'
  );

  t.deepEqual(
    todos, [{
      description: 'make tea'
    }],
    'The original todos should not be mutated'
  );

  t.end();
});

test('logic.markTodo should toggle the done property on the todo with' +
  'the given id',
  function(t) {

    var todos = [{
        id: 0,
        description: 'make tea',
        done: false
      },
      {
        id: 1,
        description: 'make eggs',
        done: true
      },
    ]

    var expected = [{
        id: 0,
        description: 'make tea',
        done: true
      },
      {
        id: 1,
        description: 'make eggs',
        done: true
      }
    ]

    t.deepEqual(
      logic.markTodo(todos, 0),
      expected,
      'todo with id 0 done property should be toggled to true'
    );

    expected = [{
        id: 0,
        description: 'make tea',
        done: false
      },
      {
        id: 1,
        description: 'make eggs',
        done: false
      }
    ]

    t.deepEqual(
      logic.markTodo(todos, 1),
      expected,
      'todo with id 1 done property should be toggled to false'
    );

    t.end();
  })
