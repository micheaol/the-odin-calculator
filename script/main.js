//to get all the buttons on the page:
const buttons = document.querySelectorAll('button');
const currentDisplayScreen = document.querySelector('#current-screen');


//set a var to reset display screen
let resetScreen = false;


//add event listener to each button:
buttons.forEach((button) => {
    button.addEventListener('click', appendNumber);
});

//Click function to check which keypad is clicked
function appendNumber(button) {
    let btnInput = button.target.textContent;
    if (currentDisplayScreen.textContent === '0' || resetScreen) {
        currentDisplayScreen.textContent = "";
    }
    currentDisplayScreen.textContent += btnInput;
}

//clear screen function:

//Create an array of keypads' value:
const keyPads = [
    7, 8, 9, 'C', 'AC', 4, 5, 6, '÷', 'x', 1, 2, 3, '+', '-', '+/-', 0, '.', '=',
]

for (let counter = 0; counter < keyPads.length; counter++) {
    // console.log(keyPads[counter])
}