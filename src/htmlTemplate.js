

const genertateTeam = data => {
  //create manager html
  const generateMan = manager => {
    return `
    <section class='card' >
    <div class="card-header p-3 mb-2 bg-primary text-white">
        <h2 class = 'card-title'>${manager.getName()}</h2>
        <h4 class = 'card-title''>Manager</h4>
    </div>
   
    <div class="card-body">
      <ul class="list-group" >
        <li class="list-group-item">ID:${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
      </ul>
    </div>
  </section>
        `;
  }
  const generateEngine = engineer => {
    return `
    <section class='card' >
    <div class="card-header p-3 mb-2 bg-primary text-white">
        <h2 class = 'card-title'>${engineer.getName()}</h2>
        <h4 class = 'card-title''>Engineer</h4>
    </div>
   
    <div class="card-body">
      <ul class="list-group" >
        <li class="list-group-item">ID:${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </section>
      `;
  }

  const generateIntern = intern => {
    return `
  <section class='card' >
    <div class="card-header p-3 mb-2 bg-primary text-white">
        <h2 class = 'card-title'>${intern.getName()}</h2>
        <h4 class = 'card-title''>Intern</h4>
    </div>
   
    <div class="card-body">
      <ul class="list-group" >
        <li class="list-group-item">ID:${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()} </li>
      </ul>
    </div>
  </section>
    
    `;
  }
  cardArray = [];
  cardArray.push(data.filter(employee => employee.getRole() === "Manager").map(manager => generateMan(manager))
  );
  cardArray.push(data.filter(employee => employee.getRole() === "Engineer").map(eng => generateEngine(eng))
  );
  cardArray.push(data.filter(employee => employee.getRole() === "Intern").map(int => generateIntern(int))
  );

  return cardArray.join('');
}


module.exports = data => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>

<body>
    <div class='container-fluid'>
        <div class="row">
            <div class='col-md-12 jumbotron mb-3 bg-danger text-white'>
                <h1 class='text-center'>My Team</h1>
            </div>
        </div>
        <section class="container mt-4">
            <div class='col-md-12 d-flex justify-content-around'>
                ${genertateTeam(data)}
            </div>
        </section>
    </div>
</body>

</html>
    `
}