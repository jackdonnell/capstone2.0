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

// const sumBudget = (index) => {  
//     let sum = 0
//     let budgObj = {...budgetDatabase[index].items}
//     //  console.log(budgObj)
//          for (const i in budgObj) {
//              sum += budgObj[i]
//          }
//      return sum
// } 
// console.log(sumBudget(3))

let sum = 0
const sumBudget = (index) => { 
    let budgObj = {...budgetDatabase[index].items}
    // console.log(budgObj)
    for (const i in budgObj) {
        sum += budgObj[i]
    }
    return sum
}

console.log(sumBudget(1))

let monthlyInc = 0
const findMonthlyIncAfterTax = (index) => { 
    let inc = budgetDatabase[index].Income
    let tax = budgetDatabase[index].Tax
    monthlyInc = inc - (inc * tax)
    return monthlyInc
}
console.log(findMonthlyIncAfterTax(1))

let incomeRemaining = monthlyInc - (monthlyInc - sum)
console.log(incomeRemaining)
// const findIncomeSpent = (index) => {

// }
// let taxAmount = budgetDatabase[3].Income * budgetDatabase[3].Tax
// console.log(taxAmount)

// const newBudgetMonthlyInc = (index) => {
//     let inc = 0
//     let budgObj = {...budgetDatabase[index].items}

//     // console.log(mayObj)
//     // mayObj.forEach(budget => {
//     for (const i in mayObj) {
//         // console.log(budget.items[i])
//         sum += budgObj[i]
//         return sum
//     // }
//     }
// }
//         let newBudgetMonthlyIn = (budgetDatabase[3].items.Income * (1 + budgetDatabase[3].items.Tax)) / 12
//         console.log(newBudgetMonthlyInc)


    //THIS CODE WORKS
    // let sum = 0
    // let mayObj = {...budgetDatabase[0].items}
    // // console.log(mayObj)
    // // mayObj.forEach(budget => {
    //     for (const i in mayObj) {
    //         // console.log(budget.items[i])
    //         sum += mayObj[i]
    //         // }
    //     }
    //     console.log(sum)