const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/templateHTML');

const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const teamList = [];

//  questions for user input

// Manager questions
// const addManager = () => {
//   return inquirer
//     .prompt ([
//       {
//           type: 'input',
//           name: 'name',
//           message: 'Who is the manager of this team?', 
//           validate: nameInput => {
//               if (nameInput) {
//                   return true;
//               } else {
//                   console.log ("Please enter the manager's name!");
//                   return false; 
//               }
//           }
//       },
//       {
//           type: 'input',
//           name: 'id',
//           message: "Please enter the manager's ID number.",
//           validate: nameInput => {
//               if  (isNaN(nameInput)) {
//                   console.log ("Please enter the manager's ID!")
//                   return false; 
//               } else {
//                   return true;
//               }
//           }
//       },
//       {
//           type: 'input',
//           name: 'email',
//           message: "What is the manager's email address?",
//           validate: email => {
//               valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
//               if (valid) {
//                   return true;
//               } else {
//                   console.log ('Please enter an email!')
//                   return false; 
//               }
//           }
//       },
//       {
//           type: 'input',
//           name: 'officeNumber',
//           message: "What is the manager's office number",
//           validate: nameInput => {
//               if  (isNaN(nameInput)) {
//                   console.log ('Please enter an office number!')
//                   return false; 
//               } else {
//                   return true;
//               }
//           }
//       }
//   ])
//   .then(managerInput => {
//       const  { name, id, email, officeNumber } = managerInput; 
//       const manager = new manager (name, id, email, officeNumber);

//       team.push(manager); 
//       console.log(manager); 
//   })
// };

// Engineer questions 



const questions = [
  {
    type: 'list',
    name: 'role',
    message: 'Please select the role of the employee.',
    choices: ['Manager','Engineer','Intern']
  },
{
    type: 'input',
    name: 'name',
    message: 'What is the name of the employee? (Required)',
    validate: nameInput => {
        if (nameInput) 
        {
        return true;
        } else {
            console.log('Please enter the name of this employee.');
            return false;
               }
    }
},
{
    type: 'input',
    name: 'id',
    message: 'What is the ID number of the employee? (Required)',
    validate: idInput => {
        if (idInput)
        {
        return true;
        } else {
            console.log('Please enter the employee ID.');
            return false;
               }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is the employees email? (Required)',
    validate: emailInput => {
        if (emailInput.includes('@') ){
            return true;
          } else {
            console.log('Please enter the employee email address.');
            return false;
               }
    }
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter the office number of the manager.',
    when:(officeNumberInput) => officeNumberInput.role ==='Manager', 
    validate: officeNumberInput => {
      if (officeNumberInput) {
        return true;
      } else {
        console.log('Please enter the office number of the manager.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter the GitHub username for the engineer.',
    when:(githubInput) => githubInput.role ==='Engineer', 
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter gitHub username.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'Please enter the name of current school.',
    when:(schoolInput) => schoolInput.role ==='Intern', 
    validate: schoolInput => {
      if (schoolInput) {
        return true;
      } else {
        console.log('Please enter the school name.');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Would you like to add a new employee?',
    default: true
  }
];

function addMember() {
  // ask to add additional member
  inquirer
      .prompt(questions)
      .then((data) => {
          console.log(data);
          switch (data.member) {
              case "Engineer":
                  engineer();
                  break;
              case "Intern":
                  intern();
                  break;
              case "Finish Building Team":
                  
                  generateHTML(); 
                  console.log(teamList); 
                  break;
              default:
                  return;
          }
      });
}

// function to write HTML file
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      if (err) {
          console.log(err);
          return;
    }
    else{
      console.log('Congratulations! Your HTML file has been saved in the dist folder!');
    }
  });
};


//  function to initialize app
function init() {
  
  inquirer
      .prompt(questions)
      .then((data) => {
          teamList.push(new manager(data.name, data.id, data.email, data.office));
          console.log(teamList); // for checking
          addMember();
      })
      .then(teamList => {
        return generateHTML(teamList);
      })
      .then(HTMLPage => {
        return writeFile(HTMLPage);
      })
      .catch(err => {
     console.log(err);
      });
}
// addManager()
//   .then(addEmployee)
//   .then(team => {
//     return generateHTML(team);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .catch(err => {
//  console.log(err);
//   });
// function call to initialize app
init();