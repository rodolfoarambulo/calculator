let num1 = '',
    num2 = '',
    operator = '';

let display = document.querySelector('#screen');

const btnNumbers = document.querySelectorAll('.btnNumber');
btnNumbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.textContent += btn.textContent;
    });
});

function operate(num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }

    if (operator === '-') {
        return subtract(num1, num2);
    }

    if (operator === '*') {
        return multiply(num1, num2);
    }

    if (operator === '/') {
        return divide(num1, num2);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}