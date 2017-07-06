var test = require('tape');
var logic = require('./logic.js');

/**** TESTS FOR DELETETODO ****/
test('deleteTodo should return an array', function(t) {
  var actual = Array.isArray(logic.deleteTodo([], 1));
  var expected = true;
  t.deepEqual(actual, expected, 'should return an array');
  t.end();
});

// should work for 1 item
test('should work for 1 item', function(t) {
  var actual = logic.deleteTodo([{
    id: 1,
    description: "go for run",
    done: false
  }], 1);
  var expected = [];
  t.deepEqual(actual, expected, 'should work for 1 item');
  t.end();
});
// should work for 1 item when idToDelete input argument doesn't match
test("should work for 1 item when idToDelete input argument doesn't match", function(t) {
  var actual = logic.deleteTodo([{
    id: 1,
    description: "go for run",
    done: false
  }], 2);
  var expected = [{
    id: 1,
    description: "go for run",
    done: false
  }]
  t.deepEqual(actual, expected, "should work for 1 item when idToDelete input argument doesn't match");
  t.end();
});

// Should return a new array with all the items that don't match the idToDelete input argument
test("Should return a new array with all the items that don't match the idToDelete input argument", function(t) {
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
  t.deepEqual(actual, expected, "Should return a new array with all the items that don't match the idToDelete input argument");
  t.end();
});

// Should return an empty array if all items match the input argument idToDelete
test("Should return an empty array if all items match the imput argument idToDelete", function(t) {
  var actual = logic.deleteTodo([{
    id: 1,
    description: "go for run",
    done: false
  }, ], 1);
  var expected = [];
  t.deepEqual(actual, expected, 'Should return an empty array if all items match the imput argument idToDelete');
  t.end();
});

// should leave the input argument array todos unchanged
test('should leave the input argument array todos unchanged', function(t) {
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
  t.deepEqual(actual, expected, "should leave the input argument array todos unchanged");
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

// Should return an array with the input argument todo added to the list
test("Should return an array with the input argument todo added to the list", function(t) {
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
/**** TESTS FOR SORTTODO ****/

//Should return an array
test("should return an array", function(t) {
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

//Should return an array with the correct items
test("should return a new array of only items with done property set as true", function(t) {
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

  var actual = logic.sortTodos(todos, true);
  var expected = [{
    id: 2,
    description: 'make omelette',
    done: true
  }];

  t.deepEqual(actual, expected, "should return a new array of only items with done property set as true");
  t.end();
});

//should not change input arguments
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

//Should return an empty array when none of the items match the input argument
test("should return an empty array if there are no items that match the input argument", function(t) {
  var todos = [{
      id: 1,
      description: 'make eggs',
      done: false
    },

    {
      id: 2,
      description: 'make omelette',
      done: false,
    }
  ];

  var actual = logic.sortTodos(todos, true);
  var expected = [];


  t.deepEqual(actual, expected, "should return an empty array if there are no items that match the input argument");
  t.end();
});
