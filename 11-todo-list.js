const todoList = [{
  name : 'make dinner', 
  dueDate: '2022-12-22'
}, {
  name: 'study',
  dueDate: '2022-12-22'
}];
 
renderTodoList();

function renderTodoList() {
            let todoListHTML = '';


            // to generate the HTML for each todo item in the todoList array
            // we will use a for loop to iterate through the todoList array
            // and for each todo item, we will create a paragraph element with the todo item text
            // and add it to the todoListHTML string.
            // finally, we will set the innerHTML of the todoList element to the todoListHTML string.
            // this will render the todo list on the page.
            // console.log(todoList);
            for(let i=0; i<todoList.length; i++) {
              const todo = todoList[i];
              const html = `
              <p>
                  ${todo} 
                  <button onclick = "
                todoList.splice(${i},1);
                renderTodoList();

                
                  "> Delete </button> 
              </p>`
              todoListHTML += html;

            }
            console.log(todoListHTML);


            document.querySelector('.js-todo-list').innerHTML = todoListHTML; // putting the todolistHTML array of lists, into the HTML div element.
            console.log(todoListHTML);
}

function addTodo() {
          const inputElement = document.querySelector('.js-name-input');
          const name = inputElement.value;
          //  console.log(name);
          todoList.push(name);
          console.log(todoList);

            inputElement.value = '';
            renderTodoList();
        }

