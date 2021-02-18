const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateWebPage = require('./src/generateWebPage');

var role = "Manager";
function defineQuestions() {
    questions = [
        {
            type: 'input',
            name: 'name',
            message: `What is your ${role}\'s name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your ${role}\'s id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your ${role}\'s email?`
        },
        {
            type: 'list',
            name: 'next',
            message: `What would you like to add next?`,
            choices: ['Engineer','Intern','I\'m done']
        }
    ];
    switch (role) {
        case "Manager":
            questions.splice(3, 0, mngrQuestion);
            break;
        case "Engineer":
            questions.splice(3, 0, engQuestion);
            break;
        case "Intern":
            questions.splice(3, 0, internQuestion);
            break;        
        default:
            break;
    }
}
var employeeArray = [];
var teamName;
const initialQuestion = [{
    type: 'input',
    name: 'teamName',
    message: 'What is your Team\'s name?'
}];
const mngrQuestion = {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your Manager\'s office number?'
};
const engQuestion = {
    type: 'input',
    name: 'github',
    message: 'What is your Engineer\'s GitHub username?'
};
const internQuestion = {
    type: 'input',
    name: 'school',
    message: 'What is your school does your Intern attend?'
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => err ? console.error(err) : console.log("Success!"));
}

function recursiveInit() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        // console.log(answers);
        createEmployee(answers);
        role = answers.next
    })
    .then(() => {
        if (role != 'I\'m done') {
            defineQuestions();
            recursiveInit();
        } else {
            sortEmployeesById();
            writeToFile('index.html',generateWebPage(employeeArray,teamName));
        }
    });
}

function init() {
    defineQuestions();
    inquirer.prompt(initialQuestion)
    .then((answers) => {
        teamName = answers.teamName;
        recursiveInit();
    });
}

function sortEmployeesById() {
    employeeArray.sort(function(e1, e2) {
        let id1 = e1.id.toUpperCase(); // ignore upper and lowercase
        let id2 = e2.id.toUpperCase(); // ignore upper and lowercase
        if (id1[0] == id2[0] && id1 != 'M') {
            return parseInt(id1.substr(1)) - parseInt(id2.substr(1));
        }
        if (id1 == 'M' || id1[0] == 'E' && id2[0] == 'I') {
            return -1;
        }
        return 1;
    });
}

function createEmployee(answers) {
    const {name, id, email} = answers;
    switch (role) {
        case "Manager":
            let mngr = new Manager(name,id,email,answers.officeNumber);
            console.log(mngr);
            employeeArray.push(mngr);
            break;
        case "Engineer":
            let eng = new Engineer(name,id,email,answers.github);
            console.log(eng);
            employeeArray.push(eng);
            break;
        case "Intern":
            let intern = new Intern(name,id,email,answers.school);
            console.log(intern);
            employeeArray.push(intern);
            break;
        default:
            break;
    }
}


init();