let budgetDatabase = [{
    Name: 'May',
    Income: 4800,
    Tax: null,
    items: {
    Rent: 1600,
    Car: 300,
    Insurance: 200,
    Phone: 100,
    Groceries: 460,
    Shopping: 520,
    Travel: 190,
    Movies: 50,
    Investment: 800}
},
{
    Name: 'June',
    Income: 4800,
    Tax: null,
    items: {
    Rent: 1600,
    Car: 300,
    Insurance: 200,
    Phone: 100,
    Groceries: 280,
    Shopping: 370,
    Travel: 430,
    Investment: 800}
},
{
    Name: 'July',
    Income: 4800,
    Tax: null,
    items: {
    Rent: 1600,
    Car: 300,
    Insurance: 200,
    Phone: 100,
    Groceries: 660,
    Shopping: 90,
    Travel: 1200,
    Investment: 800}
}]


let monthlyInc = 0
const findMonthlyIncAfterTax = (index) => { 
    let inc = budgetDatabase[index].Income
    let tax = budgetDatabase[index].Tax
    monthlyInc = inc - (inc * tax)
    console.log(monthlyInc)
    return monthlyInc
}

console.log(findMonthlyIncAfterTax(1))

let sum = 0
const sumBudget = (index) => { 
    let budgObj = {...budgetDatabase[index].items}
    // console.log(budgObj)
    for (const i in budgObj) {
        sum += budgObj[i]
    }
    console.log(sum)
    return sum
}

console.log(sumBudget(1))

let incomeRemaining = monthlyInc - sum
console.log(incomeRemaining)