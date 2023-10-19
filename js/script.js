let userInput = document.querySelector('#user-input');
let clearButton = document.querySelector('.CA-button');

let currentOperator = null;
let currentNumber = 0;
let previousNumber = 0;
let results = 0;


clearButton.addEventListener('click', ()=>{
    userInput.textContent = '0';
    currentOperator = null;
    currentNumber = 0;
    previousNumber = 0;
    results = 0;
} )


function operate(a, b, operator){
    switch (operator) {
        case 'add':
            
            break;
        
        case 'subtract':

            break;
        
        case 'multiply':

            break;
        
        case 'divide':
        
            break;
        
        default:
            break;
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        'Error!';
        return;
    }
    return a / b
}