// Syntax: 
//      function functionname(param1, param2, ....., paramN){
// block of code
// }

function mSum() {
    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;
    console.log(sum);
}

mSum();

function mSum2() {
    var num1 = 40;
    var num2 = 20;
    var sum = num1 + num2;

    return sum;
}

console.log(mSum2());


var totalSum = 100 + mSum2();
console.log(totalSum);



// Now Understand the concept of "return" keyword

// "return" keyword basically store the value in the function.
// So to print the function value we have to call the function in console.log().