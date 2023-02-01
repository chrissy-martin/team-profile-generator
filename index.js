const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/templateHTML');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/engineer');


const teamList = [];


// prompt questions for manager
const addManager = () => {
  inquirer.prompt([
      {
          type: 'input',
          message: "What is the team manager's name?",
          name: 'name',
          validate: (managerNameInput) => { 
            if (managerNameInput)
             { 
              return true 
            } else { 
              return 'Manager name is needed.' 
            } },
      },
      {
          type: 'input',
          message: "What is the manager's employee ID?",
          name: 'id',
          validate: (managerIdInput) => { if (managerIdInput) { return true } else { return 'Manager ID is needed.' } },
      },
      {
          type: 'input',
          message: "What is the manager's email address?",
          name: "email",
          validate: (managerEmailInput) => { if (managerEmailInput) { return true } else { return 'Manager email is needed.' } },
      },
      {
          type: 'input',
          message: "What is the manager's office number",
          name: "officeNumber",
          validate: (managerONumberInput) => { if (managerONumberInput) { return true } else { return 'Manager office number is needed.' } },
      },
  ]).then(({ name, id, email, officeNumber }) => {
      const newManager = new Manager(name, id, email, officeNumber)
      teamList.push(newManager)
      createTeam()
  })
}

// prompt questions for Engineer
const addEngineer = () => {
  inquirer.prompt([
      {
          type: 'input',
          message: "What is the engineer's name?",
          name: "name",
          validate: (engineerNameInput) => { if (engineerNameInput) { return true } else { return 'Engineer name is needed.' } },
      },
      {
          type: 'input',
          message: "What is the Engineer's employee ID?",
          name: "id",
          validate: (engineerIdInput) => { if (engineerIdInput) { return true } else { return 'Engineer ID is needed.' } },
      },
      {
          type: 'input',
          message: "What is the Engineer's email address?",
          name: "email",
          validate: (engineerEmailInput) => { if (engineerEmailInput) { return true } else { return 'Engineer email is needed.' } },
      },
      {
          type: 'input',
          message: "What is the Engineer's Github username?",
          name: "github",
          validate: (engineerGithubInput) => { if (engineerGithubInput) { return true } else { return 'Engineer Github address is needed.' } },
      },
  ]).then(({ name, id, email, github }) => {
      const newEngineer = new Engineer(name, id, email, github)
      teamList.push(newEngineer)
      createTeam()
  })
}

//prompt questions for Intern
const addIntern = () => {
  inquirer.prompt([
      {
          type: 'input',
          message: "What is the intern's name?",
          name: "name",
          validate: (internNameInput) => { if (internNameInput) { return true } else { return 'Intern name is needed.' } },
      },
      {
          type: 'input',
          message: "What is the Intern's employee ID?",
          name: "id",
          validate: (internIdInput) => { if (internIdInput) { return true } else { return 'Intern ID is needed.' } },
      },
      {
          type: 'input',
          message: "What is the Intern's email address?",
          name: "email",
          validate: (internEmailInput) => { if (internEmailInput) { return true } else { return 'Intern email is needed.' } },
      },
      {
          type: 'input',
          message: "What is the Intern's school",
          name: "school",
          validate: (internSchoolInput) => { if (internSchoolInput) { return true } else { return 'Intern office number is needed.' } },
      },
  ]).then(({ name, id, email, school }) => {
      const newIntern = new Intern(name, id, email, school)
      teamList.push(newIntern)
      createTeam()
  })
}

//prompt question to add more roles. creates HTML when finished.
const createTeam = () => {
  inquirer.prompt([{
      type: 'list',
      name: 'selectRole',
      message: 'What is the employee\'s role?',
      choices: ['Engineer', 'Intern', 'I\'m Finished']
  }]).then(answers => {
      switch (answers.selectRole) {
          case 'Engineer':
              addEngineer()
              break;
          case 'Intern':
              addIntern()
              break;
          default:
              fs.writeFileSync('./dist/index.html', generateHTML(teamList))
      }
  })
}

//function to initialize app
addManager();

// //prompt questions
// const questions = [
//   {
//     type: 'list',
//     name: 'role',
//     message: 'Please select the role of the employee.',
//     choices: ['Manager','Engineer','Intern']
//   },
// {
//     type: 'input',
//     name: 'name',
//     message: 'What is the name of the employee? (Required)',
//     validate: nameInput => {
//         if (nameInput) 
//         {
//         return true;
//         } else {
//             console.log('Please enter the name of this employee.');
//             return false;
//                }
//     }
// },
// {
//     type: 'input',
//     name: 'id',
//     message: 'What is the ID number of the employee? (Required)',
//     validate: idInput => {
//         if (idInput)
//         {
//         return true;
//         } else {
//             console.log('Please enter the employee ID.');
//             return false;
//                }
//     }
// },
// {
//     type: 'input',
//     name: 'email',
//     message: 'What is the employees email? (Required)',
//     validate: emailInput => {
//         if (emailInput.includes('@') ){
//             return true;
//           } else {
//             console.log('Please enter the employee email address.');
//             return false;
//                }
//     }
// },
// {
//     type: 'input',
//     name: 'officeNumber',
//     message: 'Please enter the office number of the manager.',
//     when:(officeNumberInput) => officeNumberInput.role ==='Manager', 
//     validate: officeNumberInput => {
//       if (officeNumberInput) {
//         return true;
//       } else {
//         console.log('Please enter the office number of the manager.');
//         return false;
//       }
//     }
//   },
//   {
//     type: 'input',
//     name: 'github',
//     message: 'Please enter the GitHub username for the engineer.',
//     when:(githubInput) => githubInput.role ==='Engineer', 
//     validate: githubInput => {
//       if (githubInput) {
//         return true;
//       } else {
//         console.log('Please enter gitHub username.');
//         return false;
//       }
//     }
//   },
//   {
//     type: 'input',
//     name: 'school',
//     message: 'Please enter the name of current school.',
//     when:(schoolInput) => schoolInput.role ==='Intern', 
//     validate: schoolInput => {
//       if (schoolInput) {
//         return true;
//       } else {
//         console.log('Please enter the school name.');
//         return false;
//       }
//     }
//   }
// ];

// //prompt questions to add more team members
// const addMember = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//       name: "add",
//       message: "Would you like to add a new employee?",
//       choices: ["Yes", "No"]
//       }
//     ])
//     .then(function(res) {
//       if (res.add === "Yes") {
//         inquirer
//       .prompt(questions)

//       } else {
//         console.log("Done");
//         completedTeam(teamList);
//       }
//     });
// };

// //creates the HTML file
// function writeFile(fileName, data) {
//   fs.writeFile(`${fileName}.html`, generateHTML(data), "utf8", function (error) {
//       if (error) {
//           console.log(error);
//     }
//     else{
//       console.log('Congratulations! Your HTML file has been saved in the dist folder!');
//     }
//   });
// };


// // function to initialize app
// function init() {
//   inquirer
//       .prompt(questions)
//       .then((data) => {
//           teamList.push(new manager(data.name, data.id, data.email, data.office));
//           console.log(teamList); //
//           addMember();
//       })
//       .then(teamList => {
//         return generateHTML(teamList);
//       })
//       .then(HTMLPage => {
//         return writeFile(HTMLPage);
//       })
//       .catch(err => {
//      console.log(err);
//       });
// }

// // function call to initialize app
// init();