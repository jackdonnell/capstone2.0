const baseURL = `http://localhost:9876/apiDatabase`

const getMay = document.querySelector("#may-budget")
const getJune = document.querySelector("#june-budget")
const getJuly = document.querySelector("#july-budget")
const incomeInput = document.querySelector("#income")
const taxInput = document.querySelector("#tax")
const incomeAndTaxSubmit = document.querySelector("#income-tax-submit")

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
const postIncomeAndTax = () => {
    const otherDatabaseObj = {
        income: incomeInput.value,
        tax: taxInput.value

    }
    axios.post(`${baseURL}/api/postIncomeAndTax`, otherDatabaseObj) 
        .then((res) => {
            console.log(res.data)
            otherDatabase.push(res.data)
        })
}
// const postIncomeAndTax = () => {
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





const postNewItem = () => {
    const otherDatabaseObj = {
        income: incomeInput.value,
        tax: taxInput.value
    }
    axios.post(`${baseURL}/api/postIncomeAndTax`, otherDatabaseObj) 
        .then((res) => {
            console.log(res.data)
            // otherDatabase.push(res.data)
        })
}
const postNewItemCost = () => {
    const otherDatabaseObj = {
        income: incomeInput.value,
        tax: taxInput.value
    }
    axios.post(`${baseURL}/api/postNewItemCost`, otherDatabaseObj) 
        .then((res) => {
            console.log(res.data)
            // otherDatabase.push(res.data)
        })
}
const postNewBudget = () => {
    const otherDatabaseObj = {
        income: incomeInput.value,
        tax: taxInput.value
    }
    axios.post(`${baseURL}/api/postIncomeAndTax`, otherDatabaseObj) 
        .then((res) => {
            console.log(res.data)
            // otherDatabase.push(res.data)
        })
}

getMay.addEventListener("click", getMayBudget)
getJune.addEventListener("click", getJuneBudget)
getJuly.addEventListener("click", getJulyBudget)

incomeAndTaxSubmit.addEventListener("click", postIncomeAndTax)