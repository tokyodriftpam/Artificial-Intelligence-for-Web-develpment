function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Addition Result: " + (a + b);
}

function subtract() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Subtraction Result: " + (a - b);
}

function multiply() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Multiplication Result: " + (a * b);
}

function divide() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (b === 0) {
        document.getElementById("result").innerHTML = "Division by zero is not allowed";
    } else {
        document.getElementById("result").innerHTML = "Division Result: " + (a / b);
    }
}