var list = document.getElementById("todo-list");
var btn = document.getElementById("add-item");
var todoInput = document.getElementById("todo-input");

var currentInputValue = "";
todoInput.addEventListener("input", function (e) {
    currentInputValue = e.target.value; // accessing the value user will provide in text box.
    console.log(e.target.value);
});


btn.addEventListener("click", function () {
    if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== "") {
        var newElement = document.createElement("li");
        var textNode = document.createTextNode(currentInputValue);
        newElement.appendChild(textNode);
        newElement.id = "item" + (list.childElementCount + 1);
        list.appendChild(newElement);

        todoInput.value = "";
        currentInputValue = "";
    }
    else {
        alert("Please enter a valid ToDo value");
    }
});




// list.childElementCount // its a property which tells the number of childer.


// function createNode() {
//     var newElement = document.createElement("li");
//     var textNode = document.createTextNode(currentInputValue);
//     newElement.appendChild(textNode);
//     newElement.id = "item" + (list.childElementCount + 1);
// }