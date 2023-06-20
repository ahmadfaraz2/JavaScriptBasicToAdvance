// Note: 
// ""==" operator just compare the values not the type of object.
// For Example:
//         For "==":      int 5 is equal to str '5'.
// "===" Operator also compare the type as well as value of object.
// For Example:
//          For "===":     int 5 is not equal to str '5'.

// == -> check if first value equal to second value
if (5 == '5') {
    console.log(true);
}
else {
    console.log(false);
}

if (5 === 5) {
    console.log(true);
}
else {
    console.log(false);
}

if (5 != '5') {
    console.log(true);
}
else {
    console.log(false);
}

if (5 !== '5') {
    console.log(true);
}
else {
    console.log(false);
}

// < -> check if first value is less than the sencond value
if (15 < 15) {
    console.log(true);
}
else {
    console.log(false);
}

// <= -> check if first value is less than equal to the second value
if (15 <= 15) {
    console.log(true);
}
else {
    console.log(false);
}

// > -> check if first value is greater than the other value
if (15 > 15) {
    console.log(true);
}
else {
    console.log(false);
}

// >= -> check if first value is greater or equal to the other value
if (15 >= 15) {
    console.log(true);
}
else {
    console.log(false);
}


//Logical Operators &&, ||, !
if (5 > 10 && 10 > 15) {
    console.log(true);
}
else {
    console.log(false);
}

console.log(5 < 10 || 10 < 15);

console.log(!(5 < 10));


//Ternary Operator      Syntax: (expression) ? a : b
20 < 3 ? console.log(true) : console.log(false);