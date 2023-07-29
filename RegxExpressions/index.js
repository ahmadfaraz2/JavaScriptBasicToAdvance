// =============================================
//              Regular Expressions
// =============================================


/*
Syntax of Regx: 

       /pattern-string/flags


pattern-string is where you define what strings this pattern should match.

Forward slash: represents the start and end of the pattern-string.

flags: flags are used to define whether you want the search to be case-sensitive 
       or case-insensitive, or whether you want just the first result or all the results.



======================================================
        Quantifiers
======================================================

Quantifiers select a value mulitple times. They also decide how many
times a value should be selected.

Syntax:
        To define a quantifier, we add a value inside curly braces
        after the sets or rangs
For Example:
        [\d]{3}







=======================================================
                    Regex In JavaScript
=======================================================

To define a regular expression in JavaScript there are two ways


First, is the one we learnt so far.
Syntax:
    /pattern/flags



Second, is the inbuilt Regular Expression class
Syntax:
    new RegExp("pattern", flags)    



These are the available methods:

-str.search(pattern) --It returns the string position of the first match
-pattern.test(str) --It returns true if the there is a match and returns 
    false if there is not match.
-str.match(pattern) --It returns the matched string. If the flag is not 
    set to "global" then it returns only the first match. But if the flag
    set to "global" then it returns an array of matches.    


*/

var str = "This is a black ball pen. This pen is really smooth";

var pattern = /pen/;

console.log(str.search(pattern)); // 21
console.log(pattern.test(str)); // true
console.log(str.match(pattern)); // ["pen"]

var pattern2 = /pen/g;
console.log(str.match(pattern2)); // ["pen", "pen"]


var pattern3 = new RegExp("pen", "g");
console.log(str.match(pattern3));

var pattern = /^[\w]{6,8}$/;



// =================================================================
//                   Form Validation
//==================================================================

var username = document.getElementById("username");
var loginForm = document.getElementById("login-form");
var userNameErr = document.getElementById("username-err");

username.addEventListener("input", function (e) {
    var pattern = /^[\w]{6,8}$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);
    if (valid) {
        userNameErr.style.display = "none";
    }
    else {
        userNameErr.style.display = "block";
    }
});