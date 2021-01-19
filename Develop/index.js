const inquirer = require('inquirer');

//questions for user
inquirer
    .prompt([
        {
            type: 'input',
            meessag: 'What is the time',
            name: 'title',
        },
        {
            type: 'checkbox',
            message: 'What would you like in your README?',
            name: 'ReadMe-Options',
            choices: ['description', 'installation', 'usage', 'contributing', 'tests'],
        },
        {
            type: 'input',
            message: 'What is your project about?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Describe your installation process.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Describe the use of your project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who should be credited for this project',
            name: 'contributing',
        },
        {
            type: 'input',
            message: '',
            name: 'tests',
        },
        {
            type: 'checkbox' ,
            message: 'What Licenses did you use?',
            name: 'licenses',
            choices: ['BSD Licesnse', 'MIT License', 'GPL License', 'Apache license', 'GNU Public Licesnse', 'Other', 'None'],
          },
    ])





















// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
