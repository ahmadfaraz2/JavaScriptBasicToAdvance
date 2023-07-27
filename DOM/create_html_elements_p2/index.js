var list = document.getElementById("todo-list");
var btnAdd = document.getElementById("add-item");
var inputBox = document.getElementById("todo-input");
var btnUpdate = document.getElementById("update-item");
var btnRemove = document.getElementById("remove-item");

currentInputValue = "";
inputBox.addEventListener("input", function (e) {
    currentInputValue = e.target.value;
});

function createNode() {
    var newListElement = document.createElement("li");
    var textNode = document.createTextNode(currentInputValue);
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount + 1);

    return newListElement;
}

function addListItem() {
    if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== "") {
        var newListElement = createNode();
        list.appendChild(newListElement);

        inputBox.value = "";
        currentInputValue = "";
    }
    else {
        alert("Please enter a valid TODO item.")
    }
}

inputBox.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        addListItem();
    }
});


btnAdd.addEventListener("click", addListItem);


btnUpdate.addEventListener("click", function () {
    if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== "") {
        var firstElement = list.firstElementChild;
        var newListElement = createNode();

        list.replaceChild(newListElement, firstElement);
        inputBox.value = "";
        currentInputValue = "";
    }
    else {
        alert("Please enter a valid Todo item.");
    }
});


btnRemove.addEventListener("click", function () {
    var firstElement = list.firstElementChild;
    if (firstElement !== undefined && firstElement !== null && firstElement !== "") {
        list.removeChild(firstElement);
    }
    else {
        alert("There is nothing to remove!");
    }
});