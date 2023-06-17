

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
        getNumber(e);
    });
});

// gets the value of the operator buttons

const operatorButton = document.querySelectorAll(".operatorButton");
operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener("click", function(e) {
        calculate(e);
    });
});


// gets num1 or num2 depending on when the numbers are clicked

function getNumber(e) {
    if (operator === "") {
        getNum1(e.target.value);
    } else if (operator === "reset") {
        resetOperator(e);
    } else if (operator !== "" && operator !== "="){
        getNum2(e.target.value);
    };
};


// calculates depending on when the operator Button is clicked !!! Delete num1 when operator = and number gets clicked

function calculate(e) {
    if (num2 === "") {
        operator = e.target.value
    } else if (num2 !== "") {
        chooseOperator(e);
    } else {
        alert("Something went wrong!");
    };
}

function chooseOperator(e) {
    if (e.target.value === "=") {
        num1 = operate(num1, num2, operator);
        num2 = "";
        operator = "reset";
        changeDisplay(num1);
    } else {
        num1 = operate(num1, num2, operator);
        num2 = "";
        operator = e.target.value;
        changeDisplay(num1);
    };
}

// update num1 & num2

function getNum1(value) {
    if (num1 === 0 || num1 === "0") {
        num1 = "";
    }
    num1 += value;
    changeDisplay(num1);
}

function getNum2(value) {
    if (num2 === 0 || num2 === "0") {
        num2 = "";
    }
    num2 += value;
    changeDisplay(num2);
}


// Let numberButtons reset num1, when "=" operater generates result and no other operater is active

function resetOperator(e) {
    num1 = e.target.value;
        operator = "";
        changeDisplay(num1)
}

/* function getNum2(value) {
    if (num2 === 0 || num2 === "0") {
        num2 = "";
    }

    if (operator === "");
    num2 += value;
    changeDisplay(num2);
}
*/

// resets calculator

const AC = document.querySelector("#AC");
AC.addEventListener("click", function () {
    num1 = 0;
    num2 = "";
    operator = "";
    changeDisplay(0);
});


// starts with a zero on the Screen

changeDisplay(0);


/*
Calculating Process:
1. Schritt: Alle 3 leer
2. Schritt: Num1 voll -> Num1 erweitern oder Operator eingeben
3. Schritt: Num1 voll, Operator voll -> Operator ändern oder Num2 eingeben
4. Schritt: Num1 voll, Num2 voll, Operator voll -> Num2 erweitern oder 2ten Operator eingeben
5.1 Schritt: Operator = -> Ergebnis wird in Num1 gespeichert und angezeigt, Num2 & Operator werden zurückgesetzt
5.2 Schritt: Operator +, -, *, / -> Ergebnis wird in Num1 gespeichert und neuer Operator wird als Operator gespeichert, Num2 wird zurückgesetzt
*/