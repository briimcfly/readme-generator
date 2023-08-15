const fs = require('fs');
const inquirer = require('inquirer');

function b(ark){
    console.log(ark);
}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Title of the Project',
      name: 'title',
      //Title is Required
      validate: (input) => {
        if (input.trim()=== ""){
          return "Title is required";
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Write the Description',
      name: 'description'
    },
    {
      type: 'input',
      message: 'Provide Installation Instructions',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'Provide Usage Information',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'Provide Contribution Guidelines',
      name: 'contribution'
    },
    {
      type: 'input',
      message: 'Provide Test Instructions',
      name: 'test'
    },
    {
      type: 'list',
      message: "Pick type of License",
      choices: [
        new inquirer.Separator('--- Apache:'),
        `Apache 2.0 License`,
        new inquirer.Separator('--- Boost:'),
        `Boost Software License 1.0`,
        new inquirer.Separator('--- BSD:'),
        `BSD 3-Clause License`,
        `BSD 2-Clause License`,
        new inquirer.Separator('--- Creative Commons:'),
        `CC0`,
        `Attribution 4.0 International License`,
        `Attribution-ShareAlike 4.0 International License`,
        `Attribution-NonCommercial 4.0 International License`,
        `Attribution-NoDerivates 4.0 International License`,
        `Attribution-NonCommercial-ShareAlike 4.0 International License`,
        `Attribution-NonCommercial-NoDerivatives 4.0 International License`,
        new inquirer.Separator('--- Eclipse:'),
        `Eclipse Public License 1.0`,
        new inquirer.Separator('--- GNU:'),
        `GNU GPL v3 License`,
        `GNU GPL v2 License`,
        `GNU AGPL v3 License`,
        `GNU LGPL v3 License`,
        `GNU FDL v1.3 License`,
        new inquirer.Separator('--- The Organization for Ethical Source:'),
        `The Hippocratic License 2.1`,
        `The Hippocratic License 3.0`,
        new inquirer.Separator('--- IBM:'),
        `IBM Public License Version 1.0`,
        new inquirer.Separator('--- ISC:'),
        `ISC License (ISC)`,
        new inquirer.Separator('--- MIT:'),
        `The MIT License`,
        new inquirer.Separator('--- Mozilla:'),
        `Mozilla Public License 2.0`,
        new inquirer.Separator('--- Open Data Commons:'),
        `Attribution License (BY)`,
        `Open Database License (ODbL)`,
        `Public Domain Dedication and License (PDDL)`,
        new inquirer.Separator('--- Perl:'),
        `The Perl License`,
        `The Artistic License 2.0`,
        new inquirer.Separator('--- SIL:'),
        `SIL Open Font License 1.1`,
        new inquirer.Separator('--- Unlicense:'),
        `The Unlicense`,
        new inquirer.Separator('--- WTFPL:'),
        `The Do What the F*ck You Want to Public License`,
        new inquirer.Separator('--- Zlib:'),
        `The zlib/libpng License`
      ],
      name: 'license'
    }

  ])
  .then((response) => {
    const title = response.title;
    const license = response.license;
    //Set NA if responses are empty
    const description = response.description || "N/A";
    const installation = response.installation || "N/A";
    const usage = response.usage || "N/A";
    const contribution = response.contribution || "N/A";
    const test = response.test || "N/A";


    //Write to the README
    fs.writeFile('readme.md',
`# ${title}
## Description 
${description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## Contributing
${contribution}
## Tests
${test}
## License
This project is licensed under the terms of ${license}

`,
    (err) => {
     err ? b("Error") : b("Saved!");
    });
  });
