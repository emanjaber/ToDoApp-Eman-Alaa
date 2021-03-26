let todos = [];
var todoInput = document.getElementById('Basic').textContent;
// var myInput = todoInput.textContent;
const toDoList = document.getElementById('myToDoList');
const insertInput = document.getElementById('insert');
let listContainer = document.querySelector("myToDoList")

// insertInput.addEventListener('click', function(element) {
//   addTodo(todoInput.value); 
// });
insertInput.addEventListener("click" , addTodo);
 
// function addTodo(item) {
//      let add1= document.createElement("div")
//      let str= document.createTextNode(item)
//      add1.appendChild(str)
//       let add2= document.querySelector(".content")
//       add2.appendChild(add1)
//       todoInput.value = '';
//     }
  
function addTodo(item){

  if (todoInput !== "") {
  let myStore = JSON.parse(localStorage.getItem("myTasks"));
      if(myStore !== null){
          myStore.push(todoInput.value);
          localStorage.setItem("myTasks", JSON.stringify(myStore))
            /* create my task  */
              creatMyTask(todoInput.value);
              todoInput.value = null;
      }else{

          todos.push(todoInput.value);
          localStorage.setItem("myTasks", JSON.stringify(todos))
  
          /* create my task  */
          creatMyTask(todoInput.value);
          todoInput.value = null;
  
      }

  } else {
      alert("Please enter our task")
  }
}

function creatMyTask (currentValue){

  var task = document.createElement("li");
  task.textContent = currentValue;
  myToDoList.appendChild(task);
  currentValue = null;
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  task.appendChild(span);
  // span.addEventListener("click", deleteTask)

}

/* onload function */
window.onload = function(){

  let storedData = JSON.parse(localStorage.getItem("myTasks"))

  if(storedData !== null){
      for(let i=0; i<storedData.length; i++){

          creatMyTask(storedData[i])
      }
  }

}


  
