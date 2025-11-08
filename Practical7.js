function calculate(operator) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;
    let operation = "";

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "❌ Please enter valid numbers.";
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            operation = "Addition";
            break;
        case '-':
            result = num1 - num2;
            operation = "Subtraction";
            break;
        case '*':
            result = num1 * num2;
            operation = "Multiplication";
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById("result").innerHTML = "❌ Division by zero is not allowed.";
                return;
            }
            result = (num1 / num2).toFixed(2);
            operation = "Division";
            break;
        case '%':
            result = num1 % num2;
            operation = "Modulus";
            break;
        default:
            document.getElementById("result").innerHTML = "Invalid operation.";
            return;
    }

    document.getElementById("result").innerHTML = `${operation}: ${result}`;
}