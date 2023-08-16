//              0           1       2        3                pineapple
let fruits = ["apples", "banana",             "cherry", "mango", "orange"];
console.log(fruits); // ["apples", "banana", "cherry", "mango", "orange"]
console.log(fruits[1]); // banana

// Methods
//push()
fruits.push("pineapple");
console.log(fruits);

//pop()
fruits.pop();
console.log(fruits);


//unshift()
fruits.unshift("kiwi");
console.log(fruits);

//shift()
fruits.shift();
console.log(fruits);

//slice()   take a slice(piece)
//           starting index, ending index(exclude)
let fruits1 =fruits.slice(    1,              3);
console.log(fruits1);

//splice,     modify= add, remove, replace
//            starting index, number of elements to be deleted, new elements
fruits.splice(2,0,"grapes", "watermelon");
console.log(fruits);