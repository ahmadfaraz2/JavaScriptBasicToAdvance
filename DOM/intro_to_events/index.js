// -------------------Ways to handle events in JavaScript------------------

// var selectedElement = document.getElementById("selector");

// Method 1------------------- Using Events Properties
// Syntax: selectedElement. {eventProperty} = function() {}
// For Example: seletedElement.onclick = function() {}


// Method 2------------------- Using addEventListener()
// Syntax: selectedElement.addEventListener({eventName}, function() {})
// For Example: selectedElement.addEventListener("click", fucntion() {})





var btn = document.getElementById("btn-click");
var mainDiv = document.querySelector("header div");

function onBtnClick() {
    mainDiv.style.backgroundColor = "rgb( " + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
}

btn.addEventListener("click", onBtnClick);






// btn.onclick = onBtnClick;

// ---------------------------Testing Content to Write and try function-------------- 

/* var randomNum = Math.floor(Math.random() * 255);
alert("rgb( " + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"); */