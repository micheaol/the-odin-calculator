//to get all the buttons on the page:
const buttons = document.querySelectorAll('button');



//add event listener to each button:
buttons.forEach((button) => {
    button.addEventListener('click', clickButton);
});

function clickButton(button) {
    console.log(button.target.textContent)
}


//Create an array of keypads' value:
const keyPads = [
    7, 8, 9, 'C', 'A', 4, 5, 6, '÷', 'x', 1, 2, 3, '+', '-', '+/-', 0, '.', '=',
]

for (let counter = 0; counter < keyPads.length; counter++) {
    console.log(keyPads[counter])
}