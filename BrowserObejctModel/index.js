var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-item');
var btnUpdate = document.getElementById('update-item');
var btnRemove = document.getElementById('remove-item');

var currentInputValue = '';
inputBox.addEventListener('input', function (e) {
    currentInputValue = e.target.value;
});

inputBox.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addListItem();
    }
});

function createNewNode() {
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode(currentInputValue)
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount + 1);

    return newListElement;
}

function addListItem() {
    if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
        var newListElement = createNewNode();

        list.appendChild(newListElement);
        console.log(list.childElementCount);

        inputBox.value = ''
        currentInputValue = ''
    } else {
        alert('Please enter a valid TODO item')
    }
}

btnAdd.addEventListener('click', addListItem);

btnUpdate.addEventListener('click', function () {
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
});

btnRemove.addEventListener('click', function () {
    var firstElement = list.firstElementChild;

    list.removeChild(firstElement);
});



// ================================
// Intro to Browser Object Model
// ================================

/*

BOM (Browser Object Model) repersents teh current browser
window. The main purpoe of Browser Object Model is to manipulate
the properties and methods which are associated with the 
browser window


                                  Window                  
        |---------------|------------|--------------|-------------|
        |               |            |              |             |
    Document         History       Location      Screen       Navigator 
    
    Document: It represents the web page structure and content in a tree format.

    History: It holds the data about the urls that has been visited by the user.

    Screen: It holds the information about the screen like width and height.

    Navigator: The navigator object information about the user's browser.

===========================
        History
===========================

The JavaScript history object represents an array of URLs
visited by the user.

It gives us two methods:
-back() --It loads the previous page from the browser history.
-forward() --It loads the next page from the browser history.



==============================
       Location
==============================       =======================

window.location.href;

window.location.hostname;

window.location.host;

window.location.pathname;

window.location.search;

window.location.assign("www.google.com");

*/