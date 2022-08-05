const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

let budgetDatabase = [{
    Name: 'May',
    Income: 5000,
    Tax: .15,
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
    Income: 5000,
    Tax: .15,
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
    Income: 5000,
    Tax: .15,
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

app.get("/api/getMay", (req, res) => {
    console.log("Endpoint hit")
    res.status(200).send(budgetDatabase[0])
})

app.get("/api/getJune", (req, res) => {
    console.log("Endpoint hit")
    res.status(200).send(budgetDatabase[1])
})

app.get("/api/getJuly", (req, res) => {
    console.log("Endpoint hit")
    res.status(200).send(budgetDatabase[2])
})

app.get("/api/getNextMonth", (req, res) => {
    console.log("Endpoint hit")
    res.status(200).send(budgetDatabase[3])
})

app.post("/api/postNameAndIncomeAndTax", (req, res) => {
    console.log("Post endpoint hit")
    let newBudget = {
        Name: req.body.Name,
        Income: +req.body.Income,
        Tax: +req.body.Tax,
        items: {}
    }
    budgetDatabase.push(newBudget)
    console.log(budgetDatabase[budgetDatabase.length - 1])
    res.status(200).send(budgetDatabase[budgetDatabase.length - 1])
})

app.post("/api/newExpense", (req, res) => {
    console.log("Post endpoint hit")
    console.log(budgetDatabase[budgetDatabase.length - 1].items)
    let {expenseName, cost} = req.body
    budgetDatabase[budgetDatabase.length - 1].items[`${expenseName}`] = +cost
    console.log(budgetDatabase[budgetDatabase.length - 1].items)

})

let monthlyInc = 0
const findMonthlyIncAfterTax = (index) => { 
    let inc = budgetDatabase[index].Income
    let tax = budgetDatabase[index].Tax
    monthlyInc = (inc - (inc * tax)) / 12
    return monthlyInc
}

app.get(`/api/getMonthlyInc/:id`, (req, res) => {
    console.log("Endpoint hit")
    console.log(req.params.id)
    let index = req.params.id
    let result = findMonthlyIncAfterTax(index)
    let resultObj = {total: result}
    res.status(200).send(resultObj)
})

let sum = 0
const sumBudget = (index) => { 
    let budgObj = {...budgetDatabase[index].items}
    for (const i in budgObj) {
        sum += budgObj[i]
    }
    return sum
}
app.get("/api/getsum", (req, res) => {
    console.log("Endpoint hit")
    res.status(200).send(findMonthlyIncAfterTax(index))
})

app.listen(9876, () => console.log("Docked on port 9876"))