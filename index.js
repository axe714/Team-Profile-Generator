const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const teamArray = [];

function starterQuestion() {
  inquirer.prompt([
    {
      type: "input",
      name: "companyName",
      message: "What is your company's name?",
    },
  ]).then((responses) => {
    teamGenerator();
})
};

function teamGenerator() {
  inquirer.prompt([
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
  ]).then((responses) => {
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
      }
    });
}

function generateManager() {
  inquirer.prompt([
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
  ]).then((responses) => {
    const manager = new Manager(
      responses.managerName,
      responses.managerId,
      responses.managerEmail,
      responses.officeNumber,
      );
      //WRITE ADDITIONAL LOGIC HERE TO PUSH MANAGER TO TEAM ARRAY
    teamGenerator();
})
};

function generateEngineer() {
  inquirer.prompt([
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
  ]).then((responses) => {
    const engineer = new Engineer(
      responses.engineerName,
      responses.engineerId,
      responses.engineerEmail,
      responses.githubUserName
      );
      //WRITE ADDITIONAL LOGIC HERE TO PUSH ENGINEER TO TEAM ARRAY
    teamGenerator();
})
};

function generateIntern() {
  inquirer.prompt([
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
  ]).then((responses) => {
    const intern = new Intern(
      responses.internName,
      responses.internId,
      responses.internEmail,
      responses.internSchool
    );
    //WRITE ADDITIONAL LOGIC HERE TO PUSH INTERN TO TEAM ARRAY
    teamGenerator();
})
};

function init() {
  starterQuestion();
}

init();