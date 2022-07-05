const input = {
    currentNum: '',
    previousNum: '',
    op: '',
}

const upper = document.querySelector('.upper');
const bottom = document.querySelector('.bottom');
const numKey = Array.from(document.querySelectorAll('.input'));
const enter = document.querySelector('.enter');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const operate = Array.from(document.querySelectorAll('.op'));

//All keys function listed below
window.addEventListener('keydown', keyPress);

//number keys function
numKey.forEach((key) => {
    key.addEventListener('click', (e) => {
        getValue(e.target.value);
    })
})

//operator keys function
operate.forEach((key) => {
    key.addEventListener('click', (e) => {
        getOperate(e.target.value);
    })
})

//equal key function
enter.addEventListener('click', () => {
    if (input.currentNum !== '' && input.previousNum !== '') {
        compute(input);
    }
});

//delete key function
del.addEventListener('click', deleteNum);

//Clearall key function
clear.addEventListener('click', clearAll);

//All function required are listed below

//Respond the keypad input
function keyPress(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
        getValue(e.key);
    }
    if (e.key === "Enter" || e.key === "=") {
        compute(input);
    }
    if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
        getOperate(e.key);
    }
    if (e.key === ".") {
        getValue(e.key);
    }
    if (e.key === "Backspace") {
        deleteNum();
    }
}

//Get the input value
function getValue(a) {
    if (a !== '.' || !input.currentNum.includes('.')) {
        if (input.currentNum.length <= 10) {
            input.currentNum += a;
        }
    }
    upper.textContent = input.currentNum;
}

//get the operator
function getOperate(b) {
    if (input.currentNum !== '') {
        if (input.previousNum !== '') {
            compute(input);
        }
    }
    input.op = b;
    input.previousNum = input.currentNum;
    input.currentNum = '';
    upper.append(input.op);
}

//Make function calculate numbers
function compute(input) {
    var pre = parseFloat(input.previousNum);
    var cur = parseFloat(input.currentNum);

    if (isNaN(pre) || isNaN(cur)) return
    switch (input.op) {
        case '+':
            pre += cur;
            pre = roundNum(pre);
            input.currentNum = pre.toString();
            break
        case '-':
            pre -= cur;
            pre = roundNum(pre);
            input.currentNum = pre.toString();
            break
        case '*':
            pre *= cur;
            pre = roundNum(pre);
            input.currentNum = pre.toString();
            break
        case '/':
            if (cur !== 0) {
                pre /= cur;
                pre = roundNum(pre);
                input.currentNum = pre.toString();
            } else {
                input.currentNum = "Error, can't be divided by 0!";
            }
    }
    bottom.textContent = input.currentNum;
    input.previousNum = '';
    input.op = '';
}

//Round the result number
function roundNum(num) {
    return Math.round(num * 10000000) / 10000000;
}

//Function to clear all the input and output
function clearAll() {
    var display = document.querySelector('.display');
    input.currentNum = '';
    input.previousNum = '';
    input.op = '';
    upper.textContent = '';
    bottom.textContent = 0;
}

//Delete the last input number
function deleteNum() {
    input.currentNum = input.currentNum.slice(0, -1);
    upper.textContent = input.currentNum;
}