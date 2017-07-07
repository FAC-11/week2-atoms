// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd


var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  addTodo: function(todos, newTodo) {

    return todos.concat({
      description: newTodo.description,
      id:todoFunctions.generateId(),
      done:false
    });


    // should leave the input argument todos unchanged
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },
  deleteTodo: function(todos, idToDelete) {
    var array = todos.filter(function(x) {
      return x.id !== idToDelete;
    })
    return array;
  },

  markTodo: function(todos, idToMark) {
    var copyTodos = clone(todos);

    // go thru array of todo
    return copyTodos.map(function(newTodo){
      // and find the todo that has the given id
      if(newTodo.id === idToMark){
        // and toggle the done property of the todo
        return Object.assign({}, newTodo, {done: !newTodo.done})

      }else{
        return newTodo

      }
    })

    // key: the name of the object key
    // index: the ordinal position of the key within the object
    // should leave the input argument todos unchanged
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
  },
  sortTodos: function(todos, condition ){
    var array = todos.filter(function(x) {
      return x.done === condition;
    });
      return array;
  },
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort

    // New Code from Rebeca
    toggleEditing: function(todos, id){
        var newTodos = todos.map(function(todo){
            if(todo.id === id){
                return Object.assign({}, todo, {beingEdited: !todo.beingEdited})
            } else{
                return Object.assign({}, todo, {beingEdited: false})
            }
        });
        return newTodos;
    },

    editTodo: function(todos, id, description){
        var newTodos = todos.map(function(todo){
            if(todo.id === id){
                return Object.assign({}, todo, {description: description})
            } else{
                return todo;
            }
        });
        return newTodos;
    }



}
function clone(original){
  var stringfied = JSON.stringify(original);
  var clone = JSON.parse(stringfied);
  return clone;
}

module.exports=todoFunctions;
