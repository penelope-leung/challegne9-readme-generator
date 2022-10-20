// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [    {
    type: 'input',
    message: 'What is the title of Project?', 
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the sections entitled description',
    name: 'entitledDes',
  },
  {
    type: 'input',
    message: 'What is the installation?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'What is the Usage?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What is the License',
    choices: ["MIT" ,"IBM", "ISC", "None"],
    name:'license',
  },{
    type: 'input',
    message: 'What is the contributing',
    name : 'contrib',
  },{
    
    type: 'input',
    message: 'What is the tests',
    name : 'test',
 },{
    type: 'input',
    message: 'What is your Github repo?',
    name : 'gibhub',

 },{
    type: 'input',
    message: 'What is your email address?',
    name : 'email',

 },

]

// TODO: Create a function to write README file


function writeToFile(fileName, data) {

console.log(data);
    fs.writeFile(fileName,data, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    writeToFile('GeneratedREADME.md',generateMarkdown({...response})
    )}  );
}

// Function call to initialize app
init();
