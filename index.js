var fs = require("fs");
var inquirer = require("inquirer");

function getUserPrompts(){
inquirer
  .prompt([
      {
          type:"input",
          message:"Enter Project Title",
          name: "title"
      },
      {
        type:"input",
        message:"Enter Project Description",
        name: "description"
    },      {
        type:"input",
        message:"Enter Instalation Instructions",
        name: "installation"
    },      {
        type:"input",
        message:"Enter Testing Instructions",
        name: "testing"
    },      {
        type:"input",
        message:"Enter Usage",
        name: "usage"
    },      {
        type:"input",
        message:"Enter Developer Name",
        name: "developer"
    },
    {
        type:"input",
        message:"Enter Github Username",
        name: "github"
    },    
      {
        type:"input",
        message:"Enter Email address",
        name: "email"
    },      {
        type:"list",
        message:"Choose License",
        choices:["MIT","ISC","none","APACHE 2.0"],
        name: "license"
    }
  ]).then(function(answers){
    
    console.log(answers)

    var readmetext = `
# Project: ${answers.title}

## DEveloper: ${answers.developer}

### Profile: 
![Developer Profile](https://github.com/${answers.github})

## Table of Contents

* [Test](#test)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Questions](#questions)



#### Test

${answers.testing}

#### Installation

${answers.installation}

#### Usage

${answers.usage}

#### License


${answers.license}
![Github License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

#### Questions

Please feel free to reach out to me at ${answers.email}


`

console.log(readmetext)
  })
  .catch(error => {
    if (error) throw error;
  });

}


getUserPrompts()