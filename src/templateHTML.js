//create the team cards
const generateTeam = (team) => {

  // create manager card
  const generateManager = manager => {
      return `
      <div class="card mx-auto mb-3" style="width: 18rem">
        <div class="card h-100">
            <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4><i class="fas fa-mug-hot "></i>
            </div>
            <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email"> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office"> Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
      </div>
      `;
  }

  //create engineer card
  const generateEngineer = engineer => {
    return `
    <div class="card mx-auto mb-3" style="width: 18rem">
      <div class="card h-100">
          <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="fas fa-glasses mr-2"></i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email"> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github"> GitHub: ${engineer.github}</p>
          </div>
      </div>
    </div>
    `;
  }

  //create intern card
  const generateIntern = intern => {
    return `
    <div class="card mx-auto mb-3" style="width: 18rem">
      <div class="card h-100">
          <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><i class="fas fa-user-graduate mr-2"></i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email"> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school"> School: ${intern.school}</p>
          </div>
      </div>
    </div>
    `;
  
  }

    // Create an empty array for the html cards
    const html = [];

    // Add the manager to the empty array 
    html.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
    );

    // Add the engineers to the array 
    html.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
      .join("")
    );

    // Add the interns to the array
    html.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
      .join("")
    );

    // Return the Completed HTML
    return html.join("");
  }
  

  // create HTML file

  module.exports = team => {
  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  <title>Team Profile Generator</title>
  </head>

  <body>
    <div class="banner">
      <h1>My Team</h1>
    </div>

    <div class="card-section1">
    ${generateTeam(team)}
    </div>
  </body>
  
  </html>`;
  };


