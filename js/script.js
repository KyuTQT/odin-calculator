let userInput = document.querySelector('#user-input');
let clearButton = document.querySelector('.CA-button');
let equalsButton = document.querySelector('.equals');
let buttonContainer = document.querySelector('.buttons-container');

let addButton = document.querySelector('#add');

let currentOperator = '';
let currentNumber = '';
let previousNumber = '';
let results = null;
let clearInput = false;
let count = 1;
let hasComputed = false;
let computeNow = false;
let hasPressedNumber = false;


addButton.addEventListener('click', add);
equalsButton.addEventListener('click', () => {
    hasPressedNumber = false;
    if(hasComputed){
        operate(results, currentNumber, currentOperator);
        previousNumber = '';
    }
    else{
        operate(currentNumber, previousNumber, currentOperator);
        previousNumber = '';
    }
    
})

clearButton.addEventListener('click', ()=>{
    userInput.value = '0';
    currentOperator = '';
    currentNumber = '';
    previousNumber = '';
    results = '';
    clearInput = false;
} )


buttonContainer.addEventListener('click', function(e){
    if(!isNaN(e.target.value)){
        hasPressedNumber = true;
        if(!hasComputed){
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
        else{
            if(clearInput){
                currentNumber = e.target.value;
                userInput.value = currentNumber;
                clearInput = false;
            }
            else{
                currentNumber+= e.target.value;
                userInput.value = currentNumber;
            }
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
            if(!hasComputed){
                hasComputed = true;
                count = 1;
            }
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
    if(hasPressedNumber){
        count++;
        if(!hasComputed && count > 2){
            computeNow = true;
            operate(previousNumber, currentNumber, currentOperator);
        }
        else if(hasComputed){
            operate(results, currentNumber, currentOperator);
        }
    }
    hasPressedNumber = false;
    
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