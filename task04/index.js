import inquirer from 'inquirer';
import chalk from 'chalk';
import showBanner from 'node-banner';
(async () => {
    await showBanner('Details', 'of a person');
})();
const detail = await inquirer.prompt([
    {
        name: 'Username',
        type: 'input',
        message: 'What is your username?',
        default: 'abc'
    },
    {
        name: 'gender',
        type: 'list',
        message: 'What is your gender?',
        choices: ['male', 'female'],
        default: 'female'
    },
    {
        name: 'age',
        type: 'number',
        message: 'How old are you?',
        validate: function (age) {
            if (age < 20) {
                return 'You are too young';
            }
            return true;
        }
    },
    {
        name: 'gender',
        type: 'list',
        message: 'What is your gender?',
        choices: ['male', 'female'],
        default: 'female'
    },
]);
console.log(chalk.blue(detail.Username));
console.log(chalk.bgGreen(detail.age));
console.log(chalk.underline(detail.gender));
