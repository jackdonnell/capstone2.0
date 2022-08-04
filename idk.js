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

const sumBudget = (index) => {
    let sum = 0
    let budgObj = {...budgetDatabase[index].items}
    // console.log(mayObj)
    // mayObj.forEach(budget => {
    for (const i in mayObj) {
        // console.log(budget.items[i])
        sum += budgObj[i]
        return sum
    // }
    }
}


const newBudgetMonthlyInc = (index) => {
    let inc = 0
    let budgObj = {...budgetDatabase[index].items}
    // console.log(mayObj)
    // mayObj.forEach(budget => {
    for (const i in mayObj) {
        // console.log(budget.items[i])
        sum += budgObj[i]
        return sum
    // }
    }
}
        let newBudgetMonthlyIn = (budgetDatabase[3].items.Income * (1 + budgetDatabase[3].items.Tax)) / 12
        console.log(newBudgetMonthlyInc)

console.log(sum)