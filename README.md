
## To do app for Team Atoms 

### Organisation

1.TDD
2.Pure Functions
3.Modifying the DOM
4.Styling the todo App

### TDD

Following the TDD methodology,  we wrote some failing tests before writing the code within our pure functions. This helped us to think more about what code we were going to write in our Logic.js file.

We folowed the below diagram:

Once the failed tests were written, we wrote enough code to make them pass and then we refactored the code.

This helped us to make our code more readable

![enter image description here](https://user-images.githubusercontent.com/9408641/27683709-e1c5e8c0-5cbe-11e7-99a4-215a5dae63f1.png)

### Pure Functions

When learning about pure Functions, we understood that it is a good praxis as they are easier to test and they make our code more readable, organised and easier to be debugged.

The pure functions we used to make our ToDo App were the following:

AddTodo Functions: 

DeleteTodo Functions:

Marktodo Functions:

Sortodo Functions:

A possible Edit Function?:

For all of them, we used methods like slice, map, filter to clone "our todos array", make them pure and not mutating our original array.

### Modifying the Dom

We incorporated our logic.js file in the dom. This was the trickiest bit as we had to understand how the following things worked:

[AppendChild](https://www.w3schools.com/jsref/met_node_appendchild.asp)
[Create Element in the Dom](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
[Replace Child ](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChildt)

Understanding how our update function works it was tricky as well!: We wanted our State to be updated everytime we added a new todo!

>   var update = function(newState) {
    state = newState;
    renderState(state);
  };
### Styling CSS

To replace standards buttons, with our current ones - bin, and tick - we used svg icons so that you can fill the line and the background to make it nicer!

