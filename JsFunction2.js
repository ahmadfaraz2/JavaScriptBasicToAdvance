function greetings(name) {
    console.log("Welcome " + name);
}

greetings("Ahmad");
greetings("Abdullah");
greetings("Saad");


function totalSum(num1, num2, num3) {
    console.log("num1 => " + num1);
    console.log("num2 => " + num2);
    console.log("num3 => " + num3);
    if (num3 !== undefined) {
        console.log(num1 + num2 + num3)
    }
    else {
        console.log(num1 + num2);
    }
}

totalSum(2, 5);
//totalSum(4, 6, 23);