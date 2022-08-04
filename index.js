const baseURL = `http://localhost:9876`

const getMay = document.querySelector("#may-budget")
const getJune = document.querySelector("#june-budget")
const getJuly = document.querySelector("#july-budget")
const getNextBudget = document.querySelector("#get-next-budget")
const testButton = document.querySelector("#test-button")



const expenseAndCostSubmit = document.querySelector("#income-tax-submit")
const nameAndIncomeAndTaxSubmit = document.querySelector("#name-income-tax-submit")

const budgetContainer = document.querySelector("#budget-container")
const summaryContainer = document.querySelector("#summary-container")

const getMayBudget = () => {
    axios.get(`${baseURL}/api/getMay`)
        .then((res) => {
            console.log(res.data)
            while (summaryContainer.firstChild) {
                summaryContainer.removeChild(summaryContainer.firstChild);
            }
            summary(res.data)
        })
    }
    const getJuneBudget = () => {
        axios.get(`${baseURL}/api/getJune`)
        .then((res) => {
            console.log(res.data)
            while (summaryContainer.firstChild) {
                summaryContainer.removeChild(summaryContainer.firstChild);
              }
            summary(res.data)
        })
    }
    const getJulyBudget = () => {
        axios.get(`${baseURL}/api/getJuly`)
        .then((res) => {
            console.log(res.data)
            while (summaryContainer.firstChild) {
                summaryContainer.removeChild(summaryContainer.firstChild);
              }
            summary(res.data)
        })
    }

    const sumTotal = (id) => {
        axios.get(`${baseURL}/api/getMonthlyInc/${id}`)
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

// let summaryArr = [monthlyInc, sum, incomeRemaining]

const summary = (obj) => {
    let inc = obj.Income
    let tax = obj.Tax
    let monthlyInc = inc - (inc * tax)

    let sum = 0
    let budgObj = {...obj.items}
    // console.log(budgObj)
    for (const i in budgObj) {
        sum += budgObj[i]
    }
    let incomeRemaining = monthlyInc - sum

    const summaryDiv = document.createElement('div')
    summaryDiv.classList.add('summary')

    summaryDiv.innerHTML = `<p>Your monthly income after tax is ${monthlyInc}</p><p>You've spent ${sum}</p><p>You have ${incomeRemaining} remaining</p></div>`
    summaryContainer.appendChild(summaryDiv)
}

// function displaySumary() {
//     budgetContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         create(arr[i])
//     }
// }

// form.addEventListener('submit', submitHandler)

// getAllMovies()

// const runEverything = () => {
// summary(summaryArr)
// postNameAndIncomeAndTax(2)

// }

// nameAndIncomeAndTaxSubmit.addEventListener("click", runEverything)
expenseAndCostSubmit.addEventListener("click", newExpense)

const incomeTotal = () => {
    sumTotal(1)
}
testButton.addEventListener("click", incomeTotal)
getMay.addEventListener("click", getMayBudget)
getJune.addEventListener("click", getJuneBudget)
getJuly.addEventListener("click", getJulyBudget)