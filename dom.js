//
// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

(function() {
    // This is the dom node where we will keep our todo

    var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
    var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';

    var container = document.getElementById('todo-container');

    var completedContainer = document.getElementById('completed-container');
    //var addTodoForm = document.getElementById('add');

    if (localStorage.getItem("state")&&localStorage.getItem("state")!=='undefined'){
        var state = JSON.parse(localStorage.getItem("state"))
    }
    else{
        var state = [];
    }



    console.log(localStorage.getItem("state"));

    // var state = [
    //     { id: -3, description: 'first todo', done:false },
    //     { id: -2, description: 'second todo', done:false },
    //     { id: -1, description: 'third todo', done:false },
    // ]; // this is our initial todoList

    localStorage.setItem("state", JSON.stringify(state));


//...


    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
        var todoNode = document.createElement('li');
        // you will need to use addEventListener

        // add span holding description
        var spanText = document.createElement('span');
        spanText.textContent = todo.description;
        todoNode.appendChild(spanText);

        // buttons div tag to hold two buttons
        var buttons = document.createElement('div');
        buttons.classList.add("buttons");

        // this adds the delete button
        var deleteButtonNode = document.createElement('button');
        deleteButtonNode.classList.add("remove");
        deleteButtonNode.innerHTML = removeSVG;

        deleteButtonNode.addEventListener('click', function(event) {
            var newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });
        todoNode.addEventListener('click',function(e){
            console.log(todo.id);

        });

        var complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = completeSVG;


        complete.addEventListener('click', function(event) {
            var newState = todoFunctions.markTodo(state, todo.id);
            update(newState);
            ;
        });
        buttons.appendChild(deleteButtonNode);
        buttons.appendChild(complete);
        todoNode.appendChild(buttons);



        // add markTodo button

        // add classes for css

        return todoNode;
    };

    // bind create todo form

    document.getElementById('add').addEventListener('click', function(e) {
        e.preventDefault();
        console.log(document.getElementById('tasktoadd'));
        // https://developer.mozilla.org/en-US/docs/Web/Events/submit
        // what does event.preventDefault do?
        // what is inside event.target?
        //var description = '?'; // event.target ....
        var value = document.getElementById('tasktoadd').value;
        console.log(value);

        // Update : needed and if to stop blank values
        if (value){
            var newtodoobj = {
                description: value
            };

            // hint: todoFunctions.addTodo
            var newState = todoFunctions.addTodo(state,newtodoobj);// ?? change this!
            update(newState);
        }


    });


    // you should not need to change this function
    var update = function(newState) {
        state = newState;
        renderState(state);
    };

    // you do not need to change this function
    var renderState = function(state) {


        var taskLeft = todoFunctions.sortTodos(state.slice(), false);
        var taskCompleted = todoFunctions.sortTodos(state.slice(), true);

        var todoListNode = document.createElement('ul');

        taskLeft.forEach(function(todo) {
            todoListNode.appendChild(createTodoNode(todo));
        });

        // you may want to add a class for css
        container.replaceChild(todoListNode, container.firstChild);

        var CompleteTodoListNode = document.createElement('ul');
        CompleteTodoListNode.classList.add('completed')

        taskCompleted.forEach(function(todo) {
            CompleteTodoListNode.appendChild(createTodoNode(todo));
        });

        // you may want to add a class for css
        completedContainer.replaceChild(CompleteTodoListNode, completedContainer.firstChild);
        localStorage.setItem("state", JSON.stringify(state));
        //console.log(JSON.parse(localStorage.getItem("state")))
    };

    if ((container)||(completedContainer)){
        renderState(state)
    } ;
})();
