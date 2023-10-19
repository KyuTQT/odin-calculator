let userInput = document.querySelector('#user-input');
let clearButton = document.querySelector('.CA-button');
let equalsButton = document.querySelector('.equals');
let buttonContainer = document.querySelector('.buttons-container')

let currentOperator = null;
let currentNumber = '';
let previousNumber = '';
let results = 0;


clearButton.addEventListener('click', ()=>{
    userInput.textContent = '0';
    currentOperator = null;
    currentNumber = '';
    previousNumber = '';
    results = '';
} )


buttonContainer.addEventListener('click', function(e){
    if(!isNaN(e.target.value)){
        currentNumber+= e.target.value;
        userInput.value = currentNumber;
    }
})

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