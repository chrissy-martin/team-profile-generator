//create the team cards
const generateTeam = team => {

  // create manager card
  const generateManager = manager => {
      return `
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="card h-100">
            <div class="card-header">
              <h3>${manager.getName()}</h3>
              <h4>Manager</h4><i class="fas fa-mug-hot mr-2"></i>
            </div>
            <div class="card-body">
              <p class="id">ID: ${manager.getId()}</p>
              <p class="email"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
              <p class="office"> Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
      </div>
      `;
  };

  //create engineer card
  const generateEngineer = engineer => {
    return `
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="card h-100">
          <div class="card-header">
            <h3>${engineer.getName()}</h3>
            <h4>Engineer</h4><i class="fas fa-glasses mr-2"></i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${engineer.getId()}</p>
            <p class="email"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="github"> GitHub: ${engineer.getGithub()}</p>
          </div>
      </div>
    </div>
    `;
  }

  //create intern card
  const generateIntern = intern => {
    return `
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="card h-100">
          <div class="card-header">
            <h3>${intern.getName()}</h3>
            <h4>Intern</h4><i class="fas fa-user-graduate mr-2"></i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${intern.getId()}</p>
            <p class="email"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="school"> School: ${intern.getSchool()}</p>
          </div>
      </div>
    </div>
    `;
  
  }
  const html = [];

  html.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
  );
  html.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
      .join("")
  );
  html.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
      .join("")
  );

  return html.join("");
}

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

