// ------------------------Keyboard Events-----------------------------

// There are 3 keyboards events:
// -keydown:
//      It is triggered when any key is pressed on the keyboard.

// -keyup:
//      It is triggered when any key is released after it's keydown event.

// -keypress:
//      It is triggered when any key except Shift, Function, CapsLock is in
//      pressed position.


// document.body.addEventListener("keydown", function (e) {
//     var key = e.keyCode;
//     if (key === 16) {
//         console.log("Keydown for keycode => " + key);
//     }
// });

// document.body.addEventListener("keyup", function (event) {
//     var key = event.keyCode;
//     if (key === 16) {
//         console.log("KeyUp for keycode => " + key);
//     }
// });

// document.body.addEventListener("keypress", function (e) {
//     var key = e.keyCode;
//     if (key === 16) {
//         console.log("Keypress for keycode => " + key);
//     }
// });


// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }


// function playSound(e) {
//     const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
//     const key1 = document.querySelector("div[data-key='${e.keyCode}']");

//     if (!audio) return;

//     key1.classList.add("playing");
//     audio.currentTime = 0;
//     audio.play();
// }

// const keys = Array.from(document.querySelectorAll(".key"));
// keys.forEach(key => key.addEventListener("transitioned", removeTransition));
// window.addEventListener("keydown", playSound);


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);