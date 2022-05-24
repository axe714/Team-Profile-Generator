const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const inquirer = require("inquirer");
const teamGenerator = require("../index.js");
const fs = require("fs");

const buildTeam = (teamArray, companyName) => {
  const generateHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>COMPANY NAME HERE</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="card text-center">
        <h3 class="card-header">COMPANY NAME HERE</h3>
        <div class="card-body">
          <h4 class="card-title">Meet our team</h4>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
  
      <div class="container-fluid">
        <div class="row">
        </div>
      </div>
    </body>
  </html>
    `;

    fs.writeFile("./dist/index.html", generateHTML, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("WOOHOO YOU DID IT!");
    });

};


module.exports = buildTeam;
