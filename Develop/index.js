const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const { fetchAsyncQuestionPropertyQuestionProperty } = require('inquirer/lib/utils/utils');
const writeFileAsync = util.promisify(fs.writeFile);


const questions = () =>
inquirer
    .prompt([
        {
            type: 'input',
            meessage: 'What is the time',
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
            message: 'What tests did you run?',
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

    
questions()
.then((answers)=> fs.writeFileAsync('README.md', generateMarkdown(answers)))
.then(()=> console.log('Success you wrote a README.md!'))
.catch((err)=> console.error(err));


