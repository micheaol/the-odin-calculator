const numberBtns = document.querySelectorAll('.data-number');
const allButtons = document.querySelectorAll('button');
// const totalOutputScreen = document.querySelector('.total-output-screen');
const clearBtn = document.querySelector('#clear-button');
const resetBtn = document.querySelector('#reset-button');
const equalBtn = document.querySelector('.equal-btn');
const dataOperatorBtn = document.querySelectorAll('.data-operator');
const outputScreen = document.querySelector('.output-screen');

//destructure buttons with spread operator:
let numberBtnSpread = [...numberBtns];
let allBtnSpread = [...allButtons];
let dataOperatorBtns = [...dataOperatorBtn];

//Variable for function:
let currentOperator = "";
let firstOperand = "";
let secondOperand = "";
let totalResult = null;
let toCleared = false;

//function to add:
function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

//funtion for multiplication:
function multiply(a, b) {
    return parseFloat(a) * parseFloat(a);
}

//function of subtraction:
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

//divition function:
function divide(a, b) {
    if (parseFloat(b) === 0) {
        return "Can't divide by Zero"
    } else {
        return parseFloat(a) / parseFloat(b)
    }
}

//function for %:
function percentage(a, b) {
    return Math.pow(parseFloat(a), parseFloat(b))
}

//Operate function to check the function:
function operate(operator, firstInput, secondInput) {
    switch (operator) {
        case '+':
            return add(firstInput, secondInput)
            break;
        case '-':
            return subtract(firstInput, secondInput)
            break;
        case '*':
            return multiply(firstInput, secondInput)
            break;
        case '/':
            return divide(firstInput, secondInput)
            break;
        case '%':
            return percentage(firstInput, secondInput)
            break;
    }
}

//to display value on the screen:
function displayValue(value) {
    outputScreen.value = outputScreen.value + value;
}

//How to get display value:
function getDisplayValue() {
    return outputScreen.value;
}

//function to set operators:
function setOperators(operator) {
    if (currentOperator === null) {
        currentOperator = operator
    } else if (firstOperand && secondOperand) {
        totalResult = operate(currentOperator, Number(firstOperand), Number(secondOperand));
        clearScreen();
        displayValue(totalResult);
        firstOperand = totalResult;
        secondOperand = "";
        currentOperator = operator
    }
}

//function to clear the screen:
function clearScreen() {
    outputScreen.value = "";
}

//function to clear all value from the screen:
function clearAllScreen() {
    firstOperand = "";
    secondOperand = "";
    currentOperator = "";
    clearScreen();
}

//function to set operand:
function setOperand(value) {
    if (firstOperand === null) {
        firstOperand = value;
    } else {
        secondOperand = value
    }
}

//function to generate result:
function generateResult() {
    if (firstOperand && currentOperator && !toCleared && !secondOperand) {
        setOperand(getDisplayValue());
        return operate(currentOperator, Number(firstOperand), Number(secondOperand))
    } else {
        return false;
    }
}

//loop through the number buttons:
numberBtnSpread.forEach((numberBtn) => {
    numberBtn.addEventListener('click', (e) => {
        if (toCleared) {
            clearScreen();
        }
        displayValue(e.target.textContent)
    });
});

//loop through operator buttons:
dataOperatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', (e) => {
        setOperand(getDisplayValue());
        setOperators(e.target.dataset.action);
        toCleared = true;
    });
});

//add event listerner to equalbtn:
equalBtn.addEventListener('click', () => {
    totalResult = generateResult();
    clearScreen();
    if (totalResult) {
        displayValue(totalResult);
        console.log(totalResult)
    }
});

//add event listener to the clear button:
clearBtn.addEventListener('click', () => {
    clearAllScreen();
});

//add event listerner to the reset button:
resetBtn.addEventListener('click', () => {
    clearAllScreen();
})