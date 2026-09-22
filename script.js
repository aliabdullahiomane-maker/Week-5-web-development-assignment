"use strict";

// Budget-related application variables
let monthlyBudget = 0;
let expenses = [];
let totalExpenses = 0;
let remainingBalance = 0;

// Get a valid number from the user
function getPositiveNumber(message) {
    let value;

    while (true) {
        value = Number(window.prompt(message));

        if (Number.isFinite(value) && value >= 0) {
            return value;
        }

        window.alert("Please enter a valid number greater than or equal to zero.");
    }
}

// Collect the monthly budget
function collectBudget() {
    return getPositiveNumber("Enter your monthly budget in KES:");
}

// Collect expenses from the user
function collectExpenses() {
    const expenseList = [];
    let addAnotherExpense = true;

    while (addAnotherExpense) {
        const expenseName = window.prompt("Enter the expense name:");

        if (expenseName === null || expenseName.trim() === "") {
            window.alert("Please enter an expense name.");
            continue;
        }

        const expenseAmount = getPositiveNumber(
            `Enter the amount for ${expenseName}:`
        );

        expenseList.push({
            name: expenseName.trim(),
            amount: expenseAmount
        });

        addAnotherExpense = window.confirm(
            "Would you like to add another expense?"
        );
    }

    return expenseList;
}

// Calculate the total of all expenses
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (const expense of expenseList) {
        total += expense.amount;
    }

    return total;
}

// Calculate the remaining balance
function calculateRemainingBalance(budget, expensesTotal) {
    return budget - expensesTotal;
}

// Display the results in the browser console
function displayResults() {
    console.clear();

    console.log("===== SpendWise Budget Report =====");
    console.log(`Monthly Budget: KES ${monthlyBudget.toFixed(2)}`);

    console.log("Expenses:");

    for (const expense of expenses) {
        console.log(`- ${expense.name}: KES ${expense.amount.toFixed(2)}`);
    }

    console.log(`Total Expenses: KES ${totalExpenses.toFixed(2)}`);
    console.log(`Remaining Balance: KES ${remainingBalance.toFixed(2)}`);

    if (remainingBalance > 0) {
        console.log("Status: You are within your budget.");
    } else if (remainingBalance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log(
            `Status: You are over budget by KES ${Math.abs(
                remainingBalance
            ).toFixed(2)}.`
        );
    }

    console.log("===================================");
}

// Run the complete SpendWise process
function runSpendWise() {
    monthlyBudget = collectBudget();
    expenses = collectExpenses();
    totalExpenses = calculateTotalExpenses(expenses);
    remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );

    displayResults();
}

// Connect the button to the application
const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", runSpendWise);