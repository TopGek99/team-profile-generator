// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license.includes('GPL')) {
    let prefix = "";
    if (license.length == 6) {
      prefix = license[0].toLowerCase();
    }
    link = `https://www.gnu.org/licenses/${prefix}gpl-3.0`
  } else {
    let newLicense = license.replace(" ","-");
    link = `https://opensource.org/licenses/${newLicense}`
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under [${license}](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}
  
## Table of Contents
  
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
  
## Installation

${data.install}
  
## Usage

${data.usage}
  
## License
  
${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}
  
## Tests

${data.test}
  
## Questions
  
Any further questions can be directed to me via my [GitHub](https://github.com/${data.git}/), or [email](${data.email}) if it is a more pressing matter.
`;
}

module.exports = generateMarkdown;
