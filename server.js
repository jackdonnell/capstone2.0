const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

let otherDatabase = []
let budgetDatabase = [{
    Name: 'May',
    Income: 4800,
    Rent: 1600,
    Car: 300,
    Insurance: 200,
    Phone: 100,
    Groceries: 460,
    Shopping: 520,
    Travel: 190,
    Movies: 50,
    Investment: 800
},
{
    Name: 'June',
    Income: 4800,
    Rent: 1600,
    Car: 300,
    Insurance: 200,
    Phone: 100,
    Groceries: 280,
    Shopping: 370,
    Travel: 430,
    Investment: 800
},
{
    Name: 'July',
    Income: 4800,
    Rent: 1600,
    Car: 300,
    Insurance: 200,
    Phone: 100,
    Groceries: 660,
    Shopping: 90,
    Travel: 1200,
    Investment: 800
}]

app.get("/api/getMay", (req, res) => {
    console.log("Endpoint hit");
    res.status(200).send(budgetDatabase[0])
})
app.get("/api/getJune", (req, res) => {
    console.log("Endpoint hit");
    res.status(200).send(budgetDatabase[1])
})
app.get("/api/getJuly", (req, res) => {
    console.log("Endpoint hit");
    res.status(200).send(budgetDatabase[2])
})

app.post("/api/postIncomeAndTax", (req, res) => {
    console.log("Post endpoint hit")
    console.log(req.body)
    console.log(req.body.incandtax)
    otherDatabase.push(req.body.incandtax)
    res.status(200).send(otherDatabase[otherDatabase.length - 1])
})

app.post("/api/postNewItem", (req, res) => {
    console.log("Post endpoint hit")
    console.log(req.body)
    console.log(req.body.incandtax)
    otherDatabase.push(req.body.incandtax)
    res.status(200).send(otherDatabase[otherDatabase.length - 1])
})
app.post("/api/postNewItemCost", (req, res) => {
    console.log("Post endpoint hit")
    console.log(req.body)
    console.log(req.body.incandtax)
    otherDatabase.push(req.body.incandtax)
    res.status(200).send(otherDatabase[otherDatabase.length - 1])
})
app.post("/api/postNewBudget", (req, res) => {
    console.log("Post endpoint hit")
    console.log(req.body)
    console.log(req.body.incandtax)
    otherDatabase.push(req.body.incandtax)
    res.status(200).send(otherDatabase[otherDatabase.length - 1])
})



app.listen(9876, () => console.log("Docked on port 9876"))