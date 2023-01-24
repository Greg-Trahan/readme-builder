const inquirer = require("inquirer");
const fs = require("fs");

// # Title
// ## Description
// ##Table of Contents
// ##Installation
// ##Usage
// ##Credits----
// ##License
// ##Badges
// ##Features
// ##How to Contribute
// ##Tests

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your project",
      name: "description",
    },
    {
      type: "input",
      message: "Describe how to install your project",
      name: "installation",
    },
    {
      type: "input",
      message: "Describe how to use your project",
      name: "usage",
    },
    {
      type: "input",
      message: "How can someone contribute to this project?",
      name: "howToContribute",
    },
    {
      type: "input",
      message: "How can a new user test your project?",
      name: "tests",
    },
    {
      type: "list",
      message: "What license do you want applied?",
      choices: ["MIT", "Apache", "Creative Commons"],
      name: "license",
    },
    {
      type: "input",
      message: "",
      name: "email",
    },
    {
      type: "input",
      message: "",
      name: "github",
    },
  ])

  .then((response) => {
    const finalString = `
# ${response.title}

## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Contributions](#contributions)
 - [Tests](#tests)
 - [License](#license)
 - [Questions](#questions)

## Description
${response.description}
${response.badges}

## Installation
${response.installation}

## Usage
${response.usage}

## Contributions
${response.howToContribute}

## Tests
${response.tests}

## License
The owner of this repo has licensed it under a ${response.license} license.

## Questions
GitHub Profile: https://github.com/${response.github}
If you have further questions you can reach me at ${response.email}

`;

    fs.writeFile("README.md", finalString, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
