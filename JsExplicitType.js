// Explicit type coercion:
//       is done programmatically by us(Developer).


var mNum = 15;

// To String
console.log(typeof (mNum));
console.log(String(mNum), typeof (String(mNum)));
console.log(String(-98.10), typeof (String(-98.10)));
console.log(String(null), typeof (String(null)));
console.log(String(undefined), typeof (String(undefined)))

// To Number
console.log(Number('2'), typeof (Number('2')));
console.log(Number(true), typeof (Number(true)));
console.log(Number(false), typeof (Number(false)));
console.log(Number('-90.234'), typeof (Number('-90.234')));
console.log(Number('apple'), typeof (Number('apple')));

// To Boolean
console.log(Boolean(1), typeof (Boolean(1)));
console.log(Boolean(0), typeof (Boolean(0)));
console.log(Boolean('apple'), typeof (Boolean('apple')));
console.log(Boolean(null), typeof (Boolean(null)));
console.log(Boolean(undefined), typeof (Boolean(undefined)));
console.log(Boolean(''), typeof (Boolean('')));