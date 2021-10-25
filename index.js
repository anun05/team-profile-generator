const inquirer = require('inquirer');
const fs = require('fs');



// ceated the messages 
// empty array
const memebrs = [];
const team = () => {
    console.log('Enter Manager Information.')
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Managers Name Please.',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter your Employee ID.',
            name: 'id',
        },
        {
            type: 'input',
            message: 'The Manager Email address.',
            name: 'Email',
        },
        {
            type: 'input',
            message: 'Manager office Number.',
            name: 'officeNumber',
        },
        {
            type: 'confirm',
            message: 'Will you be adding another team member?',
            name: 'addEmployee',
            default: false,
        },
    ])
};



const employeeTeam = () => {
    console.log('If You are adding another member, Enter Role Information.')
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Are you an Engineer or an Intern?',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: 'Enter the name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter the Employee ID.',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'Enter the Email address of whom ever will be on the team.',
            name: 'Email',
        },
        {
            type: 'input',
            message: 'Enter the Github',
            name: 'Github',
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            message: 'Enter your School',
            name: 'School',
            when: (input) => input.role = "Intern",
        },
        {
            type: 'confirm',
            message: 'Will you be adding another team member?',
            name: 'addEmployee',
            default: false,
        },
    ])
 
};


const generateHTML = ({ name, id, Email, officeNumber }) =>
    `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
      <link rel = "stylesheet" href = "style.css">
    </head>
  
  <body>
      <nav>My Team</nav>
      <section>
  
          </container>
          <continer>
              <div id="Manager"></div>
              <p id='name'>${name}</p>
              <P id='position'> Manager</P>
              <section>
                  <ul class = "cards">
                      <li>ID: ${id} </li>
                      <li>Email: <a href="mailto: ${Email}">Send Email</a> </li>
                      <li>Office Numver: ${officeNumber}</li>
                  </ul>
              </section>
          </continer>
  
          <container>
              <div id="Engineer"></div>
              <p id='name'>Name</p>
              <P id='position'> Engineer</P>
              <section>
                  <ul class = "cards">
                      <li>ID: 405 </li>
                      <li>Email: <a href="mailto: example@gmail.com">Send Email</a> </li>
                      <li>GitHub: <a href = "https://github.com/anun05"></a></li>
                  </ul>
              </section>
  
          </container>
          <container>
              <div id="Intern"></div>
              <p id='name'>Name</p>
              <P id='position'>Intern</P>
              <section>
                  <ul class = "cards">
                      <li>ID: 650 </li>
                      <li>Email: <a href="mailto: example@gmail.com">Send Email</a> </li>
                      <li>School: </li>
                  </ul>
              </section>
  
          </container>
      </section>
  </body>
  
  </html>
  `;


const init = () => {
    team()
    employeeTeam()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();
