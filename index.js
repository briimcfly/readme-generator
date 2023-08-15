const fs = require('fs');
const inquirer = require('inquirer');

function o(nion){
    console.log(nion);
}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    }
  ])
  .then((response) => {
    fs.writeFile('readme.md',
    response.name,
    (err) => {
     err ? o("Error") : o("Saved!");
    });
  });
