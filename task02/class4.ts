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

 let groceryItems = ["Bread","cooking oil", "egg","milk","veg", "egg","fruits","egg"]
  let eggCounter=0;


for(let item =0; item < groceryItems.length; item++){

    if(groceryItems[item] == "egg" && eggCounter > 0){
        continue; //skip
    }
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
   
    if(groceryItems[item] == "egg"){
        eggCounter++
    }
}


let firstName = ["Jhon","Smith","Luke","Dan"] //row
let lastName =["Brown","David","Mike"] //col
let fullName= [];

for(let fName = 0; fName < firstName.length; fName++){
lastName[fName]
   for(let lName= 0; lName < lastName.length; lName++){
       console.log(`Full Name will be ${firstName[fName]} ${lastName[lName]}`);
       fullName.push(`${firstName[fName]} ${lastName[lName]}`)
   }
}

console.log(fullName);