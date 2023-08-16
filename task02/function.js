"use strict";
// no input, no output (return)
function greet() {
    console.log("Hello World");
}
greet();
// no input, return output
function generaterandomnumber() {
    return Math.random();
}
let randomnumber = generaterandomnumber();
console.log(randomnumber);
//input, no output (return)
function number(num) {
    console.log(num);
}
number(5);
//input, return output
function number1(a, b) {
    return a + b;
}
console.log(number1(2, 3));
//simple  function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
//arrow function
const add1 = (a, b) => a + b;
console.log(add1(2, 3));
