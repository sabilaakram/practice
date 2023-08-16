"use strict";
let personName1 = "john";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
function toTitleCase(personName1) {
    return personName1
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(toTitleCase(personName1));
