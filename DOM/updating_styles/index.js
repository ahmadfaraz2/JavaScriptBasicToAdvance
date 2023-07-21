// ------------Updates Style of HTML elements------------------

// var selectedElement = getElementById("selector")
// selectedElement.style.{propertyName} = Value;

// Example
//        selectedElement.style.width = "300px"


var countDownElement = document.getElementById("countdown");
var bgImage = document.getElementById("bg-image");

var initialCountDownVal = countDownElement.innerHTML;


var interval = setInterval(function () {
    initialCountDownVal = initialCountDownVal > 0 ? initialCountDownVal - 1 : 0;
    // updating value
    countDownElement.innerHTML = initialCountDownVal;
    countDownElement.style.fontSize = initialCountDownVal * 100 + "px";

    bgImage.style.width = initialCountDownVal * 10 + "%";

    console.log(initialCountDownVal * 100 + "px");
    if (initialCountDownVal <= 0) {
        clearInterval(interval);
    }

}, 1000)








// -------------------------Other methods----------------------------
// if (initialCountDownVal > 0) {
    //     countDownElement.innerHTML = initialCountDownVal -= 1;
    // }
    // else {
    //     initialCountDownVal = 0;
    // }