// ---------------------------Mouse Events--------------------

// The mouse events are triggered when the different mouse keys are
// presses or released

/*
These are the mouse events available:
  -mousedown: Mousedown event is triggered when either the left or right
              (or middle) mouse key pressed on the HTML element.
  -mouseup: Mouseup event is triggered when either the left or right 
              (or middle) mouse key released after the mousedown event.  
  -click: Click event is triggered when the left mouse button is pressed 
            relased after the mousedown event.
  -dbclick: DoubleClick event is triggered when the left mouse button is
            clicked twice one the same HTML element.
  -mouseover: Mouse over event is triggered when the mouse pointer enters the HTML
            element, and its child elements.
  -mouseenter: Mouse enter event is triggered when the mouse pinter enters the HTML
            element.
  -mousemove: Mouse move event is triggered every time the mouse pointer is moved 
            over the HTML element.

*/


var btn = document.getElementById("top-btn");

btn.addEventListener("mousedown", function () {
    console.log("Mouse Down event occur!");
});

btn.addEventListener("mouseup", function () {
    console.log("Mouse up event occur!");
});

btn.addEventListener("click", function () {
    console.log("Click event occur!");
});

btn.addEventListener("dblclick", function () {
    console.log("Double click event occur!");
});

var over = document.getElementById("over");

var overCount = 0;
over.addEventListener("mouseover", function () {
    var countElement = document.querySelector("#over > p");
    overCount += 1;
    countElement.innerHTML = overCount;
});



var enter = document.getElementById("enter");

var enterCount = 0;
enter.addEventListener("mouseenter", function () {
    var enterElement = document.querySelector("#enter > p");
    enterCount += 1;
    enterElement.innerHTML = enterCount;
});



var move = document.getElementById("move");

var moveCount = 0;
move.addEventListener("mousemove", function () {
    moveElement = move.querySelector("#move > p");
    moveCount += 1;
    moveElement.innerHTML = moveCount;
});