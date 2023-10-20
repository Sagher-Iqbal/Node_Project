import * as  inquirer  from "inquirer";
import chalk from "chalk";
import { ListFormat } from "typescript";

enum operator{

    add = "Addition",
    sub= "Substraction",
    multiply= "Multiplication",
    divide = "Division",

}
const propmt= inquirer.createPromptModule();
async function cal(){

    const input = await propmt([
        {
        type: "input",
        name:"number1",
        message: "Enter First Number"


    },
    
    {
        type: "list",
        name:"operator",
        message: "Select an operator",
        choices:Object.values(operator)

    },
    {
        type: "input",
        name:"number2",
        message: "Enter Sencond Number"

    }
    
    
    
])
    let num1:number = parseInt(input.number1);
     let num2:number = parseInt(input.number2);
     let list= input.operator as operator;
   
    let  result:number;
   
    if(list===operator.add){
        result = Number(num1 + num2);
         console.log(`you result is after addition ${result}`)
       // console.log( );
    }
   
    else if(list=== operator.sub){

        result= num1 - num2;
        console.log(`you result is after Substriction ${result}`);

    }
    else if(list=== operator.multiply){
        result= num1 * num2;
        console.log(`you result is after Multiplicaton ${result}`)

    }
    else if(list=== operator.divide){
        result= num1 / num2;
        console.log(`you result is after Division ${result}`)
    }
}
cal()