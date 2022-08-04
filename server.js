const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

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

    app.listen(9876, () => console.log("Docked on port 9876"))





// app.post("/api/postNewItemAndCost", (req, res) => {
//     console.log("Post endpoint hit")
//     console.log(req.body)
//     console.log(req.body.itemandcost)
//     otherDatabase.push(req.body.itemandcost)
//     res.status(200).send(otherDatabase[otherDatabase.length - 1])
// })



// app.post("/api/postNewItemCost", (req, res) => {
//     console.log("Post endpoint hit")
//     console.log(req.body)
//     console.log(req.body.incandtax)
//     otherDatabase.push(req.body.incandtax)
//     res.status(200).send(otherDatabase[otherDatabase.length - 1])
// })
// app.post("/api/postNewBudget", (req, res) => {
//     console.log("Post endpoint hit")
//     console.log(req.body)
//     console.log(req.body.incandtax)
//     otherDatabase.push(req.body.incandtax)
//     res.status(200).send(otherDatabase[otherDatabase.length - 1])
// })