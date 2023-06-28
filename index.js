// use inquirer and call packages needed
const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require("./shapes");

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

function generateLogo() {
    inquirer.prompt(questions).then((answers) => {
        const {text, textColor, shape, shapeColor} = answers;

        let logoShape;
        if (shape === "circle") {
            logoShape = new Circle();
        } else if (shape === "triangle") {
            logoShape = new Triangle();
        } else if (shape === "square") {
            logoShape = new Square();
        }

        logoShape.setColor(shapeColor);

        const textSvg = `<text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>`;

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">${logoShape.render()}${textSvg}</svg>`;

        fs.writeFile("logo.svg", svg, (err) => {
            if (err) throw err;
            console.log("Generated Logo")
        });

    });
};

generateLogo();







// 

// creates the logo.svg in command line and opens in a browser
// these go into the examples folder
