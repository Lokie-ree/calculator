// Once the HTML document is fully loaded, this event triggers the main setup functions below
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
})

// Selects all buttons and adds an event listener to handle each click
document.querySelectorAll('.btn').
forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.getAttribute('data-value'))
    })
});

// This function decides what to do when a button is clicked. The input parameter tells the function which button was clicked and then call other functions depending on which button is clicked
function handleButtonClick(value) {
    switch (value) {
        case 'C':
            clearDisplay();
            break;
        case '=':
            calculateResult();
            break;
        case '+/-':
            toggleSign();
            break;
        case '%':
            applyPercentage();
            break;
        case 'del':
            deleteLastCharacter()
            break;
        default:
            addToDisplay(value);
    }
}

// Clears the calculator's display
function clearDisplay () {
    display.textContent = '';
}

// Uses math.JS to evaluate the expression displayed.  If successful, the result is displayed.  If not, 'error' is shown on the display.
function calculateResult () {
    try {
        const result = Math.evaluate(display.textContent);
        display.textContent = result.toString();
    } catch {
        display.textContent = 'Error';
    }
    
}

// Adds a '-' to a positive number or removes the '-' from a negative number on the display
function toggleSign () {
    if (display.textContent.startsWith('-')) {
        display.textContent.slice(1);
    } else {
        display.textContent = '-' + display.textContent;
    }
}

// Converts the current number displayed to a percentage
function applyPercentage () {
    display.textContent = (parseFloat(display.textContent) / 100).toString();
}

// Deletes the last character from the display
function deleteLastCharacter () {
    display.textContent = display.textContent.slice(0, -1);
}

// Adds the clicked button's value to the display
function addToDisplay (value) {
    if (isOperator(value) && isOperator(display.textContent.slice(-1))) {
        display.textContent.slice(0, -1) + value;
    } else {
        display.textContent += value;
    }
}


function isOperator (character) {
    return ['+', '-', '*', '/'].includes(character);
}
