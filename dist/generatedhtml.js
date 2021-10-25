const generateHTML = ({ name, ID, Email, officeNumber }) =>
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
                      <li>ID: ${ID} </li>
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
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();