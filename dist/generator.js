const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const fs = require("fs");

const generateManagerEl = (teamArray) => {
  let generateManagerString = "";
  for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].constructor.name === "Manager") {
      generateManagerString += `
      <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${teamArray[i].name}</h5>
                <h6>Manager</h6>
                <img style="margin:7.5px 0 7.5px 0" src="../assets/images/manager.png" height="25" alt="manager icon">
                <h7 class="card-text">
                  <br  />Id: ${teamArray[i].id}
                  <br />Email: ${teamArray[i].email}
                  <br />Office Number: ${teamArray[i].officeNumber}
                </h7>
              </div>
            </div>
      </div>
      `;
    }
  }
  return generateManagerString;
};

const generateEngineerEl = (teamArray) => {
  let generateEngineerString = "";
  for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].constructor.name === "Engineer") {
      generateEngineerString += `
      <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${teamArray[i].name}</h5>
                <h6>Engineer</h6>
                <img style="margin:7.5px 0 7.5px 0" src="../assets/images/engineer.png" height="25" alt="engineer icon">
                <h7 class="card-text">
                  <br  />Id: ${teamArray[i].id}
                  <br />Email: ${teamArray[i].email}
                  <br />Github: ${teamArray[i].github}
                </h7>
              </div>
            </div>
      </div>
      `;
    }
  }
  return generateEngineerString;
};

const generateInternEl = (teamArray) => {
  let generateInternString = "";
  for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].constructor.name === "Intern") {
      generateInternString += `
      <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${teamArray[i].name}</h5>
                <h6>Intern</h6>
                <img style="margin:7.5px 0 7.5px 0" src="../assets/images/student.png" height="25" alt="intern icon">
                <h7 class="card-text">
                  <br  />Id: ${teamArray[i].id}
                  <br />Email: ${teamArray[i].email}
                  <br />School: ${teamArray[i].school}
                </h7>
              </div>
            </div>
      </div>
      `;
    }
  }
  return generateInternString;
};

const generateTeam = (teamArray, companyName) => {
  const createHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${companyName}</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="card text-center">
        <h3 class="card-header">${companyName}</h3>
        <div class="card-body">
          <h4 class="card-title">Meet our team</h4>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
      <div class="container-fluid d-flex justify-content-center">
        <div class="row">
          <div class="card-group">
            ${generateManagerEl(teamArray)}
            ${generateEngineerEl(teamArray)}
            ${generateInternEl(teamArray)}
          </div>
        </div>
      </div>
    </body>
  </html>`;

  fs.writeFile("./dist/index.html", createHTML, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Team successfully generated! Check the dist folder for your index.html file.");
  });
};

module.exports = generateTeam;