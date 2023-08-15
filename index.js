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
    `
    # ${response.title}

    ## Description 
    ${response.description}

    `,
    (err) => {
     err ? o("Error") : o("Saved!");
    });
  });
