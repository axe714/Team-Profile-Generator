const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const generator = require("./dist/generator.js");
const fs = require("fs");
const teamArray = [];
const companyName = [];

function starterQuestion() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "companyName",
        message: "What is your company's name?",
        default: "Cool company, inc.",
      },
    ])
    .then((responses) => {
      companyName.push(responses.companyName);
      console.log("Company Name: ", companyName);
      teamGenerator();
    });
}

function teamGenerator() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I don't want to add any more employees",
        ],
      },
    ])
    .then((responses) => {
      switch (responses.employeeType) {
        case "Manager":
          generateManager();
          break;
        case "Engineer":
          generateEngineer();
          break;
        case "Intern":
          generateIntern();
          break;
        case "I don't want to add any more employees":
          buildTeam();
          break;
      }
    });
}

const generateManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your team manager's name?",
        default: "Allec A.",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your team manager's ID?",
        default: `001`,
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your team manager's email?",
        default: `axe@github.com`,
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your team manager's office number?",
        default: "123",
      },
    ])
    .then((responses) => {
      const manager = new Manager(
        responses.managerName,
        responses.managerId,
        responses.managerEmail,
        responses.managerOfficeNumber
      );
      teamArray.push(manager);
      console.log("Team Array ------- ", teamArray);
      teamGenerator();
    });
};

const generateEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
        default: "Brian A.",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's ID?",
        default: "002",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        default: "brian@github.com",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's Github username?",
        default: "BrianGitHub",
      },
    ])
    .then((responses) => {
      const engineer = new Engineer(
        responses.engineerName,
        responses.engineerId,
        responses.engineerEmail,
        responses.engineerGithub
      );
      teamArray.push(engineer);
      console.log("Team Array ------- ", teamArray);
      teamGenerator();
    });
};

const generateIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        default: "Kevin L.",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's ID?",
        default: "003",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        default: "kevin@github.com",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
        default: "Imperial Middle School",
      },
    ])
    .then((responses) => {
      const intern = new Intern(
        responses.internName,
        responses.internId,
        responses.internEmail,
        responses.internSchool
      );
      teamArray.push(intern);
      console.log("Team Array ------- ", teamArray);
      teamGenerator();
    });
};

function buildTeam() {
  generator(teamArray, companyName);
}

function init() {
  starterQuestion();
}

init();
