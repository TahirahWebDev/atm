#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 5555;
let pinAns = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin number",
    type: "number"
});
if (pinAns.pin === myPin) {
    console.log("Your pin code is Correct!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "PLease select one Option!",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is " + myBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your Balance is " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code!!");
}
;
