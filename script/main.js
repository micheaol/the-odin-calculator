const numberBtns = document.querySelectorAll('.data-number');
const allButtons = document.querySelectorAll('button');
const outputScreen = document.querySelector('.output-screen');
const clearBtn = document.querySelector('#clear-button');
const resetBtn = document.querySelector('#reset-button');
const equalBtn = document.querySelector('.equal-btn');
const dataOperatorBtn = document.querySelectorAll('.data-operator');

//destructure buttons with spread operator:
let numberBtnSpread = [...numberBtns];
let allBtnSpread = [...allButtons];
let dataOperatorBtns = [...dataOperatorBtn];




//loop through each number button and append button click to the screen:
numberBtnSpread.forEach((button, i) => {
    button.addEventListener('click', () => {

        if (outputScreen.value === "0") {
            outputScreen.value = "";
        }
        let value = numberBtns[i].innerHTML;
        outputScreen.value += value

    });
});

//loop through each operation button and append button click to the screen:
dataOperatorBtns.forEach((button, i) => {
    button.addEventListener('click', () => {
        if (outputScreen.value === "0") {
            outputScreen.value = "";
        }
        let value = dataOperatorBtn[i].innerHTML;
        outputScreen.value += value
        // console.log(button.dataset.action)
        if (button.dataset.action === 'add') {
            
        }
    });
});

//set clear button
clearBtn.addEventListener('click', clearScreen);

//set reset scree button:
resetBtn.addEventListener('click', resetScreen);


//clear screen function:
function clearScreen() {
    outputScreen.value = "";
}

//reset screen function:
function resetScreen() {
    outputScreen.value = "";
    outputScreen.value += "0"
}
//To calculate all input:
// equalBtn.addEventListener('click', calculate());



//function to evalute string:
// function calculate() {
//     for (let counter = 0; counter < dataOperatorBtns.length; counter++) {
//         console.log(dataOperatorBtns)
//     }
// }

//function to add:
function add(a, b) {
    return a + b
}