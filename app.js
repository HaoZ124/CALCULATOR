//Get the value from pressing key
function getValue(a) {
    keyInput.result += a;
    console.log(keyInput.result);
}

var keyInput = {
    num1: 10,
    num2: 10,
    op: '*',
    result: 0,
}


//Make function calculate numbers
function operate(input) {
    switch (input.op) {
        case '+':
            input.result = input.num1 + input.num2;
            break;
        case '-':
            input.result = input.num1 - input.num2;
            break;
        case '*':
            input.result = input.num1 * input.num2;
            break;
        case '/':
            if (input.num2 !== 0) {
                input.result = input.num1 / input.num2;
            } else {
                input.result = 'Error, cannot be divided by 0!'
            }
    }
    return input.result;
}

//Display the result
function displayResult(input) {
    var display = document.querySelector('.display');
    display.textContent = operate(input);
}
displayResult(keyInput);
//Function to clear all the input and output
var clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);

function clearAll() {
    var display = document.querySelector('.display');
    keyInput.num1 = 0;
    keyInput.num2 = 0;
    keyInput.op = '';
    keyInput.result = 0;
    display.textContent = 0;
}