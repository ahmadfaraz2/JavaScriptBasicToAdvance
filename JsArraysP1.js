var mFriends = ['Shaw', 'Vab', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina'];
console.log(mFriends);
console.log(typeof (mFriends))

console.log(mFriends[2]);
console.log(mFriends[0]);
console.log(mFriends[4]);

// Update a value
mFriends[0] = "Shawn";
console.log(mFriends);

// Add more items
mFriends[6] = 'Alan';
console.log(mFriends);

mFriends[mFriends.length] = "Rob";
console.log(mFriends);

mFriends.push('Jack'); // built-in method to add more items
console.log(mFriends);


// Delete a value
var mName = mFriends.pop() // Remove a last element from the arry and returns it.
console.log(mName);
console.log(mFriends);