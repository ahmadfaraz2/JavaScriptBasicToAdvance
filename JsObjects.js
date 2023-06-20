var mCars = {
    "p1": "350 kmph",
    "gallardo": "320 kmph",
    "veyron": "409 kmph",
    "agera": "429 kmph",
}

console.log(mCars);
console.log(typeof (mCars));

var mAgera = {
    name: "Agera",
    manufacturer: {
        name: "Koeingsegg",
        location: "Sweden",
    },
    tospeed: 429,
    color: "Black",
    spoilers: false,
    applyBrakes: function () {
        setTimeout(function () {
            console.log("Car Stopped");
        }, 5000)
    }
}

console.log(mAgera.name);
console.log(mAgera.tospeed);
console.log(mAgera.manufacturer);
console.log(mAgera.manufacturer.location);
console.log(mAgera.applyBrakes());
console.log(mAgera.applyBrakes);