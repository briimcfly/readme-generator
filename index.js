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
    name: 'description',
    } 
  ])
  .then((response) => {
    fs.writeFile('readme.md',
    `# ${response.title}
## Description 
${response.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    `,
    (err) => {
     err ? b("Error") : b("Saved!");
    });
  });
