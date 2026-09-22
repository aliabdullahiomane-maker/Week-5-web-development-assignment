# SpendWise

SpendWise is a simple budget dashboard built with HTML, CSS, and JavaScript.

The application allows users to enter a monthly budget and multiple expenses. It calculates the total expenses and remaining balance, then displays a clearly labeled budget report in the browser console.

## Project Files

- `index.html` - Provides the structure of the SpendWise dashboard.
- `style.css` - Provides the layout, colors, typography, responsive design, and styling.
- `script.js` - Provides the JavaScript variables, input collection, calculations, functions, and console output.
- `README.md` - Documents the project and explains the JavaScript concepts used.

## JavaScript Concepts Implemented

The project implements:

- Variables.
- Numbers and strings.
- Arrays.
- Objects.
- Functions.
- Function parameters and return values.
- `while` loops.
- `for...of` loops.
- Conditional statements.
- User input with `prompt()`.
- Browser messages with `alert()` and `confirm()`.
- Console output with `console.log()`.
- Button events with `addEventListener()`.

## How Variables Are Used

The application stores budgeting information using variables:

```javascript
let monthlyBudget = 0;
let expenses = [];
let totalExpenses = 0;
let remainingBalance = 0;
```

- `monthlyBudget` stores the user's available budget.
- `expenses` stores the user's expense objects.
- `totalExpenses` stores the sum of all expenses.
- `remainingBalance` stores the amount left after expenses are subtracted.

Each expense is stored as an object:

```javascript
{
    name: "Food",
    amount: 2500
}
```

## How User Input Is Collected

The application uses JavaScript prompts to collect information from the user.

The user enters:

1. A monthly budget.
2. An expense name.
3. An expense amount.
4. Whether another expense should be added.

The `Number()` function converts the amount entered by the user into a number so that calculations can be performed.

## How Calculations Are Performed

The total expenses are calculated by adding the amount of every expense:

```javascript
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (const expense of expenseList) {
        total += expense.amount;
    }

    return total;
}
```

The remaining balance is calculated with this formula:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

The calculation is performed using this function:

```javascript
function calculateRemainingBalance(budget, expensesTotal) {
    return budget - expensesTotal;
}
```

## How Functions Organize the Code

Functions divide the application into smaller tasks.

The application includes functions that:

- Validate numeric input.
- Collect the monthly budget.
- Collect expenses.
- Calculate total expenses.
- Calculate the remaining balance.
- Display the final results.
- Run the complete SpendWise process.

This makes the code easier to read, test, reuse, and maintain.

## How to Run the Project

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in a browser.
3. Click the `Start Budget Check` button.
4. Enter the requested budget and expense information.
5. Open Developer Tools by pressing `F12`.
6. Select the `Console` tab.
7. Review the SpendWise budget report.

## Example Output

```text
===== SpendWise Budget Report =====
Monthly Budget: KES 10000.00
Expenses:
- Rent: KES 4000.00
- Food: KES 2500.00
Total Expenses: KES 6500.00
Remaining Balance: KES 3500.00
Status: You are within your budget.
===================================
```

## Testing

I tested the application with:

- A valid monthly budget.
- One expense.
- Multiple expenses.
- Invalid numeric input.
- A balance greater than zero.
- A balance equal to zero.
- Expenses greater than the budget.
