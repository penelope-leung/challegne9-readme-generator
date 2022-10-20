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
    message: 'Please provide a description of the project',
    name: 'entitledDes',
  },
  {
    type: 'input',
    message: 'What is the installation?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'How do you use this application?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Which license do you use?',
    choices: ["MIT" ,"IBM", "ISC", "None"],
    name:'license',
  },{
    type: 'input',
    message: 'Who is the contributor?',
    name : 'contrib',
  },{
    
    type: 'input',
    message: 'How do you test this application?',
    name : 'testing',
 },{
    type: 'input',
    message: 'What is your Github username?',
    name : 'github',

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
