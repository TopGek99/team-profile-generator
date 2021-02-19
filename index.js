const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateWebPage = require('./src/generateWebPage');

// variables declared. role initialised as "Manager" as the first employee entered to the system is always the Manager
var role = "Manager";
var employeeArray = [];
var teamName;
// initialQuestion left out of the questions array as it only needs to be called once, the other 3 are added to the array when required
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

// function to define questions being asked to be called every time the "role" variable changes
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
    // changes the fourth question in the array depending on which role is being entered
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

// function to write the generated page to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => err ? console.error(err) : console.log("Success!"));
}

// recursively adds employees to the list, only stopping when the user signals "I'm done"
function recursiveInit() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        createEmployee(answers);
        role = answers.next
    })
    .then(() => {
        // if the user has not finished entering their employees, the functions calls itself to add another
        if (role != 'I\'m done') {
            defineQuestions();
            recursiveInit();
        }
        // otherwise it sorts the employee array and writes it into the html file 
        else {
            sortEmployeesById();
            writeToFile('index.html',generateWebPage(employeeArray,teamName));
        }
    });
}

// initialises by asking the user for their teamname then making the first call to recursiveInit
function init() {
    defineQuestions();
    inquirer.prompt(initialQuestion)
    .then((answers) => {
        teamName = answers.teamName;
        recursiveInit();
    });
}

// function to sort the employeeArray by the ids. The id system is as follows
// Manager ID: 'M'
// Engineer ID: 'E'+n
// Intern ID: 'I'+n
// Where n is the number of Engineer/Intern the employ is (first Engineer is 'E0', third Intern is 'I2' etc.)
// This is so that when the page is being created, the employees will be sorted by rank, then by number
function sortEmployeesById() {
    employeeArray.sort(function(e1, e2) {
        let id1 = e1.id.toUpperCase();
        let id2 = e2.id.toUpperCase();
        if (id1[0] == id2[0] && id1 != 'M') {
            return parseInt(id1.substr(1)) - parseInt(id2.substr(1));
        }
        if (id1 == 'M' || id1[0] == 'E' && id2[0] == 'I') {
            return -1;
        }
        return 1;
    });
}

// function to create an employee object then add it to the employeeArray
function createEmployee(answers) {
    const {name, id, email} = answers;
    // creates and pushes an object of type equal to that of role
    switch (role) {
        case "Manager":
            let mngr = new Manager(name,id,email,answers.officeNumber);
            employeeArray.push(mngr);
            break;
        case "Engineer":
            let eng = new Engineer(name,id,email,answers.github);
            employeeArray.push(eng);
            break;
        case "Intern":
            let intern = new Intern(name,id,email,answers.school);
            employeeArray.push(intern);
            break;
        default:
            break;
    }
}

// initialises program
init();