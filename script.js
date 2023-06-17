

// variables needed for all calculations

let num1 = 0;
let num2 = "";
let operator = "";


// basic math functions

function add(num1, num2) {
    return +num1 + +num2
}

function subtract(num1, num2) {
    return +num1 - +num2
}

function multiply(num1, num2) {
    return +num1 * +num2
}

function divide(num1, num2) {
    return +num1 / +num2
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
        if (operator === "") {
            getNum1(e.target.value);
        } else if (operator !== "" && operator !== "="){
            getNum2(e.target.value);
        }
    });
});



// gets the value of the operator buttons

const operatorButton = document.querySelectorAll(".operatorButton");

operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener("click", function(e) {
        if (num2 === "") {
            operator = e.target.value
        } else if (num2 !== "") {
            if (e.target.value === "=") {
                num1 = operate(num1, num2, operator);
                num2 = "";
                operator = "";
            } else {
                num1 = operate(num1, num2, operator);
                num2 = "";
                operator = e.target.value;
            };
        } else {
            alert("Something went wrong!");
        };
    });
});

/*
1. Schritt: Alle 3 leer
2. Schritt: Num1 voll -> Num1 erweitern oder Operator eingeben
3. Schritt: Num1 voll, Operator voll -> Operator ändern oder Num2 eingeben
4. Schritt: Num1 voll, Num2 voll, Operator voll -> Num2 erweitern oder 2ten Operator eingeben
5.1 Schritt: Operator = -> Ergebnis wird in Num1 gespeichert und angezeigt, Num2 & Operator werden zurückgesetzt
5.2 Schritt: Operator +, -, *, / -> Ergebnis wird in Num1 gespeichert und neuer Operator wird als Operator gespeichert, Num2 wird zurückgesetzt
*/

// calculation function, that decides with if statements, if first or second number is typed in or if an operator is typed in

function getNum1(value) {
    num1 += value;
    changeDisplay(num1);
}

function getNum2(value) {
    num2 += value;
    changeDisplay(num2);
}


// only deletes num1, solution for num2 needed

const AC = document.querySelector("#AC");
AC.addEventListener("click", function () {
    num1 = 0;
    num2 = 0;
    changeDisplay(0);
});


// starts with a zero on the Screen

changeDisplay(0);




/*
Click operand -> Value of operand gets saved into num1
Click operand again -> Value gets added to num1
Click operator -> operator gets saved, num1 function is stopped, num2 function starts
click operand -> operator gets saved into num2
Click operand again -> Value gets added to num2
Click equal or operator -> display value gets updated and saved to num1
*/