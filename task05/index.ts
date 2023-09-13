//union literal
let myName: string | number = "Max";
console.log(myName.toString());

function printid(id: string | number) {
    console.log(id);
    id.toString();
} 

printid(123);
    
//narrowing
function printid2(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else if(typeof id === "number") {
        console.log(id.toFixed(2));
    }
}
 
printid2(123.459);
printid2("abc")

let id = {
    name: "Max",
}

function printid3(id: string[] | object) {
    if(Array.isArray(id)){
        (id.join(", "));
    } else {
        (id)
    }
} 
    console.log(printid3(id));
    console.log(printid3(["a", "b", "c"]));
    console.log(printid3({name: "Max"}));


    //alises
    type id =  string | boolean;
    function printid4(ID: id) {
        console.log(ID);
    }
    printid4("123");


    //object
    let person ={
        name: "Max",
        age: 30,
        "person age" : 30,
    }
    console.log(person.age);
    console.log(person["person age"]);


    
    let addressVal = {
        houseNumber: "123",
        street: "Main St",
    };
    
    interface Education {
        school: string;
        degree: string;
    }
    
    interface Person {
        name: string;
        age?: number;
        addressVal: typeof addressVal;
        country: string;
        city: string;
        Education: Education;
        [key: string]: any;
    }
    
    let person2: Person = {
        name: "Max",
        addressVal: addressVal,
        country: "USA",
        city: "Los Angeles",
        Education: {
            school: "UCLA",
            degree: "BS",
        },
    };

    let school2 = person2.Education.school;
    console.log(person2.school2);
    console.log(person2.Education);
    console.log(person2.city);


//interface
interface person3 {
    name: string,
    age: number,
}
interface person3 {
    name: string,
    age: number,
    education: string,
}

interface person4 extends person3 {
    job: string,

}

let person5 : person4 ={
    name: "Max",
    age: 30,
    education: "BS",
    job: "Software Engineer",
}

console.log(person5.education);