// Create a new list item when clicking on the "+" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("Basic").value;
  var t = document.createTextNode(inputValue);
  var divToDo = document.createElement("p");

  divToDo.appendChild(t);
  if (inputValue === "") {
    alert("Nothing to add! Write your task");
  } else {
    document.getElementById("myToDoList").appendChild(li);
  }
  document.getElementById("Basic").value = "";

//  Add a delete icon with every list item created
  var delBtn = document.createElement("button");
  var delI = document.createElement("i");
  divToDo.className = "task";
  delBtn.className = "close";
  delI.className = "far fa-trash-alt";
  delBtn.appendChild(delI);

  li.appendChild(divToDo);
  li.appendChild(delBtn);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "P") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Click on a delete icon to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
