"use strict";
//indexof => to find the index of an element in an array, it also find the 1st index of an element in an array
console.log("INDEXOF()");
let students = ["John", "Mary", "Peter", "Sally", "Jane"];
let x = students.indexOf("Mary");
console.log(x);
let car = ["BMW", 500, "Ford", 300, "Mazda", 300];
let y = car.indexOf(300);
console.log(y);
//=============================================================================================
//lastindexof => to find the last index of an element in an array.
console.log("LASTINDEXOF()");
let z = car.lastIndexOf(300);
console.log(z);
//==================================================================================================
//concat => to join two or more arrays
console.log("CONCAT()");
let person1 = ["Ali", "Sara", "Mohammad"];
let num = [2, 3, 4, 5, 6];
let person2 = ["Ahmed", " Zara", "Ali", "Zia"];
let per_num = ["Ali", 300];
let per_num1 = ["Ali", 300];
// let result = person1.concat(num);// we cannot concat two different data types
let resul = per_num1.concat(per_num);
let result = person1.concat(person2);
console.log(result);
console.log("===========================JOIN()======================================================");
let city = ["Karachi", "Lahore", "Islamabad", 900];
console.log(`Let join cities ${city.join("*")}`);
console.log(`${city.join()}`);
console.log("===========================PUSH()======================================================");
let clients = ["John", "Mary", "Peter", "Sally", "Jane"];
clients.push("Jasmine", "Ali", "Zia");
console.log(clients);
clients.push("Jasmine"); // it will add the same element again and again
console.log(clients);
//clients.push(2, 3); cannot join bcz datatypes are different
console.log("===========================POP()======================================================");
let audiences = ["John", "Mary", "Peter", "Sally", "Jane"];
audiences.pop();
console.log(audiences);
//let audiences = ["John", "Mary", "Peter", "Sally"];
audiences.pop();
console.log(audiences);
console.log("===========================REVERSE()======================================================");
//reverse the array
let subjects = ["english", "urdu", "maths"];
let sub_num = [1, 2, 3, 4, 5, "english"];
console.log(sub_num.reverse());
console.log(subjects.reverse());
console.log("===========================SHIFT()======================================================");
//remove the 1st element, and give the removed elements
// let subjects = ['maths', 'urdu', 'english'  ]
console.log(subjects.shift());
console.log("===========================UNSHIFT()======================================================");
//Add the elements at the 1st index, and give the new array length
// let subjects = [ 'urdu', 'english']
subjects.unshift('chemistry');
console.log(subjects);
// //to count the number of elements in an array
// let subject1 = subjects.unshift('chemistry');
// console.log(subject1);
console.log("===========================SLICE()======================================================");
let names1 = ["John", "Mary", "Peter", "Sally", "Jane"];
console.log(names1.slice(1, 4)); //1st index is included while index is excluded
console.log("===========================SPLICE()======================================================");
let names2 = ["John", "Mary", "Peter", "Sally", "Jane"];
//adding an element
//           add before this index, no. of elements to removed, 
names2.splice(2, 0, "Zia");
console.log(names2); //adding "zia" before 2nd index, and remove 0 (no) element 
//removing an element
//here names2 array will be => names2 = ['John', 'Mary', 'Zia', 'Peter', 'Sally', 'Jane']
names2.splice(2, 2);
console.log(names2); //adding nothing and remove element at 2nd index
//replace one element by 2 elements
// here names2 array will be => names2 = ['John', 'Mary', 'Peter', 'Sally', 'Jane' ]
names2.splice(2, 1, "Zia", "Zainab");
console.log(names2); //adding zia and zainab after 2nd index and remove 1 element at index 2
console.log("===========================TOSTRING()======================================================");
//seperated by comma, and store as a string
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());
//[ 'John', 'Mary', 'Zia', 'Zainab', 'Sally', 'Jane' ]
console.log(names2.toString());
console.log("===========================FILTER()======================================================");
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [1, 2, 4, 5, 7, 8, 10, 1, 3, 11];
console.log(numbers1.filter(n => n % 2 == 0));
console.log(numbers1.filter(n => n % 2 != 0));
console.log(numbers1.filter(n => numbers1.indexOf(n) % 3 == 0));
console.log("===========================MAP()======================================================");
//map => map to any function or a new array
let numbers3 = [1.21, 2.3, 3, 4, 5, 6, 7, 8, 9.5, 10];
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers3.map(n => n * 2)); //map 1 => 1 * 2, n => n * 2
console.log(numbers3.map(n => n * n)); //map 1 => 1 * 1, n => n * n
console.log(numbers3.map(Math.ceil)); //math.ceil => round up to the nearest integer (higher integer)
console.log(numbers3.map((element, index) => element + numbers4[index])); //map the elements of 2 arrays and add
console.log("===========================EVERY()======================================================");
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers5.every(n => n % 2 == 0)); //true;
console.log(numbers5.every(n => n > 0));
function isPositive(num) {
    return num > 0;
}
console.log(numbers5.every(isPositive));
console.log("===========================REDUCERIGHT()======================================================");
//reduceright => add up the elements of an array from right to left like add 10 + 9 + 8 ...
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers6.reduceRight((a, b) => a + b)); //sum of the elements;
console.log(numbers6.reduceRight((a, b) => a * b)); //product of the elements;
let names3 = ["John", "Mary", "Peter", "Sally", "Jane"];
console.log(names3.reduceRight((a, b) => a + b));
//console.log(names3.reduceRight((a, b) => a * b));   => error
console.log(names3.reduceRight((a, b) => a + " " + b, "Hello"));
console.log("===========================REDUCE()======================================================");
//reduce => add up the elements of an array from left to right like add 1 + 2 + 3 ...
console.log(numbers6.reduce((a, b) => a + b)); //sum of the elements;
console.log(numbers6.reduce((a, b) => a * b)); //product of the elements;
//let names3 = ["John", "Mary", "Peter", "Sally", "Jane"];
console.log(names3.reduce((a, b) => a + b));
console.log(names3.reduce((a, b) => a + " " + b));
console.log(names3.reduce((a, b) => a + " " + b, "Hello"));
console.log("===========================SOME()======================================================");
//atleast one of the elements in an array is true
console.log(numbers6.some(n => n % 2 == 0));
console.log("===========================SORT()======================================================");
//sort the array 
let numbers7 = [1, 12, 3, 44, 25, 65, 71, 82, 90, 10];
console.log(numbers7.sort((a, b) => a - b)); //sort the array in ascending order;
console.log(numbers7.sort((a, b) => b - a)); //sort the array in descending order;
//let names3 = ["John", "Mary", "Peter", "Sally", "Jane"];
console.log(names3.sort());
console.log(names3.sort((a, b) => a.localeCompare(b))); //sort the array in ascending order;;
console.log(names3.sort((a, b) => b.localeCompare(a))); //sort the array in descending order;
console.log("===========================FILL()======================================================");
let numbers8 = [1, 12, 3, 44, 25, 65, 71, 82, 90, 10];
//numbers8.fill(value, start index and end index) => start index is included while end index is excluded
console.log(numbers8.fill(0, 3, 5));
console.log(numbers8.fill(1000)); //replace all with the same value
console.log(numbers8.fill(999, 4)); // replace from index 4 to the end of the array
