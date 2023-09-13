"use strict";
//ananomus functions => donot have name
//functional optional parameters
//by default all functions required optional parameters
console.log("============================DEFAULT-PARAMETERS=====================================");
function addnum(a, b) {
    console.log(a + b);
}
addnum(2, 5);
console.log("============================OPTIONAL-PARAMETERS=====================================");
function addnum1() {
    console.log("10");
    return 10;
}
function addnum2(a, b) {
    //console.log(a + b); =>error
    if (typeof b == "number") {
        console.log(a + b);
    }
    else {
        console.log(a);
    }
}
addnum2(2, 3);
addnum2(2);
function addnum3(c, a, b) {
    //console.log(a + b); =>error
    if (typeof b == "number" && typeof a == "number") {
        console.log(a + b + c);
    }
    else {
        console.log(c);
    }
}
addnum3(2);
addnum3(2, 3);
addnum3(2, 1, 3);
//simple function
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
//buildName("Bob");
let result1 = buildName("Bob");
console.log(result1);
let result2 = buildName("Bob", "Adams");
console.log(result2);
// let result3 = buildName("Bob", "Adams", "Sr."); => error
//anonymous functions
var buildName1 = function (firstName, lastName) {
    if (lastName == "string") {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
};
console.log(buildName1("Bob"));
console.log("============================REST-PARAMETERS=====================================");
//as a parameter add array => so we can add as much parameters as needed
function buildName2(firstName, ...restOfNames) {
    return firstName + " " + restOfNames.join(" ");
}
let result4 = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(result4);
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
console.log(buildNameFun("Joseph", "Samuel", "MacKinzie"));
var buildNameFun1 = function (a, ...b) {
    return b.reduce((a, b) => a + b);
};
console.log(buildNameFun1(2, 3, 4, 5, 6));
