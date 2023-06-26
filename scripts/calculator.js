let num1 = '',
    num2 = '',
    operator = '';

let display = document.querySelector('#screen');

// special operators
const btnEquals = document.querySelector('.btnEquals');
btnEquals.addEventListener('click', () => {
    if (num1 != '' && operator != '') {
        num2 = display.textContent;
        display.textContent = operate(+num1, operator, +num2);
    }
});

const btnClear = document.querySelector('.btnClear');
btnClear.addEventListener('click', () => {
    clear();
})

const btnNumbers = document.querySelectorAll('.btnNumber');
btnNumbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.textContent += btn.textContent;
    });
});

const btnOperators = document.querySelectorAll('.btnOperator');
btnOperators.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (num1 === '' && display.textContent != '') {
            num1 = display.textContent;
            operator = btn.textContent;
            display.textContent = '';
        }
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

function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '';
}