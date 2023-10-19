let userInput = document.querySelector('#user-input');
let clearButton = document.querySelector('.CA-button');
let equalsButton = document.querySelector('.equals');
let buttonContainer = document.querySelector('.buttons-container');

let addButton = document.querySelector('#add');

let currentOperator = '';
let currentNumber = '';
let previousNumber = '';
let results = 0;
let clearInput = false;
let hasComputed = false;


addButton.addEventListener('click', add);
equalsButton.addEventListener('click', () => {
    operate(currentNumber, previousNumber, currentOperator);
})

clearButton.addEventListener('click', ()=>{
    userInput.value = '0';
    currentOperator = '';
    currentNumber = '';
    previousNumber = '';
    results = '';
    clearInput = false;
    hasComputed = false;
} )


buttonContainer.addEventListener('click', function(e){
    if(!isNaN(e.target.value)){
        if(clearInput){
            previousNumber = currentNumber;
            currentNumber = e.target.value;
            userInput.value = currentNumber;
            clearInput = false;
        }
        else{
            currentNumber+= e.target.value;
            userInput.value = currentNumber;
        }
    }
})

function operate(a, b, operator){
    switch (operator) {
        case 'add':
            a = parseInt(a);
            b = parseInt(b);
            results = a + b;
            userInput.value = results;
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

function add(){
    currentOperator = 'add';
    clearInput = true;
}

function subtract(a, b){
    currentOperator = 'subtract';
    clearInput = true;
}

function multiply(a, b){
    currentOperator = 'multiply';
    clearInput = true;
}

function divide(a, b){
    currentOperator = 'divide';
    clearInput = true;
}