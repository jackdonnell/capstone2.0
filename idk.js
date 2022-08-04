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


// for (let i in budgetDatabase) {
    //     // console.log(budgetDatabase[i])
    //     sum += budgetDatabase[i]
    // }
    let sum = 0
    let mayObj = {...budgetDatabase[0].items}
    // console.log(mayObj)
    // mayObj.forEach(budget => {
    for (const i in mayObj) {
        // console.log(budget.items[i])
        sum += mayObj[i]
    // }
}


// for (let i = 0; i < budgetDatabase.length; i++) {
    //     for (let j in budgetDatabase[i]) {
        //         sum += budgetDatabase[i]
        //     }
        // }


        // budgetDatabase.forEach(budget => {
        //     budgetDatabase.Income * (1 + budgetDatabase.tax)
        // })
        
        // let newBudgetMonthlyInc = (budgetDatabase[3].items.Income * (1 + budgetDatabase[3].items.Tax)) / 12
        // console.log(newBudgetMonthlyInc)

console.log(sum)