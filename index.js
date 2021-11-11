const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const build =  require('./src/htmlTemplate')

const directory =  path.resolve(__dirname, 'generated html');
const outputPath = path.join(directory, 'index.html');

const memebrs = [];
const idArr = [];

function init() {

    function addManager() {
        console.log('Enter Manager Information.')
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter Managers Name Please.',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'Enter your Employee ID.',
                name: 'manId',
            },
            {
                type: 'input',
                message: 'The Manager Email address.',
                name: 'manEmail',
            },
            {
                type: 'input',
                message: 'Manager office Number.',
                name: 'officeNumber',
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.manId, answers.manEmail, answers.officeNumber);
            memebrs.push(manager);
            idArr.push(answers.manId)
            addTeamMembers();
        })
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter the name ',
                name: 'engineName',
            },
            {
                type: 'input',
                message: 'Enter the Engineer ID ',
                name: 'engineId',
            },
            {
                type: 'input',
                message: 'Enter your email ',
                name: 'engineEmail',
            },
            {
                type: 'input',
                message: 'Enter the Github',
                name: 'Github',
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineName, answers.engineId, answers.engineEmail, answers.Github);
            memebrs.push(engineer);
            idArr.push(answers.engineId)
            addTeamMembers();
        })
    }
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter the name ',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'Enter the Intern ID ',
                name: 'internId',
            },
            {
                type: 'input',
                message: 'Enter your email ',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'Enter your School',
                name: 'School',
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.School);
            memebrs.push(intern);
            idArr.push(answers.internId)
            addTeamMembers();
        })
    }
    function addTeamMembers() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'userChoice',
                message: "Would you like to add other members of your team?",
                choices: ["Engineer", "Intern", "I'm Done"]
            }
        ]).then(selection => {
            switch (selection.userChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default: 
                generateHTML()

            }
        })
    }
    addManager();

    function generateHTML(){

        if(!fs.existsSync(directory)){
            fs.mkdirSync(directory)
        }

        fs.writeFileSync(outputPath, build(memebrs))
    }

};

init();