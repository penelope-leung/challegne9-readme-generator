// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //conditional statement
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } if (license === 'IBM') {
    return '![IBM Public License Version 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)'
  } if (license === 'ISC') {
    return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
  } else 
  return ("");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return ("\nhttps://opensource.org/licenses/MIT\n")
  } if (license === 'IBM') {
    return ("\nhttps://opensource.org/licenses/IPL-1.0\n")
  } if (license === 'ISC') {
    return ("\nhttps://opensource.org/licenses/ISC\n")
  } else 
  return ("");
}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license !== 'None') {
      return `## License
        This project use ${license} license.
      `;
    }
    return '';
  }

    // TODO: Create a function to generate markdown for README
    function generateMarkdown(data) {
      return `# ${data.title}

 ${renderLicenseBadge(data.license)}
 ${renderLicenseLink(data.license)}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Github](#github)
  - [Email](#email)

  ## Description
  ${data.entitledDes}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${data.license}
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contrib}

  ## Testing
  ${data.tests}

  ## Github
  [${data.github}](https://github.com/${data.github})

  ## Email
  ${data.email}
`
    };


  module.exports = generateMarkdown;
