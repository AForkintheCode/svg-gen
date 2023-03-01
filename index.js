const inquirer = require ('inquirer')

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
        choices: ['Triangle','Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the shape be?'
    },
])
.then((data)=>{
    console.log(data);
})