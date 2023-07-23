console.log("Js File loaded");

var countDownElement = document.getElementById("countdown");
var bgImageElement = document.getElementById("bg-image");

// Updatin class name
// bgImageElement.className = "BackImage"; // through this we can update class name.
// console.log(bgImageElement);

// initialCountDownVal = 10;
var initialCountDownVal = countDownElement.innerHTML;

// The setInterval() function is commonly used to set a delay for
// functions that are executed again and again, such as animations. 

setInterval(function () {
    initialCountDownVal = initialCountDownVal > 0 ? initialCountDownVal - 1 : 0;
    countDownElement.innerHTML = initialCountDownVal;

    var bgImagePath = initialCountDownVal % 2 === 0 ? "assets/background-1.jpg" : "assets/background-2.jpg";
    bgImageElement.src = bgImagePath;

    console.log("Interval Running");
}, 1000)












// -----------------------------Other Methods-----------------------------

// if (initialCountDownVal > 0) {
    //     initialCountDownVal -= 1;
    // }
    // else {
    //     initialCountDownVal = 0;
    // }

    // tranary operator 
    // variable = condition ? true : false;

//  var bgImagePath = "";
//  if (initialCountDownVal % 2 === 0 ){
    //      bgImagePath = "assets/background-1.jpg";
    // } 
    // else {
    //      bgImagePath = "assets/background-2.jpg";
    //}
   