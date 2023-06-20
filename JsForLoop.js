var mList = [1, 2, 3, 4, 5];
// var pos;
// for (pos = 0; pos < mList.length; pos++) {
//     console.log("Position => " + pos + " Value => " + mList[pos]);
// }


// Break Keyword

// var pos;
// for (pos = 0; pos < mList.length; pos++) {
//     if (pos >= 3) {
//         break;
//     }
//     console.log("Position => " + pos + " Value => " + mList[pos]);
// }


// Continue Keyword

var pos;
for (pos = 0; pos < mList.length; pos++) {
    if (pos % 2 === 0) {
        continue; // it says if this condition occur leave this and execute the rest of the block.
    }
    console.log("Position => " + pos + " Value => " + mList[pos]);
}