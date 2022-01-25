const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/template');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const testEmployee = new Employee('Chris', 27, 'chris@email.com');
testEmployee.




// inquirer
//     .prompt([
//         // Team Manager Section
//         {
//             type: "input",
//             message: "What is your Team Manager's name?",
//             name: "managerName",
//             default: "Team Manager is missing their name."
//         },
//         {
//             type: "input",
//             message: "What is your Team Manager's employee id?",
//             name: "managerId",
//             default: "Team Manager is missing their id number."
//         },
//         {
//             type: "input",
//             message: "What is your Team Manager's email address?",
//             name: "managerEmail",
//             default: "Team Manager is missing email address."
//         },
//         {
//             type: "input",
//             message: "What is your Team Manager's office number?",
//             name: "managerOfficeNumber",
//             default: "Team Manager is missing office number."
//         },
//         // description section
//         {
//             // recursion loop ended with a promise
//             // const teamRoster
//             type: 'list',
//             message: 'Please describe the functionality of your application.',
//             name: 'functionality',
//             default: 'Functionality will be discussed and provided at a later time.'
//         },
//         // installation section
//         {
//             type: 'input',
//             message: 'What are the steps required to install your project?',
//             name: 'installation',
//             default: 'No additional files are needed for installation.'
//         },
//         // usage section
//         {
//             type: 'input',
//             message: 'Please provide instructions on how to use your application.',
//             name: 'usage',
//             default: 'Instructions on usage will be completed at a later time.'
//         },
//         // credits section
//         {
//             type: 'input',
//             message: 'List your collaborators, if any, with links to their GitHub profiles.',
//             name: 'contribution',
//             default: 'No additional collaborators were involved with the development of this project.'
//         },
//         {
//             type: 'input',
//             message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
//             name: 'thirdParties',
//             default: 'No third-party assets were used in this development.'
//         },
//         {
//             type: 'input',
//             message: 'If you followed tutorials, include links to those here as well.',
//             name: 'tutorial',
//             default: 'No tutorials were used during this time.'
//         },
//         // tests section
//         {
//             type: 'input',
//             message: 'Please write a test for your application.',
//             name: 'test',
//             default: 'Test will be written at a later time.'
//         },
//         // questions section
//         {
//             type: 'input',
//             message: 'Please provide a link to your GitHub profile?',
//             name: 'github',
//             default: 'GitHub link is not provided'
//         },
//         {
//             type: 'input',
//             message: 'What is your email address?',
//             name: 'email',
//             default: 'No email adddress provided.',
//         },
//     ])

//     .then(response => {
        
//         const teamRoster = template(response);
    
//         fs.writeFile('teamRoster.html', teamRoster, (err) =>
//           err ? console.error(err) : console.log('Generating teamRoster.html...')
//         );
//       });