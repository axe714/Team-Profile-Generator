const inquirer = require("inquirer");
const fs = require("fs");
const teamArray = [];

const starterQuestions = [
    {
        type: "input",
        name: "companyName",
        message: "What is your company's name?"
    },
    {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "I don't want to add any more employees"]
    },
]



const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is your team manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is your team manager's ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your team manager's email?"
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your team manager's office number?"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's ID?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's Github username?"
    }
]

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "internId",
        message: "What is your intern's ID?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?"
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?"
    }
]

inquirer
    .prompt(starterQuestions) 

// switch (answer.employeeType) {
//     case "Manager":
//         inquirer.prompt(managerQuestions)
//         break;
//     case "Engineer":
//         inquirer.prompt(engineerQuestions)
//         break;
//     case "Intern":
//         inquirer.prompt(internQuestions)
//         break;
//     case "I don't want to add any more employees":
//         console.log('Your team is ready!')
// }




