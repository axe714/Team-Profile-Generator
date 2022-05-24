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
      },
    ])
    .then((responses) => {
      companyName.push(responses.companyName)
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
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your team manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your team manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your team manager's office number?",
      },
    ])
    .then((responses) => {
      const manager = new Manager(
        responses.managerName,
        responses.managerId,
        responses.managerEmail,
        responses.officeNumber
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
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's Github username?",
      },
    ])
    .then((responses) => {
      const engineer = new Engineer(
        responses.engineerName,
        responses.engineerId,
        responses.engineerEmail,
        responses.githubUserName
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
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
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
  generator(companyName, teamArray);
}

function init() {
  starterQuestion();
}

init();
