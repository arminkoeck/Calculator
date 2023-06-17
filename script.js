

// variables needed for all calculations

let num1 = 0;
let num2 = 0;
let operator = "";


// basic math functions

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}


// makes the final calculation

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1,num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else {
        alert("Something went wrong!");
    }
}


// changes Display

function changeDisplay(value) {
    const display = document.querySelector("#display");
    display.textContent = value;
}


// gets the value of the number buttons

const numberButton = document.querySelectorAll(".numberButton");

numberButton.forEach(numberButton => {
    numberButton.addEventListener("click", function(e) {
        getNum1(e.target.value);
    });
});


// gets the value of the operator buttons

const operatorButton = document.querySelectorAll(".operatorButton");

operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener("click", function(e) {

    });
});

// calculation function, that decides with if statements, if first or second number is typed in or if an operator is typed in


function getNum1(value) {
    num1 += value;
    changeDisplay(num1);
}






changeDisplay(0);




/*
Click operand -> Value of operand gets saved into num1
Click operand again -> Value gets added to num1
Click operator -> operator gets saved, num1 function is stopped, num2 function starts
click operand -> operator gets saved into num2
Click operand again -> Value gets added to num2
Click equal or operator -> display value gets updated and saved to num1
*/