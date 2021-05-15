const fs = require('fs');
const toc = require('markdown-toc');
const { resolve } = require('path');
// TODO: Create a function to write README file

const writeToFile = (fileData) => {
  console.log("writeToFIle was invoked");
      fs.writeFile('README.md', fileData, err => {
        console.log("DOES THIS HIT AT ALL?")
        if (err) {
          console.log('you had an error:', err);
        } else {
          console.log('Readme.md created!');
        }
      });
    };

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const renderTableOfContents = (hasTableOfContents, items) => {
  if(hasTableOfContents) {
    return `## Table of Contents

            ${items.map(item => 
              `* [${item}](#${item.toLowerCase()})`)
                .join(`
            `)}}
            `
          }

}

const renderInstallation = (hasInstallation, installation) => {
  if (hasInstallation) {
    return `## Installation

            ${installation}
    `
  }
}

const renderUsage = (hasUsage, usage) => {
  if (hasUsage) {
    return `## Usage

            ${usage}
    `
  }
}

const renderCredits = (hasCredits, credits) => {
  if (hasCredits) {
    return `## Credits
    
            ${credits}
    `
  }
}

const renderLicense = (hasLicense, license) => {
  if (hasLicense) {
    return `## Licensing
    
            ${license}
    `
  }
}

const renderContributers = (hasContributers, contributers) => {
  if (hasContributers) {
    return `## Contributers
    
            ${contributers}
    `
  }
}

const renderTests = (hasTests, tests) => {
  if (hasTests) {
    return `## Testing
    
            ${tests}
    `
  }
}

const renderQuestions = (hasQuestions, questions) => {
  if (hasQuestions) {
    return `## Frequently Askes Questions
    
            ${questions}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('this is the data: ', data);
  return `
  ## ${data.title}
  ## Description
    ${data.description}

  ${renderTableOfContents(
    data.tableOfContentsConfirm, 
    data.tableOfContents
    )}
  ${renderInstallation(
    data.installationConfirm, 
    data.installation
    )}
  ${renderUsage(
    data.usageConfirm,
    data.usage
    )}
  ${renderCredits(
    data.creditsConfirm,
    data.credits
    )}
  ${renderLicense(
    data.licenseConfirm,
    data.license
    )}
  ${renderContributers(
    data.contributingConfirm,
    data.contributers
  )}
  ${renderTests(
    data.testsConfirm,
    data.tests
  )}
  ${renderQuestions(
    data.questionsConfirm,
    data.questions
  )}
`;
};

module.exports = {generateMarkdown, writeToFile};
