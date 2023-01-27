const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/templateHTML');

const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/engineer');


const teamList = [];


//prompt questions
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
  }
];

//prompt questions to add more team members
const addMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
      name: "add",
      message: "Would you like to add a new employee?",
      choices: ["Yes", "No"]
      }
    ])
    .then(function(res) {
      if (res.add === "Yes") {
        inquirer
      .prompt(questions)

      } else {
        console.log("Done");
        completedTeam(teamList);
      }
    });
};

//creates the HTML file
function writeFile(fileName, data) {
  fs.writeFile(`${fileName}.html`, generateHTML(data), "utf8", function (error) {
      if (error) {
          console.log(error);
    }
    else{
      console.log('Congratulations! Your HTML file has been saved in the dist folder!');
    }
  });
};


// function to initialize app
function init() {
  inquirer
      .prompt(questions)
      .then((data) => {
          teamList.push(new manager(data.name, data.id, data.email, data.office));
          console.log(teamList); //
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

// function call to initialize app
init();