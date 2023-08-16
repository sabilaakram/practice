//var personname = "abc"
//function greet (personname:string){console.log("Hello " +personname.toUpperCase() +"!!");}
//greet(personname);


let Balance = 90;
let MinBalance =  98;
let MaxBalance = 58;

function Credit(Balance:number, MaxBalance:number, MinBalance:number){
    let temp = Balance + MaxBalance + MinBalance;

    if (temp > 250 && temp <= 300) {
        console.log("A")
    } 
    else if(temp > 220 && temp <= 250){
        console.log("B")
    }
    else if(temp > 180 && temp <= 220){
        console.log("C")
    }
    else if(temp > 150 && temp <= 180){
        console.log("D")
    }
    else{
        console.log("Out of range")
    }
}

Credit (Balance, MaxBalance, MinBalance)