const inquirer = require('inquirer');
const fs = require('fs');
// const template = require('./src/template');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
// const Intern = require('./lib/Intern');

class Prompt {
    constructor() {
        this.team = [];
    }

    buildRoster() {
        this.addManager();
    }

    addManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your Team Manager's name?",
                    name: "managerName",
                    default: "Team Manager is missing their name.",
                },
                {
                    type: "input",
                    message: "What is your Team Manager's employee id?",
                    name: "managerId",
                    default: "Team Manager is missing their id number.",
                },
                {
                    type: "input",
                    message: "What is your Team Manager's email address?",
                    name: "managerEmail",
                    default: "Team Manager is missing email address.",
                },
                {
                    type: "input",
                    message: "What is your Team Manager's office number?",
                    name: "managerOfficeNumber",
                    default: "Team Manager is missing office number.",
                },
            ])
            
            .then(({ managerName, managerId, managerEmail, managerOfficeNumber }) => {
                const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
                this.team.push(manager);
                this.addEmployee();
            })
    }

    addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your Engineer's name?",
                    name: "engineerName",
                    default: "Engineer is missing their name.",
                },
                {
                    type: "input",
                    message: "What is your Engineer's employee id?",
                    name: "engineerId",
                    default: "Engineer is missing their id number.",
                },
                {
                    type: "input",
                    message: "What is your Engineer's email address?",
                    name: "engineerEmail",
                    default: "Engineer is missing email address.",
                },
                {
                    type: "input",
                    message: "What is your Engineer's Github?",
                    name: "engineerGithub",
                    default: "Engineer is missing Github profile.",
                },
            ])
        
            .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
                const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
                this.team.push(engineer);
                this.addEmployee();
            })
    }

    // addIntern() {}

    addEmployee() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Would you like to add anyone else to your team?',
                    choices: ['Engineer', 'Intern', 'No one else to add'],
                    name: 'teamAddendum',
            
                },
            ])
            .then(({ teamAddendum }) => {
                if (teamAddendum == 'Engineer') {
                    this.addEngineer();
                // } else if (teamAddendum == 'Intern') {
                    // this.addIntern();
                } else {
                    console.log(this.team);
                }
            });
    };


};                

module.exports = Prompt;
 
// {
    // recursion loop ended with a promise
    // const teamRoster


// .then(response => {

//     const teamRoster = template(response);

    // fs.writeFile('teamRoster.html', teamRoster, (err) =>
    //     err ? console.error(err) : console.log('Generating teamRoster.html...')
    // );
// });