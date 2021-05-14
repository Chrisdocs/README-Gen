// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'Please enter a title for your project. (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tableOfContentsConfirm',
            message: 'would you like to include a table of contents? (Optional)',
            default: true
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'Provide some information about yourself:',
            choices: [ 'installation', 'Usage', 'Credits', 'Lisence' ]
            when: ({ tableOfContentsConfirm }) => {
                if (tableOfContentsConfirm) {
                return true;
                } else {
                return false;
                }
            }
        }

    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


