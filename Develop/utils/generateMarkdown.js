// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license ==="Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
  else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="MIT"){
    return `(https://opensource.org/licenses/MIT)`
  }
  else if (license ==="Apache") {
      return `(https://opensource.org/licenses/Apache-2.0)`
    }
  else if (license === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="MIT"){
    return `This project is licensed by MIT`
  }
  else if (license ==="Apache") {
      return `This project is licensed by Apache`
    }
  else if (license === "Mozilla") {
    return `This project is licensed by Mozilla`
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)} 
  ## Description
   ${data.description}

   # Table of Contents
   1. [Description](#description)
   2. [License](#license)
   3. [Questions](#questions)
   4. [Installation](#installation)
   5. [Usage](#usage)
   6. [Contributing](#contributing)
   7. [Tests](#tests)


   ## License 
   ${data.license}
   ${renderLicenseLink(data.license)}
   ${renderLicenseSection(data.license)}

   ## Questions
   Find my github profile here: https://github.com/${data.GitHub}
   If you have any questions, please don't hesitate to reach out via email. My email is ${data.email}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

`;
}

module.exports = generateMarkdown;
