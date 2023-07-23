// There are two ways we can get Element style value:

// var selectedElement = getElementById("selector")/querySelector("selector");

// Inline Styles:
// Syntax: selectedElement.style.{inline-style-property};
// For Example: selectedElement.style.width

// CSS File:
// Syntax: window.getComputedStyle(selectedElement).{style-property-name};
// For eg: window.getComputedSTyle(selectedElement).width

var mainHeading = document.getElementById("main-heading");
var btnDecreaseFont = document.getElementById("btn-decrease");
var btnIncreaseFont = document.getElementById("btn-increase");
console.log(mainHeading);

// method to access CSS File styles
//console.log(window.getComputedStyle(btnDecreaseFont).marginRight);

// method to access Inline styles
//console.log(btnIncreaseFont.style.marginRight);

var initialFontSize = window.getComputedStyle(mainHeading).fontSize; //24px
initialFontSize = parseInt(initialFontSize.substring(0, (initialFontSize.length - 2)));



btnIncreaseFont.onclick = function () {
    initialFontSize += 10;
    mainHeading.style.fontSize = initialFontSize + "px"; // updating value -- assigning it to mainHeading fontSize 
};


btnDecreaseFont.addEventListener("click", function () {
    initialFontSize -= 10;
    mainHeading.style.fontSize = initialFontSize + "px";
});
