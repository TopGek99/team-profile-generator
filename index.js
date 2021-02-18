const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const generateMarkdown = require('./utils/generateMarkdown.js');

var engArray = [];
var internArray = [];
var role = "Manager";
var questions = [
    {
        type: 'input',
        name: 'teamname',
        message: 'What is your team\'s name?'
    },
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

function init() {
    inquirer.prompt(questions[0])
    .then((answers) => {
        console.log(answers);
        questions.splice(0,1);
    });

    while(role != 'I\'m done') {
        inquirer.prompt(questions)
        .then((answers) => {
        
            console.log(answers);
            role = answers.next;
        });
    }
}

init();