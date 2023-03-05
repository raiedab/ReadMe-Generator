// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'Please input your first and last name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the name of your project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'please provide you github username',
        name: 'Github',
    },
    {
        type: 'input', 
        message: 'please provide a link to your GitHub repository',
        name: 'repository',
    },
    {
        type: 'input',
        message: 'What features does your project use?',
        name: 'features',
    },
    {
        type: 'list',
        message: 'which license does your project use?',
        name: 'license',
        choices: [ 
            'Apache',
            'GNU General Public License',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License',
            'Creative Commons Zero',
            'Eclipse Public License',
            'GNU Affero General Public License',
            'GNU General Public License',
            'GNU Lesser General Public License',
            'Mozilla Public License',]
    },
    {
        type: 'input',
        message: 'What commands are needed to test this project?',
        name: 'commands',
    },
    {
        type: 'input',
        message: "What are the necessary dependencies that need to be installed?",
        name:'dependencies',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('Your README.MD has been Created!')
        )};

// TODO: Create a function to initialize app
function init(){
   inquirer.prompt(questions)
    .then(data => {
        writeToFile("README.md", generateMarkdown(data))
        })
    };

// Function call to initialize app
init();
