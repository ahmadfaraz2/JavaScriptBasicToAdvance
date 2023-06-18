var exampleString = "This is Javascript tutorial";

// toUpperCase() - It converts our string -> uppercase characters
console.log(exampleString.toUpperCase());

// toLowerCase() - In converts our string -> lowercase characters
console.log(exampleString.toLowerCase());

// cnocat() - In merges two or more strings
var firstName = "JavaScript";
var lastName = "Playground";
console.log(exampleString.concat(firstName));
console.log(exampleString.concat(" ", firstName));
console.log(exampleString.concat(" ", firstName, " ", lastName))

// We can also use '+' to concat two or more strings
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// trim() - It removes extra spaces
var extraSpaceString = "        mystring        ";
console.log(extraSpaceString.trim());

var extraSpaceString2 = "        my string        ";
console.log(extraSpaceString2.trim());

// chartAt() -> This take position as an arg and
// returns the character at that position
var charAtString = "This is my test string";
console.log(charAtString.charAt(5));
console.log(charAtString.charAt(10));
console.log(charAtString.charAt(11));


// split() -> spits our string on the basis of the 
// arguments passed
var sampleString = "This is my sample string";
console.log(sampleString.split(" "));

var sampleString2 = "This,is,my,sample,string";
console.log(sampleString2.split(","));

var sampleString3 = "This is awesome";
console.log(sampleString3.split());
