// .splice() -> Delete and add items in Arrays
// Syntax: 
//    1st tells where to start
//    2nd tells how many items to be deleted
//    3rd and 4th and so on tells what items to be added

var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina'];
mFriends.splice(3, 0, 'Donna', 'Rachel');
console.log(mFriends);

mFriends.splice(0, 0, 'Harvey'); // add item at the start of the array
console.log(mFriends);

// Delete item at specific position
mFriends.splice(2, 1);
console.log(mFriends);

mFriends.splice(0, 2);
console.log(mFriends);

// Concatenation
var mOfficeFriends = ['Nina', 'Aron', 'Katie', 'Vice', 'Paula'];
var mAllFriends = mFriends.concat(mOfficeFriends);

console.log("======================================================");
console.log(mFriends);
console.log(mOfficeFriends);
console.log(mAllFriends);

// Sorting Ascending and Descending 
mAllFriends.sort();
console.log(mAllFriends);
// Descending
mAllFriends.reverse();
console.log(mAllFriends);
