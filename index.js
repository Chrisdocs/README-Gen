// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const {generateMarkdown, writeToFile} = require('./utils');
console.log(generateMarkdown);

const generateReadMe = require('./src/readme-template');
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
            message: 'Table of Contents:',
            choices: [ 'Installation', 'Usage', 'Credits', 'Lisence', 'Contributing', 'Tests', 'Questions' ],
            when: ({ tableOfContentsConfirm }) => {
                if (tableOfContentsConfirm) {
                return true;
                } else {
                return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'installationConfirm',
            message: 'Would you like to provide installation instructions? (optional)',
            default: false
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installations instructions',
            when: ({installationConfirm}) => {
                if (installationConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'usageConfirm',
            message: 'Would you like to provide a Usage section? (optional)',
            default: false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter Usage instructions',
            when: ({usageConfirm}) => {
                if (usageConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'creditsConfirm',
            message: 'Would you like to provide Credits section? (optional)',
            default: false
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter your Credits',
            when: ({creditsConfirm}) => {
                if (creditsConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Would you like to provide License section? (optional)',
            default: false
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter your licensing information',
            when: ({licenseConfirm}) => {
                if (licenseConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'contributingConfirm',
            message: 'Would you like to provide information on contributers? (optional)',
            default: false
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Enter contributers',
            when: ({contributingConfirm}) => {
                if (contributingConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'testsConfirm',
            message: 'Would you like to provide informations pertaining to tests? (optional)',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter installations instructions',
            when: ({testsConfirm}) => {
                if (testsConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'questionsConfirm',
            message: 'Would you like to provide a frequently asked questions section? (optional)',
            default: false
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter questions and answers',
            when: ({questionsConfirm}) => {
                if (questionsConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        }

    ])
    .then(answers => {
        //console.log(answers);
        let fileData = generateMarkdown(answers);
        writeToFile(fileData);
        console.log(fileData);
        // Using fs create a README.md file and pass fileData in

    })
    .catch(err => {
        if (err) {
            return (err);
        }
    })
};
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
questions()
//     .then(writeToFile())


