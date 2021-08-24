//to get all the buttons on the page:
const buttons = document.querySelectorAll('.number');
const outputScreen = document.querySelector('.output-screen');
const dataOperatorBtns = document.querySelectorAll('#clear-button')



//looping through number button:
buttons.forEach((button) => {
    button.addEventListener('click', appendDigit);

});



//function to print number to the screen:
function appendDigit(button) {

    outputScreen.placeholder += button.target.textContent
}

dataOperatorBtns.forEach((button) => {
    button.addEventListener('click', clearScreen)
});

//function to clear the output screen:
function clearScreen() {
    outputScreen.placeholder = "";
}