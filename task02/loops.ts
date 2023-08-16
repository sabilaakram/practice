//loop
//For Loop
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < 3; i++) {
    const element = array[i];
    console.log(element);
}


//class example:
let groceryitems = ["Egg", "milk", "bread", "juice", "Egg", "Cheese", "Egg"]
for(let items = 0; items < groceryitems.length; items++) {
    console.log(`Item number: ${items} is ${groceryitems[items]}`); // items = 0, 1, ...       
                          //groceryitems[items] = "Eggs", "milk", "bread", "juice", "Egg", "Cheese", "Egg"
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
}
console.log("====================================================================================================");

// if egg is repeating then:
let groceryitems1 = ["milk", "bread", "juice", "Egg", "Cheese", "Egg", "veg"]
let eggcounter = 0;

for(let items1 = 0; items1< groceryitems1.length; items1++){

    if(groceryitems1[items1] == "Egg" && eggcounter >0){
        continue;
    }

    console.log(`Item number: ${items1} is ${groceryitems1[items1]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);

    if(groceryitems1[items1] == "Egg"){
        eggcounter++;
    }
}


console.log("====================================================================================================");

//if we have more then one common item
/*
let groceryitems2 = ["milk", "bread", "juice", "Egg", "Cheese", "Egg", "veg", "juice"]

let buyitems: string[]  = []; //bcz we have add values in it

for (let items2 = 0; items2 < groceryitems2.length; items2++) {
    
    let val = buyitems.includes(groceryitems2[items2]); //if val is true then continue
    if(val){
        continue;
    }
    console.log(`item no, ${items2} which is ${groceryitems2[items2]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
    buyitems.push(groceryitems2[items2]);
}
*/


//arrange the array in alphabetical order
let names = ["Sara", "John", "Mike", "Ahmed", "Zahid"];
names.sort((a, b) => a.localeCompare(b));   // sort => use to rearrange the element in an array, 
                            // a.localeCompare(b) => use to arrange the element in an array in alphabetical order
                            // a => 1st element, b => 2nd element to be compared
console.log(names);

console.log("====================================================================================================");
    

// 2d rows and columns
let firstnames = ["Sara", "John", "Mike", "Ahmed", "Zahid"];
let  lastnames = ["Brown","Smith","Luke","Dan", "David"];
let fulnamesarray = [];

for (let i = 0; i < firstnames.length; i++){
    let fullnames = `${firstnames[i]} ${lastnames[i]}`
    fulnamesarray.push(fullnames);
}
console.log(fulnamesarray);


console.log("====================================================================================================");


//while loop
let state = "normal";
let counter = 0;

while (state != "hit") {
    console.log("Running...");
    console.log("Running...");
    console.log(counter);
    ++counter;

    if (counter ==3) {
        state = "hit";      
    }
    
}