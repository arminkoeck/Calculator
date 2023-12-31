

// variables needed for all calculations

let num1 = 0;
let num2 = "";
let operator = "";


// basic math functions

let add = (num1, num2) => +num1 + +num2;
let subtract = (num1, num2) => +num1 - +num2;
let multiply = (num1, num2) => +num1 * +num2;
let divide = (num1, num2) => +num1 / +num2;


// makes the final calculation

function operate(num1, num2, operator) {
    if (operator === "+") {
        return round(add(num1, num2));
    } else if (operator === "-") {
        return round(subtract(num1,num2));
    } else if (operator === "*") {
        return round(multiply(num1, num2));
    } else if (operator === "/") {
        return round(divide(num1, num2));
    } else {
        alert("Something went wrong!");
    }
}


// rounds the result to 2 decimals

function round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
};


// changes Display

function changeDisplay(value) {
    const display = document.querySelector("#display");
    checkForInfinity(value);
}

function checkForInfinity(value) {
    if (value === Infinity) {
        display.textContent = "You broke my CPU...";
    } else {
        display.textContent = value;
    }
}


// gets the value of the number buttons

const numberButton = document.querySelectorAll(".numberButton");

numberButton.forEach(numberButton => {
    numberButton.addEventListener("click", function(e) {
        numberButton.classList.add("numberClick")
        setTimeout(() => numberButton.classList.remove("numberClick"), 100);
        getNumber(e);
    });
});


// gets the value of the operator buttons

const operatorButtons = document.querySelectorAll(".operatorButtons");

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", function(e) {
        operatorButtons.forEach(operatorButton => operatorButton.classList.remove("activeOperator"));
        changeColor(e);
        calculate (e);
    });
});


// set the clicked operator Button on active

function changeColor (e) {
    if (e.target.value === "=") {
        e.target.classList.add("activeOperator");
        setTimeout(() => e.target.classList.remove("activeOperator"), 100);
    } else {
        e.target.classList.add("activeOperator");
    };
};

// gets num1 or num2 depending on when the numbers are clicked

function getNumber(e) {
    if ((operator === "" || operator === "=") && String(num1).length < 24) {
        getNum1(e.target.value);
    } else if (operator === "reset") {
        resetOperator(e);
    } else if ((operator !== "" && operator !== "=") && String(num2).length < 24){
        getNum2(e.target.value);
    };
};


// calculates depending on when the operator Button is clicked !!! Delete num1 when operator "=" and number gets clicked

function calculate(e) {
    if (num2 === "" && e.target.value !== "=") {
        operator = e.target.value
    } else if (num2 === "" && e.target.value === "=") {
        // just do nothing
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
    if ((num1 === 0 || num1 === "0") && value !== ".") {
        num1 = "";
    }
    
    if (!(String(num1).includes(".")) || !(String(value).includes("."))) {
        num1 += value;
        changeDisplay(num1);
    }
}

function getNum2(value) {
    if ((num2 === 0 || num2 === "0") && value !== ".") {
        num2 = "";
    }
    const str = ".";
    if (!(num2.includes(str)) || !(value.includes(str))) {
        num2 += value;
        changeDisplay(num2);
    }
}


// Let numberButtons reset num1, when "=" operater generates result and no other operater is active

function resetOperator(e) {
    if ((e.target.value === ".") && !String(num1).includes(".")) {
        num1 += e.target.value;
        operator = "";
    } else if ((e.target.value === ".") && String(num1).includes(".")) {
        // just do nothing
    } else {
        num1 = e.target.value;
        operator = "";
    }
    changeDisplay(num1)
}


// resets calculator

const AC = document.querySelector(".AC");
AC.addEventListener("click", function () {
    AC.classList.add("deleteClick")
        setTimeout(() => AC.classList.remove("deleteClick"), 100);
    num1 = 0;
    num2 = "";
    operator = "";
    changeDisplay(0);
});



// starts with a zero on the Screen

changeDisplay(0);

// active class for operator buttons -> gets attached to the active operator -> the "=" operator shouldnt have this feature


/*
Calculating Process:
1. Schritt: Alle 3 leer
2. Schritt: Num1 voll -> Num1 erweitern oder Operator eingeben
3. Schritt: Num1 voll, Operator voll -> Operator ändern oder Num2 eingeben
4. Schritt: Num1 voll, Num2 voll, Operator voll -> Num2 erweitern oder 2ten Operator eingeben
5.1 Schritt: Operator = -> Ergebnis wird in Num1 gespeichert und angezeigt, Num2 & Operator werden zurückgesetzt
5.2 Schritt: Operator +, -, *, / -> Ergebnis wird in Num1 gespeichert und neuer Operator wird als Operator gespeichert, Num2 wird zurückgesetzt
*/