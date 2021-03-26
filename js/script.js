let todos = [];
const todoInput = document.getElementsByClassName('Basic');
const insertInput = document.getElementById('insert');

insertInput.addEventListener('click', function(element) {
  element.preventDefault();
  addTodo(todoInput.value); 
});
 
function addTodo(item) {
    if (item !== '') {
      const todo = {id: Date.now(),name: item, completed: false };
      todos.push(todo);
      addToLocalStorage(todos);
      todoInput.value = '';  //  clear the input 
    }
  }
// ******************************************

  
  
