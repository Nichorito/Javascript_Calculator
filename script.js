let gridContainer = document.querySelector('#grid-container')
let buttons = document.querySelectorAll(".grid-item");

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

        if (/^[0-9.]$/.test(event.target.textContent)) {

            console.log(`you pressed the ${selectedButton} button`)

            //Checks whether a currently exists, if it doesn't then it adds it to
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
                display.textContent = a + ' ' + operator + ' ' + sum2;
            }
            
        }

        //Tests for operator selection
        else if (/^[+\-X÷]$/.test(event.target.textContent) && operator == '') {
            // If a doesn't exist then create it from sum1
            if (a === undefined) {a = parseFloat(sum1);} 
            operator = selectedButton;
            display.textContent = a + ' ' + selectedButton + ' ';
        }

        //If the equal button is pressed
        else if (selectedButton === '=' && operator != '') {
            b = parseFloat(sum2);
            let result = operate(a, b, operator); 
            let roundedResult = result;

            //If result is not divisible by 1 then round to two decimal places
            //as a float.  Makes it so that whole numbers do not have decimals
            if (result % 1 !== 0) {roundedResult = result.toFixed(2);}

            a = roundedResult;
            b = undefined;
            sum2 = '';
            operator = '';
            //Log results
            console.log(result);
            display.textContent = roundedResult;
        }

        //If the clear button is pressed, all items are reset to default values
        else if (selectedButton === 'CLEAR') {
            a = undefined;
            sum1 = '';
            b = undefined;
            sum2 = '';
            operator = '';
            display.textContent = 0;
        }
        
        //Depress button on mousedown
        event.target.style.border = 'none';
    }
});

//Checks which operation to run
function operate(a,b) {
    let result = 0;
    if (operator == '+') {
        result = add(a,b);
    } else if (operator == '-') {
        result = subtract(a,b);
    } else if (operator == 'X') {
        result = multiply(a,b);
    } else {
        result = divide(a,b);
    }
    return result;
}

///////////////////////// Possible operations ////////////////////////////

function add(a, b) {
	return a + b;
};

function subtract(a, b ) {
	return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a,b) {
    return a / b;
}

////////////////////////////////////////////////////////////////////////

//Release button on mouseup
gridContainer.addEventListener('mouseup', (event) => {

    if (event.target.classList.contains("grid-item")) {
        event.target.style.borderBottom = '3px solid #24246B';  
    }
});