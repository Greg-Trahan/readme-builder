const inquirer = require("inquirer");
const fs = require("fs");

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
    badge = pickBadge(response);

    const finalString = `
# ${response.title}

## Table of Contents\n
 - [Description](#description)\n
 - [Installation](#installation)\n
 - [Contributions](#contributions)\n
 - [Tests](#tests)\n
 - [License](#license)\n
 - [Questions](#questions)

## Description
${badge}
${response.description}


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

    fs.writeFile("README_Sample.md", finalString, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

function pickBadge(response) {
  if (response.license === "MIT") {
    badge =
      "[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)";
  } else if (response.license === "Apache") {
    badge =
      "[![Npm package license](https://badgen.net/npm/llicense/discord.js)](https://npmjs.com/package/discord.js)";
  } else {
    badge =
      "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
  }
  return badge;
}
