// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require ('fs')

// TODO: Create an array of questions for user input
const questions = [
   
        {
            type:"input",
            message: "What is the title of your project?",
            name: "projectTitle"
        },
        {
            type:"input",
            message: "What is the project description?",
            name: "description"
        },
        {
            type:"input",
            message: "What is the project's installation instructions?",
            name: "installation"
        },
        {
            type:"input",
            message: "What is the project's usage information?",
            name: "usage"
        },
        {
            type:"input",
            message: "What is the project's contribution guidlines?",
            name: "contributing"
        },
        {
            type:"input",
            message: "What is the project's test instructions",
            name: "tests"
        },
        {
            type:"list",
            choices: ["MIT","Apache","Mozilla","None"],
            name: "license",
            message: "What is your project licensed under?"
        },
        {
            type:"input",
            message: "What is your GitHub username?",
            name: "GitHub"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        }


];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFileSync("newreadme.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
