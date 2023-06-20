// ----------------------------------Intro About Type Coercion-----------------------------------

// Type coercion is a conversion of value from one type to another datatype.
// This can be turned programmatically by us or automatically by JavaScript.


// --------------------------------Implicit and Explicit Type Coercion----------------------------

// Implicit type coercion:
//       is done automatically by JavaScript.
// Explicit type coercion:
//       is done programmatically by us(Developer).



var mStr = "Hello";
var mNum = 5;
var mSum = mStr + mNum;

console.log(mSum);
console.log(typeof (mSum));


console.log('hola' + true);
console.log(typeof ('hola' + true));


console.log(null + 'hola');
console.log(typeof (null + 'hola'));


console.log(50 + 'hola');
console.log(typeof (50 + 'hola'));

if ('Rocket' + 10) {
    console.log("True");
}
else {
    console.log("False");
}

// 0, null, undefined, '' are treated as false in "if condition".