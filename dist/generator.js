const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");

const buildTeam = (teamArray) => {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${responses.companyName}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    <body>
        
    </body>
    </html>
    `;
};

module.exports = buildTeam;
