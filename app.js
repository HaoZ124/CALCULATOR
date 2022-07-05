const input = {
    currentNum: '',
    previousNum: '',
    op: '',
}

const upper = document.querySelector('.upper');
const bottom = document.querySelector('.bottom');

//Get the value from pressing key
function getValue(a) {
    if (a !== '.' || !input.currentNum.includes('.')) {
        if (input.currentNum.length <= 10) {
            input.currentNum += a;
        }
    }
    upper.textContent = input.currentNum;
}

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
            break
        case '-':
            pre -= cur;
            break
        case '*':
            pre *= cur;
            break
        case '/':
            if (cur !== 0) {
                pre /= cur;
            } else {
                input.currentNum = 'Error, cannot be divided by 0!'
            }
    }
    pre = roundNum(pre);
    input.currentNum = pre.toString();
    bottom.textContent = input.currentNum;
    input.previousNum = '';
    input.op = '';

}

function roundNum(num) {
    return Math.round(num * 100000) / 100000;
}

var enter = document.querySelector('#enter');
enter.addEventListener('click', () => {
    if (input.currentNum !== '' && input.previousNum !== '') {
        compute(input);
    }
});

//Function to clear all the input and output
var clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);

function clearAll() {
    var display = document.querySelector('.display');
    input.currentNum = '';
    input.previousNum = '';
    input.op = '';
    upper.textContent = '';
    bottom.textContent = 0;
}

const del = document.querySelector('.del');
del.addEventListener('click', deleteNum);

function deleteNum() {
    input.currentNum = input.currentNum.slice(0, -1);
    console.log(input);
    upper.textContent = input.currentNum;
}