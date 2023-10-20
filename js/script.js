let userInput = document.querySelector('#user-input');
let clearButton = document.querySelector('.CA-button');
let equalsButton = document.querySelector('.equals');
let buttonContainer = document.querySelector('.buttons-container');

let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');
let decimalButton = document.querySelector('#decimal');

let currentOperator = '';
let currentNumber = '';
let previousNumber = '';
let results = null;
let clearInput = false;
let count = 1;
let hasComputed = false;
let computeNow = false;
let hasPressedNumber = false;
let onPreviousNumber = false;
let hasDecimal = false;


addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
decimalButton.addEventListener('click', ()=>{
    if(!hasDecimal){
        hasDecimal = true;
        if(!previousNumber){
            currentNumber+='.';
            userInput.value = currentNumber;
        }
        else{
            previousNumber+='.';
            userInput.value = previousNumber;
        }
    }
});

equalsButton.addEventListener('click', () => {
    if(results === 'ERROR'){
        return;
    }
    hasPressedNumber = false;
    if(hasComputed){
        operate(results, currentNumber, currentOperator);
        previousNumber = '';
    }
    else{
        operate(currentNumber, previousNumber, currentOperator);
        previousNumber = '';
    }
    
});

clearButton.addEventListener('click', ()=>{
    userInput.value = '0';
    currentOperator = '';
    currentNumber = '';
    previousNumber = '';
    results = null;
    clearInput = false;
    count = 1;
    hasComputed = false;
    computeNow = false;
    hasPressedNumber = false;
    onPreviousNumber = false;
    hasDecimal = false;
});


buttonContainer.addEventListener('click', function(e){
    if(results === 'ERROR'){
        return;
    }
    if(!isNaN(e.target.value)){
        hasPressedNumber = true;
        if(!hasComputed){
            if(clearInput){
                previousNumber =  e.target.value;;
                userInput.value = previousNumber;
                clearInput = false;
            }
            else{
                if(onPreviousNumber){
                    previousNumber+= e.target.value;
                    userInput.value = previousNumber;
                }
                else{
                    currentNumber+= e.target.value;
                    userInput.value = currentNumber;
                }
                
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
});

function operate(a, b, operator){
    if(results === 'ERROR'){
        return;
    }
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
            a = parseInt(a);
            b = parseInt(b);
            results = a - b;
            userInput.value = results;
            if(!hasComputed){
                hasComputed = true;
                count = 1;
            }
            break;
        
        case 'multiply':
            a = parseInt(a);
            b = parseInt(b);
            results = a * b;
            userInput.value = results;
            if(!hasComputed){
                hasComputed = true;
                count = 1;
            }
            break;
        
        case 'divide':
            a = parseInt(a);
            b = parseInt(b);
            if(b === 0){
                results = 'ERROR';
                userInput.value = results;
                break;
            }
            results = a / b;
            userInput.value = results;
            if(!hasComputed){
                hasComputed = true;
                count = 1;
            }
            break;
        
        default:
            break;
    }
}

function evaluate(){
    if(results === 'ERROR'){
        return;
    }
    hasDecimal = false;
    clearInput = true;
    onPreviousNumber = true;

    if(hasPressedNumber){
        count++;
        if(!hasComputed && count > 2){
            onPreviousNumber = false;
            computeNow = true;
            operate(currentNumber, previousNumber, currentOperator);
        }
        else if(hasComputed){
            onPreviousNumber = false;
            operate(results, currentNumber, currentOperator);
        }
    }
    hasPressedNumber = false;
}

function add(){
    evaluate();
    currentOperator = 'add';
}

function subtract(){
    evaluate();
    currentOperator = 'subtract';

}

function multiply(){
    evaluate();
    currentOperator = 'multiply';

}

function divide(){
    evaluate();
    currentOperator = 'divide';

}