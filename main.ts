import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";
import ListPrompt from "inquirer/lib/prompts/list.js";

const currency: any = {
    USD: 1,  // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
 [


    {
    name: "from",
    type: "list",
    message: "Enter from currency",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "Number",
        message: "ENTER from Amount"
    }
    
    
  ]  
 )
 let userFromCurrency = user_answer.from
 let user_answerCurrency = user_answer.to
let fromAmount = currency(user_answer.from) // exchange rate
let toAmount = currency(user_answer.to) //exchange rate
let amount = user_answer.amount
let baseAmount = amount/fromAmount // USD base currency // 4
let convertedAmount = baseAmount* toAmount
console.log(convertedAmount);


