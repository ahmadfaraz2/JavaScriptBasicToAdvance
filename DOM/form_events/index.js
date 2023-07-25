// -------------------Form Events--------------------

// -change
// -foucs
// -blur
// -submit

// --change
// The change event is triggered when the content of "input field" is changed or
// when the user selectes a value from the dropdown etc

// --focus
// The focus event is triggered when the input field is focused by the user.

// --blur
// The blus event is triggered when the input field loses focus.

// --submit
// The submit event is triggered when the submit button is clicked by the user.


var username = document.getElementById("username");
var loginForm = document.getElementById("login-form");

// username.addEventListener("change", function () {
//     console.log("Value Changed!");
// });

username.addEventListener("input", function (event) {
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    username.value = currentValue;
});


username.addEventListener("focus", function () {
    console.log("Element Focused!");
});

username.addEventListener("blur", function () {
    console.log("Element Lost Focused!");
});

loginForm.addEventListener("submit", function (e) {
    alert("Submit Button Clicked!");
    e.preventDefault();
});


// --------------Difference between "change" and "input" events"---------------

// input---
// input event occurs immediately after the value of an element has changed.

// chnage--
// change occurs when the element loses focus, after the content has been changed.


