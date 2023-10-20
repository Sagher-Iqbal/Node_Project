import * as inquirer from "inquirer";
var operator;
(function (operator) {
    operator["add"] = "Addition";
    operator["sub"] = "Substraction";
    operator["multiply"] = "Multiplication";
    operator["divide"] = "Division";
})(operator || (operator = {}));
const propmt = inquirer.createPromptModule();
async function cal() {
    const input = await propmt([
        {
            type: "input",
            name: "number1",
            message: "Enter First Number"
        },
        {
            type: "list",
            name: "operator",
            message: "Select an operator",
            choices: Object.values(operator)
        },
        {
            type: "input",
            name: "number2",
            message: "Enter Sencond Number"
        }
    ]);
    let num1 = parseInt(input.num1);
    let num2 = parseInt(input.num2);
    let list = input.operator;
    let result;
    if (list === operator.add) {
        result = num1 + num2;
        console.log(`you result is after addition ${result}`);
        // console.log( );
    }
    else if (list === operator.sub) {
        result = num1 - num2;
        console.log(`you result is after Substriction ${result}`);
    }
    else if (list === operator.multiply) {
        result = num1 * num2;
        console.log(`you result is after Multiplicaton ${result}`);
    }
    else if (list === operator.divide) {
        result = num1 / num2;
        console.log(`you result is after Division ${result}`);
    }
}
cal();
