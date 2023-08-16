// for( initialization; condition; iteration)
/*
let groceryItems = ["Bread","cooking oil", "egg","milk","veg", "fruits"]

for(let item =0; item < groceryItems.length; item++){

    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
}
console.log("====================================================================================================");
*/
// ======================================
var groceryItems = ["Bread", "cooking oil", "egg", "milk", "veg", "egg", "fruits", "egg"];
var eggCounter = 0;
for (var item = 0; item < groceryItems.length; item++) {
    if (groceryItems[item] == "egg" && eggCounter > 0) {
        continue; //skip
    }
    console.log("item no, ".concat(item, " which is ").concat(groceryItems[item]));
    console.log("pick from rack");
    console.log("putt in you cart");
    console.log("===========================");
    if (groceryItems[item] == "egg") {
        eggCounter++;
    }
}
var firstName = ["Jhon", "Smith", "Luke", "Dan"]; //row
var lastName = ["Brown", "David", "Mike"]; //col
var fullName = [];
for (var fName = 0; fName < firstName.length; fName++) {
    lastName[fName];
    for (var lName = 0; lName < lastName.length; lName++) {
        console.log("Full Name will be ".concat(firstName[fName], " ").concat(lastName[lName]));
        fullName.push("".concat(firstName[fName], " ").concat(lastName[lName]));
    }
}
console.log(fullName);
