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
          validate: (managerONumberInput) => { if (managerONumberInput) { return true } else { return 'Office number is needed.' } },
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
          message: "What is the engineer's employee ID?",
          name: "id",
          validate: (engineerIdInput) => { if (engineerIdInput) { return true } else { return 'Engineer ID is needed.' } },
      },
      {
          type: 'input',
          message: "What is the engineer's email address?",
          name: "email",
          validate: (engineerEmailInput) => { if (engineerEmailInput) { return true } else { return 'Engineer email is needed.' } },
      },
      {
          type: 'input',
          message: "What is the engineer's Github username?",
          name: "github",
          validate: (engineerGithubInput) => { if (engineerGithubInput) { return true } else { return 'Github address is needed.' } },
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
          message: "What is the intern's employee ID?",
          name: "id",
          validate: (internIdInput) => { if (internIdInput) { return true } else { return 'Intern ID is needed.' } },
      },
      {
          type: 'input',
          message: "What is the intern's email address?",
          name: "email",
          validate: (internEmailInput) => { if (internEmailInput) { return true } else { return 'Intern email is needed.' } },
      },
      {
          type: 'input',
          message: "What is the intern's current school",
          name: "school",
          validate: (internSchoolInput) => { if (internSchoolInput) { return true } else { return 'Current school is needed.' } },
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

