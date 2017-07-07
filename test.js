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

// Edit tests from Rebecca

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


// DO NOT DELETE
// Shows in initial thinking process for the tests for this task
// Shows how we refactored the codes and the test.

//
// // addToDo function tests
// test('See if addToDo returns an array', function(t) {
//   var actual = Array.isArray(logic.addTodo([], []));
//   var expected = true;
//   t.equal(actual, expected, "addToDo should return an array");
//   t.end();
// });
//
// test('Check if the toDo array has the newToDo array', function(t) {
//   var actual = logic.addTodo([{
//       done: false,
//       description: "go for run"
//     },
//     {
//       id: 2,
//       description: "drink water",
//       done: false
//     }
//   ], {
//     id: 1
//   }).length;
//   var expected = 4;
//   t.deepEqual(actual, expected, "length should have increased by 1, from 3 to 4");
//   t.end();
// });
//
// test('check that the last added value is an object in the array', function(t) {
//   var todo = [{
//     done: true,
//     description: "smash avocados"
//   }];
//   var newtodo = {
//     id: 1
//   };
//   var actual = typeof logic.addTodo(todo, newtodo)[logic.addTodo(todo, newtodo).length - 1];
//   var expected = 'object';
//
//   t.deepEqual(actual, expected, "array should have an object as its last element");
//   t.end();
// });
//
// test('Check if last element has a key of \'id\'', function(t) {
//   var todo = [{
//     done: true,
//     description: "smash avocados"
//   }];
//   var newtodo = {
//     id: 1
//   };
//   var actual = "id" in logic.addTodo(todo, newtodo)[logic.addTodo(todo, newtodo).length - 1];
//   var expected = true;
//   t.equal(actual, expected, "the array has an key of id");
//   t.end();
//
// });
//
// test('Check if last element has a description', function(t) {
//   var todo = [{
//     done: true,
//     description: "smash avocados"
//   }];
//   var newtodo = {
//     id: 1
//   };
//   var actual = "description" in logic.addTodo(todo, newtodo)[logic.addTodo(todo, newtodo).length - 1];
//   var expected = true;
//   t.equal(actual, expected, "the array will have a description");
//   t.end();
//
// });
// //this is wrong
// test('Check if last element has a idToMark', function(t) {
//   var todo = [{
//     id: 1,
//     description: "peel potatos",
//     done: false,
//   }];
//   var newtodo = {
//     id: 2,
//     description: "smash avocados",
//     done: false,
//   };
//   var actual = logic.addTodo(todo, newtodo)[logic.addTodo(todo, newtodo).length - 1].idToMark;
//   var expected = false;
//   t.equal(actual, expected, "the array will not have a markId");
//   t.end();
//
// });
//
//
// //markToDo function
// test('function should return an array of Objects', function(t) {
//   var todo = [{
//     2: 'two',
//     3: 'three'
//   }];
//   var newTodo = 0;
//   var actual = typeof logic.markTodo(todo, newTodo);
//   var expected = 'object';
//   t.deepEqual(actual, expected, "it should be an object'");
//   t.end();
// })
//
//
// test('check if markId has become true', function(t) {
//   var todo = [{
//     one: "one",
//     name: "two",
//     markId: false
//   }];
//
//   var newVar = 0;
//   var actual = logic.markTodo(todo, newVar)[newVar].idToMark;
//   var expected = true;
//   t.equal(actual, expected, "the array will have a idToMark 'true'");
//   t.end();
// })
