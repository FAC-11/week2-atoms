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
    description: "go for run",
    done: false
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
  var todoarray = [{
    id: 1,
    description: "go for run",
    done: false
  }, {
    id: 4,
    description: "drink water",
    done: false
  }];
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

//sort
test('sortTodos should return an array', function(t) {
  var todos = [{
      id: 1,
      description: 'make eggs',
      done: false
    },

    {
      id: 2,
      description: 'make omelette',
      done: false
    }
  ];

  var actual = Array.isArray(logic.sortTodos(todos));
  var expected = true;
  t.deepEqual(actual, expected, 'should return an array');
  t.end();
});

test('sortTodos should return a new array with the done property set as true', function(t) {
  var todos = [{
      id: 1,
      description: 'make eggs',
      done: false
    },

    {
      id: 2,
      description: 'make omelette',
      done: true,
    }
  ];

  var actual = logic.sortTodos(todos);
  var expected = [{
    id: 2,
    description: 'make omelette',
    done: true
  }];

  t.deepEqual(actual, expected, 'should return a new array with the done property set as true');
  t.end();
});

test('input argument should remain unchanged', function(t) {
  var todos = [{
      id: 1,
      description: 'make eggs',
      done: false
    },

    {
      id: 2,
      description: 'make omelette',
      done: true,
    }
  ];

  logic.sortTodos(todos);
  var actual = todos;
  var expected = [{
      id: 1,
      description: 'make eggs',
      done: false
    },

    {
      id: 2,
      description: 'make omelette',
      done: true,
    }
  ];

  t.deepEqual(actual, expected, 'input argument should remain unchanged');
  t.end();
});

test('logic.toggleEditing should toggle the beingEdited property on the todo' +
  ' with the given id and set the beingEdited property on all on others todos' +
  'to false',
  function(t) {

    var todos = [{
        id: 1,
        description: 'make eggs',
        done: false,
        beingEdited: false
      },
      {
        id: 2,
        description: 'make omelette',
        done: true,
        beingEdited: false
      },
      {
        id: 3,
        description: 'make coffee',
        done: true,
        beingEdited: true
      }
    ];

    var actual = logic.toggleEditing(todos, 2)

    var expected = [{
        id: 1,
        description: 'make eggs',
        done: false,
        beingEdited: false
      },
      {
        id: 2,
        description: 'make omelette',
        done: true,
        beingEdited: true
      },
      {
        id: 3,
        description: 'make coffee',
        done: true,
        beingEdited: false
      }
    ];

    t.deepEqual(actual, expected,
      'The todo with id 2 should be toggled to true and all others' +
      'should be set to false')

    actual = logic.toggleEditing(todos, 3)

    expected = [{
        id: 1,
        description: 'make eggs',
        done: false,
        beingEdited: false
      },
      {
        id: 2,
        description: 'make omelette',
        done: true,
        beingEdited: false
      },
      {
        id: 3,
        description: 'make coffee',
        done: true,
        beingEdited: false
      }
    ];

    t.deepEqual(actual, expected,
      'The todo with id 3 should be toggled to false and all others' +
      'should be set to false');

    t.end();
  })
//test for editTask function
test('logic.editTodo should set the description for the todo with the given id',
  function(t) {

    var todos = [{
        id: 1,
        description: 'make eggs',
        done: false
      },
      {
        id: 2,
        description: 'make omelette',
        done: true,
      },
      {
        id: 3,
        description: 'make coffee',
        done: true,
      }
    ];

    var actual = logic.editTodo(todos, 2, 'build a website');
    var expected = [{
        id: 1,
        description: 'make eggs',
        done: false
      },
      {
        id: 2,
        description: 'build a website',
        done: true,
      },
      {
        id: 3,
        description: 'make coffee',
        done: true,
      }
    ];

    t.deepEqual(actual, expected,
      'The description of the todo with id 2 should be set');

    t.end();
  })
