//to get all the buttons on the page:
const buttons = document.querySelectorAll('button');
const currentDisplayScreen = document.querySelector('#currentDisplay-screen');


//set a var to reset display screen
let resetScreen = false;


//add event listener to each button:
buttons.forEach((button) => {
    button.addEventListener('click', appendNumber);
});

//Click function to check which keypad is clicked
function appendNumber(button) {
    //Get the value of the button clicked
    let btnInput = button.target.textContent;
    //reset display screen if:
    if (currentDisplayScreen.textContent === '0' || resetScreen) {
        currentDisplayScreen.textContent = "";
    }
    //set the value of button clicked to show in the display
    currentDisplayScreen.textContent += btnInput;
}

//clear screen function:
function clearScreen() {
    if (currentDisplayScreen.textContent === 'C') {
        currentDisplayScreen.textContent = "";
    }
}
//Create an array of keypads' value:
const keyPads = [
    7, 8, 9, 'C', 'AC', 4, 5, 6, '÷', 'x', 1, 2, 3, '+', '-', '+/-', 0, '.', '=',
]

for (let counter = 0; counter < keyPads.length; counter++) {
    // console.log(keyPads[counter])
}