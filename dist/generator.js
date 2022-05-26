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
            <div style="background-color:#DDE8B9; margin: 15px; box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" class="card">
              <div class="card-body">
                <h5 style="font-family: 'Gafata', sans-serif; font-weight: 600; font-size: 25px" class="card-title">${teamArray[i].name}</h5>
                <h6>Manager</h6>
                <img style="margin:7.5px 0 7.5px 0" src="../assets/images/manager.png" height="25" alt="manager icon">
                <h7 class="card-text">
                  <br  />Id: ${teamArray[i].id}
                  <br />Email: <a href="mailto:${teamArray[i].email}"> ${teamArray[i].email}</a>
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
            <div style="background-color:#E8D2AE; margin: 15px; box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" class="card">
              <div class="card-body">
                <h5 style="font-family: 'Gafata', sans-serif; font-weight: 600; font-size: 25px" class="card-title">${teamArray[i].name}</h5>
                <h6>Engineer</h6>
                <img style="margin:7.5px 0 7.5px 0" src="../assets/images/engineer.png" height="25" alt="engineer icon">
                <h7 class="card-text">
                  <br  />Id: ${teamArray[i].id}
                  <br />Email: <a href="mailto:${teamArray[i].email}"> ${teamArray[i].email}</a>
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
            <div style="background-color:#FCC8B2; margin: 15px; box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" class="card">
              <div class="card-body">
                <h5 style="font-family: 'Gafata', sans-serif; font-weight: 600; font-size: 25px" class="card-title">${teamArray[i].name}</h5>
                <h6>Intern</h6>
                <img style="margin:7.5px 0 7.5px 0" src="../assets/images/student.png" height="25" alt="intern icon">
                <h7 class="card-text">
                  <br  />Id: ${teamArray[i].id}
                  <br />Email: <a href="mailto:${teamArray[i].email}"> ${teamArray[i].email}</a>
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
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Gafata&display=swap');
      </style>
    </head>
    <body>
      <div style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; background: rgb(221,232,185);
      background: linear-gradient(90deg, rgba(221,232,185,1) 15%, rgba(232,210,174,1) 40%, rgba(252,200,178,1) 74%);" class="card text-center">
        <h3 style="font-family: 'Gafata', sans-serif; font-weight: 1000; font-size: 35px; padding: 20px 0 20px 0" class="card-header">${companyName}</h3>
        <div class="card-body">
          <h4 class="card-title">Meet our team</h4>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
      <div style="padding: 50px 0 50px 0; background-color: #dfdfdf" class="container-fluid d-flex justify-content-center">
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