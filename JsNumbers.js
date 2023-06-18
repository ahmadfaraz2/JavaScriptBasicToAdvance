var num1 = 10; // Integer
var num2 = 10.9; // Decimal Number

console.log(typeof (num1));
console.log(typeof (num2));

// Addtion
var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum)

// Substraction
var diff = num3 - num1;
console.log(diff);

// Multiplication 
var mul = num3 * num1;
console.log(mul);

// Division
var div = num3 / num1;
console.log(div);

var divByZero = num3 / 0;
console.log(divByZero);
console.log(typeof (divByZero));


var mulByString = num3 * 'A';
console.log("Mulitpley by String: ", mulByString, "NaN refers to 'Not a Number'");
console.log(typeof (mulByString));
