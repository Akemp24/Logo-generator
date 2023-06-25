// use inquirer and call packages needed
const fs = require('fs');
const inquirer = require('inquirer');

// Write code for a prompt input
inquirer.prompt([
    {
        // Enter 3 character prompt
        type:'input',
        message:'Please give up to 3 characters for your logo',
        name:'characters'
    },
    {
        // Enter a color keyword
        type:'input',
        message:'Please type in the name of the color for the characters',
        name:'charColor'
    },
    {
        // Enter a shape from a circle, triange, and square
        type: 'list',
        message:'Please select shape of logo',
        name:'shape',
        choices:['circle', 'triangle', 'square']
    },
    {
        // Enter shape color keyword
        type:'input',
        message:'Please select a color for the shape of the logo',
        name:'shapeColor',
    }
    
])







// 

// creates the logo.svg in command line and opens in a browser
// these go into the examples folder
