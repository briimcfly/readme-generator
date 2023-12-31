const fs = require('fs');
const inquirer = require('inquirer');

//Array of Licenses to link name with the license badge
const licenses = [
  {name: `None`, link: ``},
  {name: `Apache 2.0 License`, link:`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`},
  {name: `Boost Software License 1.0`, link:`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`},
  {name: `BSD 3-Clause New" or "Revised" License`, link:`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`},
  {name: `BSD 2-Clause "Simplified" License`, link:`[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`},
  {name: `Creative Commons Zero v1.0 Universal License`, link:`[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`},
  {name: `Eclipse Public License 2.0`, link:`[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`},
  {name: `GNU General Public License v3.0`, link:`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`},
  {name: `GNU Affero General Public License v3.0`, link:`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`},
  {name: `GNU Lesser General Public License v3.0`, link:`[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`},
  {name: `IBM Public License Version 1.0`, link:`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`},
  {name: `The MIT License`, link:`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`},
  {name: `Mozilla Public License 2.0`, link:`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`},
  {name: `The Unlicense`, link:`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`}
];

//Find the License name from the License Array
const licenseChoice = () => {
  return licenses.map(license => license.name);
};


inquirer
  .prompt([
    {
      //Title
      type: 'input',
      message: 'Title of the Project',
      name: 'title',
      //Title is Required
      validate: title => !title ? 'Title is required' : true
    },
    {
      //Description
      type: 'input',
      message: 'Write the Description',
      name: 'description'
    },
    {
      //Installation Instructions
      type: 'input',
      message: 'Provide Installation Instructions',
      name: 'installation'
    },
    {
      //Usage
      type: 'input',
      message: 'Provide Usage Information',
      name: 'usage'
    },
    {
      //Contributing
      type: 'input',
      message: 'Provide Contribution Guidelines',
      name: 'contribution'
    },
    {
      //Test Instrucitons
      type: 'input',
      message: 'Provide Test Instructions',
      name: 'test'
    },
    {
      //Licenses
      type: 'list',
      message: "Pick type of License",
      choices: licenseChoice(),
      name: 'license'
    },
    {
      //Github Username
      type: 'input',
      message: 'Enter your Github username',
      name: 'github',
      validate: github => !github ? 'Github is Required' : true

    },
    {   
      //Email Address 
      type: 'input',
      message: 'Enter your email address',
      name:'email',
      validate: email => !email ? 'Email is Required' : true

    },
  

  ])
  .then((response) => {
    const title = response.title;
    let license = response.license;
    //Find License & Link ..
    const licenseBadge = (licenses.find(x => x.name === license)).link; //badge
    license = license !== 'None' ? `This project is licensed under the terms of ${license}` : 'N/A';
    //Set NA if responses are empty
    const description = response.description || "N/A";
    const installation = response.installation || "N/A";
    const usage = response.usage || "N/A";
    const contribution = response.contribution || "N/A";
    const test = response.test || "N/A";
    const github = response.github || "N/A";
    const email = response.email || "N/A";


    //Write to the README
    fs.writeFile('readme.md',
`# ${title}
${licenseBadge}
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
${license}
## Questions
If you have any questions or need further assistance, feel free to reach out to me:<br>
- **Email:** ${email}
- **GitHub:** [@${github}](https://github.com/${github})


`, //Error
    (err) => {
     err ? console.log("Error") : console.log("Saved!");
    });
  });
