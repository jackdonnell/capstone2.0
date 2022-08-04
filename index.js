

const baseURL = `http://localhost:9876`

const getMay = document.querySelector("#may-budget")
const getJune = document.querySelector("#june-budget")
const getJuly = document.querySelector("#july-budget")

const expenseAndCostSubmit = document.querySelector("#income-tax-submit")
const nameAndIncomeAndTaxSubmit = document.querySelector("#name-income-tax-submit")
const getMayBudget = () => {
    axios.get(`${baseURL}/api/getMay`)
        .then((res) => {
            console.log(res.data)
        })
}
const getJuneBudget = () => {
    axios.get(`${baseURL}/api/getJune`)
        .then((res) => {
            console.log(res.data)
        })
}
const getJulyBudget = () => {
    axios.get(`${baseURL}/api/getJuly`)
        .then((res) => {
            console.log(res.data)
        })
}
const postNameAndIncomeAndTax = (e) => {
const nameInput = document.querySelector("#name")
const incomeInput = document.querySelector("#income")
const taxInput = document.querySelector("#tax")
    const budgetDatabaseObj = {
        Name: nameInput.value,
        Income: incomeInput.value,
        Tax: taxInput.value

    }
    axios.post(`${baseURL}/api/postNameAndIncomeAndTax`, budgetDatabaseObj) 
        .then((res) => {
            console.log(res.data)
        })
}

const newExpense = () => {
    const expense = document.querySelector("#expense")
    const cost = document.querySelector("#cost")
    let expenseObj = {
        expenseName: expense.value,
        cost: cost.value
    }
    console.log(expenseObj)
    axios.post(`${baseURL}/api/newExpense`, expenseObj)
    .then((res) => {
        console.log(res.data)
    })
}

getMay.addEventListener("click", getMayBudget)
getJune.addEventListener("click", getJuneBudget)
getJuly.addEventListener("click", getJulyBudget)

nameAndIncomeAndTaxSubmit.addEventListener("click", postNameAndIncomeAndTax)
expenseAndCostSubmit.addEventListener("click", newExpense)






// const postNewItem = () => {
//     const otherDatabaseObj = {
//         income: incomeInput.value,
//         tax: taxInput.value
//     }
//     axios.post(`${baseURL}/api/postIncomeAndTax`, otherDatabaseObj) 
//         .then((res) => {
//             console.log(res.data)
//             otherDatabase.push(res.data)
//         })
// }
// const postNewItemCost = () => {
//     const otherDatabaseObj = {
//         income: incomeInput.value,
//         tax: taxInput.value
//     }
//     axios.post(`${baseURL}/api/postNewItemCost`, otherDatabaseObj) 
//         .then((res) => {
//             console.log(res.data)
//             otherDatabase.push(res.data)
//         })
// }
// const postNewBudget = () => {
//     const otherDatabaseObj = {
//         income: incomeInput.value,
//         tax: taxInput.value
//     }
//     axios.post(`${baseURL}/api/postIncomeAndTax`, otherDatabaseObj) 
//         .then((res) => {
//             console.log(res.data)
//             otherDatabase.push(res.data)
//         })
// }