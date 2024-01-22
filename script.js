let gridContainer = document.querySelector('#grid-container')
let buttons = document.querySelectorAll(".grid-item");
let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');
 let equalButton = document.querySelector('equals')
 
const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b ) {
	return a - b;
};

const multiply = function(values) {
  return values.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};





//Depress button on mousedown
gridContainer.addEventListener('mousedown', (event) => {
    console.log("You clicked a button!")

    if (event.target.classList.contains("grid-item")) {
        event.target.style.border = 'none';
    }
})

//Release button on mouseup
gridContainer.addEventListener('mouseup', (event) => {
    console.log("You clicked a button!")

    if (event.target.classList.contains("grid-item")) {
        event.target.style.borderBottom = '3px solid #24246B';  
    }
});