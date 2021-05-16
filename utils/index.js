const fs = require('fs');
const toc = require('markdown-toc');
const { resolve } = require('path');
// TODO: Create a function to write README file

const writeToFile = (fileData) => {
      fs.writeFile('./dist/README.md', fileData, err => {
        if (err) {
          console.log('you had an error:', err);
        } else {
          console.log('Readme.md created!');
        }
      });
    };

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (licenseConfirm, data) => {
  if (licenseConfirm) {
    return `
[![Generic badge](https://img.shields.io/badge/License-${data}-green)](https://shields.io/)
    `
  } else {
    return '';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

const renderTableOfContents = (hasTableOfContents, items) => {
  if(hasTableOfContents) {
    return`
  ## Table of Contents
  ${items.map(item => 
  `[${item}](#${item.toLowerCase()})\n`)
  .join(`
  `)}
  `
} else {
  return ''
}

}

const renderInstallation = (hasInstallation, installation) => {
  if (hasInstallation) {
    return `
  ## Installation

  ${installation}
    `
  } else {
    return ''
  }
}

const renderUsage = (hasUsage, usage) => {
  if (hasUsage) {
    return `
  ## Usage
  ![demo of Readme Generator](./assets/demo.gif)

  ${usage}
    `
  } else {
    return ''
  }
}

const renderFeatures = (featuresConfirm, features) => {
  if (featuresConfirm) {
    return `
  ## Features

  ${features}
    `
  } else {
    return ''
  }
}

const renderCredits = (hasCredits, credits) => {
  if (hasCredits) {
    return `
  ## Credits
    
  ${credits}
    `
  } else {
    return ''
  }
}

const renderContributers = (hasContributers, contributers) => {
  if (hasContributers) {
    return `
  ## Contributers
    
  ${contributers}
    `
  } else {
    return ''
  }
}

const renderTests = (hasTests, tests) => {
  if (hasTests) {
    return `
  ## Testing
    
  ${tests}
    `
  } else {
    return ''
  }
}

const renderQuestions = (hasQuestions, questions) => {
  if (hasQuestions) {
    return `
  ${questions}
    `
  } else {
    return ''
  }
}

const renderGitUser = (questionsConfirm, questionsGitUser) => {
  if (questionsConfirm) {
    return `
  ## Questions
  GitHub: [${questionsGitUser}](http://github.com/${questionsGitUser})
    `
  } else {
    return ''
  }
}

const renderEmail = (questionConfirm, emailInput) => {
  if (questionConfirm) {
    return `
  ### For questions, please contact me!
  Email: ${emailInput}
    `
  }
}

const renderLicense = (hasLicense, license) => {
  if (hasLicense) {
    return `
  ## Licensing
    
  [${license}](https://google.com/search?q=${license}_license)
    `
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('this is the data: ', data);
  return `
# 📘 ${data.title}${renderLicenseBadge(
  data.licenseConfirm, 
  data.license
  )}
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
  ${renderFeatures(
    data.featuresConfirm,
    data.features
  )}
  ${renderCredits(
    data.creditsConfirm,
    data.credits
    )}
  ${renderContributers(
    data.contributingConfirm,
    data.contributers
  )}
  ${renderTests(
    data.testsConfirm,
    data.tests
  )}
  ${renderGitUser(
    data.questionsConfirm,
    data.questionsGitUser
  )}
  ${renderEmail(
    data.questionsConfirm,
    data.email
  )}
  ${renderQuestions(
    data.questionsConfirm,
    data.questions
  )}
  ${renderLicense(
    data.licenseConfirm, 
    data.license
    )}
`;
};

module.exports = {generateMarkdown, writeToFile};
