const inquirer = require ('inquirer')
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shape.js');
const SVG = require('./lib/svg.js')

inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape.',
        choices: ['Triangle','Circle', 'Square', 'Star']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the shape be?'
    },
])
.then((data)=>{
    console.log(data);
    let shape;
    if (data.shape === 'Circle') {
        shape = new Circle
    }
    if (data.shape === 'Triangle') {
        shape = new Triangle
    }
    if (data.shape === 'Square') {
        shape = new Square
    }

    shape.setColor(data.shapeColor)
    const svg = new SVG;
    svg.setText(data.text, data.textColor)
    svg.setShape(shape)
    fs.writeFileSync('logo.svg', svg.render())
})