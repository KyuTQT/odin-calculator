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