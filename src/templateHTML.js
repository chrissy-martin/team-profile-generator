//create the team cards

  // create manager card
  const generateManager = manager => {
      return `
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="card h-100">
            <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4><i class="fas fa-mug-hot mr-2"></i>
            </div>
            <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email"> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office"> Office Number: ${manager.officeNumber}</p>
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
    <div class="row row-cols-1 row-cols-md-3 g-4">
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

//   generateHTML = mergeArr => {

//     empList = [];
    
//     for (let i = 0; i < mergeArr.length; i++) {
//       const role = employee.getRole(); 


//       if (role === 'Manager') {
//           const managerCard = generateManager(employee);


//           empList.push(managerCard);
//       }

//       if (role === 'Engineer') {
//           const engineerCard = generateEngineer(employee);

//           empList.push(engineerCard);
//       }

//       if (role === 'Intern') {
//           const internCard = generateIntern(employee);

//           empList.push(internCard);
//         }
//     }
//     const teamList = empList.join(''); 
//     return HTMLPage(teamList);
//     // const generatePage = HTMLPage(teamList)
//     // return generatePage; 

// }

// function teamList(data) {
//   return data
//     .map(x => {
//       let position = x.getRole();
//       switch (position) {
//         case "Manager":
//           return generateManager(x);
//           break;
//         case "Engineer":
//           return generateEngineer(x);
//           break;
//         case "Intern":
//           return generateIntern(x);
//           break;
//       }
//     })
//     .join("\n");
// }

// const teamList = teamArray => {
//   let teamArr = [];
//   const manager = teamArray.filter(team => {
//       return team.getRole() === 'Manager';
//   });
//   const engineer = teamArray.filter(team => {
//       return team.getRole() === 'Engineer';
//   });
//   const intern = teamArray.filter(team => {
//       return team.getRole() === 'Intern';
//   });
//   if (manager) {
//     teamArr.push(generateManager(managerTitle));
//   } 
//   if (engineer) {
//     teamArr.push(generateEngineer(engineerTitle));
//   } 
//   if (intern) {
//     teamArr.push(generateIntern(internTitle));
//   }
//   return teamArr.join('');
//   };


  
// push array to page 
generateHTML = (data) => {

  // array for cards 
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 


      // call manager function
      if (role === 'manager') {
          const managerCard = generateManager(employee);

          pageArray.push(managerCard);
      }

      // call engineer function
      if (role === 'engineer') {
          const engineerCard = generateEngineer(employee);

          pageArray.push(engineerCard);
      }

      // call intern function 
      if (role === 'intern') {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
      
  }

  // joining strings 
  const teamList = pageArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(teamList); 
  return generateTeam;

}

// generate html page 
const generateTeamPage = function (teamList) {   

// create HTML file
// function generateHTML(data) {
  return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <link href="./style.css" rel="stylesheet"></link>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class="container">
        <div class="row">
            <div class="card-columns"></div>
            <div class="team-area col-12 d-flex justify-content-center card-deck">
                ${teamList}
            </div>
        </div>
    </div>
    </div>
    
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
<script src="./index.js"></script>
</body>

</html>`;

}

//export to index
module.exports = generateHTML;
