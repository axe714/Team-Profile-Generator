const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const fs = require("fs");

// const generateEmployeeEl = (teamArray) => {
//   for (let j = 0; j < teamArray.length; j++){
//     generateEmployee();
//   }
// }

// const generateManagerEl = (teamArray) => {
//   for (let i = 0; i < teamArray.length; i++) {
//     if (teamArray[i].constructor.name === "Manager") {
//       return `
//       <div class="col-sm-4">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title">${teamArray[i].name}</h5>
//                 <h6>Manager</h6>
//                 <h7 class="card-text">
//                   Id: ${teamArray[i].id}
//                   <br />
//                   Email: ${teamArray[i].email}
//                   <br />Office Number: ${teamArray[i].officeNumber}
//                 </h7>
//               </div>
//             </div>
//       </div>
//       `;
//     }
//   }
// }

// const generateEngineerEl = (teamArray) => {
//   for (let i = 0; i < teamArray.length; i++) {
//     if (teamArray[i].constructor.name === "Engineer") {
//       return `
//       <div class="col-sm-4">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title">${teamArray[i].name}</h5>
//                 <h6>Engineer</h6>
//                 <h7 class="card-text">
//                   Id: ${teamArray[i].id}
//                   <br />
//                   Email: ${teamArray[i].email}
//                   <br />Github: ${teamArray[i].github}
//                 </h7>
//               </div>
//             </div>
//       </div>
//       `;
//     }
//   }
// }

// const generateInternEl = (teamArray) => {
//   for (let i = 0; i < teamArray.length; i++) {
//     if (teamArray[i].constructor.name === "Intern") {
//       return `
//       <div class="col-sm-4">
//             <div class="card">
//               <div class="card-body">
//                 <h5 class="card-title">${teamArray[i].name}</h5>
//                 <h6>Intern</h6>
//                 <h7 class="card-text">
//                   Id: ${teamArray[i].id}
//                   <br />
//                   Email: ${teamArray[i].email}
//                   <br />School: ${teamArray[i].school}
//                 </h7>
//               </div>
//             </div>
//       </div>
//       `;
//     }
//   }
// }

// const generateEmployeeEl = (teamArray) => {
//   for (let i = 0; i < teamArray.length; i++) {
//     switch (teamArray[i].constructor.name) {
//       case "Manager":
//         console.log('You created a manager!');
//         return generateManagerEl(teamArray);
//       case "Engineer":
//         console.log('You created an engineer!');
//         return generateEngineerEl(teamArray);
//       case "Intern":
//         console.log('You created an intern!');
//        return generateInternEl(teamArray);
//     }
//   }
// }

const generateEmployee = (teamArray) => {
  for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].constructor.name === "Manager") {
      console.log("You created a Manager!");
      return `
      <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${teamArray[i].name}</h5>
                <h6>Manager</h6>
                <h7 class="card-text">
                  Id: ${teamArray[i].id}
                  <br />
                  Email: ${teamArray[i].email}
                  <br />Office Number: ${teamArray[i].officeNumber}
                </h7>
              </div>
            </div>
      </div>
      `;
    }
    if (teamArray[i].constructor.name === "Engineer") {
      console.log("You created a Engineer!");
      return `
      <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${teamArray[i].name}</h5>
                <h6>Engineer</h6>
                <h7 class="card-text">
                  Id: ${teamArray[i].id}
                  <br />
                  Email: ${teamArray[i].email}
                  <br />Github: ${teamArray[i].github}
                </h7>
              </div>
            </div>
          </div>
      `;
    }
    if (teamArray[i].constructor.name === "Intern") {
      console.log("You created an Intern!");
      return `
      <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${teamArray[i].name}</h5>
                <h6>Intern</h6>
                <h7 class="card-text">
                  Id: ${teamArray[i].id}
                  <br />Email: ${teamArray[i].email}
                  <br />School: ${teamArray[i].school}
                </h7>
              </div>
            </div>
          </div>
      `;
    }
  }
};

const generateTeam = (teamArray, companyName) => {
  const createHTML = `
  <!DOCTYPE html>
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
  
      <div class="container-fluid">
        <div class="row">
          <div class="card-group">
          
            ${generateEmployee(teamArray)}

          </div>
        </div>
      </div>
    </body>
  </html>
    `;

  fs.writeFile("./dist/index.html", createHTML, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("WOOHOO YOU DID IT!");
  });
};

module.exports = generateTeam;