let gridContainer = document.querySelector('#grid-container')
let buttons = document.querySelectorAll(".grid-item");

let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');
let equalButton = document.querySelector('equals')

let zeroButton = document.querySelector('#zero');
let oneButton = document.querySelector('#one');
let twoButton = document.querySelector('#two');
let threeButton = document.querySelector('#three');
let fourButton = document.querySelector('#four')
let fiveButton = document.querySelector('#five');
let sixButton = document.querySelector('#six');
let sevenButton = document.querySelector('#seven');
let eightButton = document.querySelector('#eight');
let nineButton = document.querySelector('#nine')

let a = undefined;
let sum1 = '';
let b = undefined;
let sum2 = '';
let operator = '';

gridContainer.addEventListener('mousedown', (event) => {

    //Checks whether the target is a button
    if (event.target.classList.contains("grid-item")) {
        console.log(`You clicked a button! It was the ${event.target.textContent} button`)

        let selectedButton = event.target.textContent;

        //Checks whether the button pressed is between 0-9.
        //Regex eplanation:
        // / & /  starts and ends the regex
        // ^ &  $ begins and ends the string to test for
        // [0-9] is the string to test for 

        if (/^[0-9]$/.test(event.target.textContent)) {

            console.log(`you pressed the ${selectedButton} button`)

            //Checks whether a is currently exists, if it doesn't then it adds it to
            //the displayed string
            if (a == undefined ){
                sum1 += selectedButton;
                display.textContent = sum1;
                console.log(sum1)
            }
            //If a currently exists, then start creating sum 2 
            else {
                sum2 += selectedButton;
                console.log(sum2)
                display.textContent = sum1 + ' ' + operator + ' ' + sum2;
            }
            
        }
        else if (/^[+\-X÷]$/.test(event.target.textContent) && operator == '') {
            a = parseInt(sum1);
            operator = selectedButton;
            display.textContent = sum1 + ' ' + selectedButton + ' ';
            
        }
        else if (selectedButton === '=') {
            b = parseInt(sum2);
        }
        

        //Depress button on mousedown
        event.target.style.border = 'none';
    }
});






const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b ) {
	return a - b;
};

const multiply = function(values) {
  return values.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};


//Release button on mouseup
gridContainer.addEventListener('mouseup', (event) => {

    if (event.target.classList.contains("grid-item")) {
        event.target.style.borderBottom = '3px solid #24246B';  
    }
});