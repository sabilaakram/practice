"use strict";
//async function always run after the loop
setTimeout(() => {
    console.log('timeout');
}, 1000);
console.log('This is after setTimeout function');
setTimeout(function (a, b) {
    console.log(a + b);
}, 200);
