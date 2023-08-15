const fs = require('fs');
const inquirer = require('inquirer');

function o(nion){
    console.log(nion);
}

inquirer
  .prompt([
    {
    type: 'input',
    message: 'Title of the Project',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Write the Description',
    name: 'description',
    } 
  ])
  .then((response) => {
    fs.writeFile('readme.md',
    `# ${response.title}
## Description 
${response.description}
## Table of Contents
[<li> Description](#description)
[<li> Installation](#installation)
[<li> Usage](#usage)
[<li> License](#license)
[<li> Contributing](#contributing)
[<li> Tests](#tests)
[<li> Questions](#questions)
    `,
    (err) => {
     err ? o("Error") : o("Saved!");
    });
  });
