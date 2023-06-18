var myFirstString = "This is a string for JavaScript string functions, JavaScript";
console.log(myFirstString);

// Returns the length of the string
console.log(myFirstString.length);

// Find index of a string inside another string
console.log(myFirstString.indexOf('JavaScript'));
console.log(myFirstString.indexOf('This'));

// Find LAST index of a string inside another string
console.log("-------------.lastIndexOf() function--------");
console.log(myFirstString.lastIndexOf('JavaScript'));
console.log(myFirstString.lastIndexOf("This"));

// Get a part of our string slice(start, end)
console.log("------------.slice() function----------------");
console.log(myFirstString.slice(0, 4));
console.log(myFirstString.slice(21, 31));
console.log(myFirstString.slice(-10));
console.log(myFirstString.slice(5)); // leave the first 5 characters.

// Get sub string function - substr(startPos, length)
console.log("-------------.substr() function-------------");
console.log(myFirstString.substr(0, 4));
console.log(myFirstString.substr(21, 10));
console.log(myFirstString.substr(21));
