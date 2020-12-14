var userInput = document.getElementById("userInput");
var addButton = document.getElementById("addItem");
var ourList = document.getElementById("list");

function deleteFunction(e) {
  console.log(e.target.parentNode.remove());
}

function strike(e) {
  e.target.classList.toggle("line-through");;
}

function addInList() {
  var li = document.createElement("li");
  var text = document.createTextNode(userInput.value);
  var deleteButton = document.createElement("BUTTON");
  li.addEventListener("click",strike);
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.addEventListener("click",deleteFunction);
  deleteButton.classList.add("deleteButton");
  li.appendChild(text);
  li.appendChild(deleteButton);
  ourList.appendChild(li);
  userInput.value="";
}

addButton.addEventListener("click",function() {
  if(userInput.value != ""){
    addInList();
  }
});

userInput.addEventListener("keypress",function(event) {
  if(event.which==13 && userInput.value != ""){
    addInList();
  }
});
