import inquirer from "inquirer";
import add from "./addition.js";

//take input through inquirer, store op in separate modules
async function main() {
    const input = await inquirer.prompt([
        {
            name: 'a',
            type: 'number',
            message: 'Enter a number a',
        },
        {
            name: 'b',
            type: 'number',
            message: 'Enter a number b',
        },
        {
            name: 'operation',
            type: 'list',
            message: 'Select an operation',
            choices: ['add', 'subtract', 'multiply', 'divide']
        }
    ]);

    function calculator(a: number, b: number, operation: string){
        switch(operation){
            case 'add':
                return add(input.a, input.b)
            case 'subtract':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                return a / b;
        }
    }
    calculator(input.a, input.b, input.operation);
}
main();