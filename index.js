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
        name: "instalation"
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
  })
  .catch(error => {
    if (error) throw error;
  });

}


getUserPrompts()