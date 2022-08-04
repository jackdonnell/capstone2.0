// let budgetDatabase = [{
//     Name: 'May',
//     Income: 5000,
//     Tax: .15,
//     items: {
//     Rent: 1600,
//     Car: 300,
//     Insurance: 200,
//     Phone: 100,
//     Groceries: 460,
//     Shopping: 520,
//     Travel: 190,
//     Movies: 50,
//     Investment: 800}
// },
// {
//     Name: 'June',
//     Income: 5000,
//     Tax: .15,
//     items: {
//     Rent: 1600,
//     Car: 300,
//     Insurance: 200,
//     Phone: 100,
//     Groceries: 280,
//     Shopping: 370,
//     Travel: 430,
//     Investment: 800}
// },
// {
//     Name: 'July',
//     Income: 5000,
//     Tax: .15,
//     items: {
//     Rent: 1600,
//     Car: 300,
//     Insurance: 200,
//     Phone: 100,
//     Groceries: 660,
//     Shopping: 90,
//     Travel: 1200,
//     Investment: 800}
// }]

// let monthlyInc = 0
// const findMonthlyIncAfterTax = (index) => { 
//     let inc = budgetDatabase[index].Income
//     let tax = budgetDatabase[index].Tax
//     monthlyInc = inc - (inc * tax)
//     return monthlyInc
// }

// console.log(findMonthlyIncAfterTax(1))

// let sum = 0
// const sumBudget = (index) => { 
//     let budgObj = {...budgetDatabase[index].items}
//     // console.log(budgObj)
//     for (const i in budgObj) {
//         sum += budgObj[i]
//     }
//     return sum
// }
// app.get("/api/getSum/:id", (req, res) => {
//     console.log("Endpoint hit")
//     console.log(req.params.id)
//     let x = req.params.id
//     let result = sumBudget(index)
//     let resultObj = {totalCost: result}
//     res.status(200).send(resultObj)
// })
// console.log(sumBudget(1))

// let incomeRemaining = monthlyInc - sum

// console.log(incomeRemaining)


// const summary = () => {
//     const summaryDiv = document.createElement('div')
//     summaryDiv.classList.add('summary')

//     summaryDiv.innerHTML = `<p>Your monthly income after tax is ${monthlyInc}</p><p>You've spent ${sum}</p><p>You have ${incomeRemaining} remaining</p></div>`


//     summaryContainer.appendChild(summaryDiv)
// }

// // OPTION 2
// let summaryArr = [monthlyInc, sum, incomeRemaining]

// const summary = () => {
//     const summaryDiv = document.createElement('div')
//     summaryDiv.classList.add('summary')

//     summaryDiv.innerHTML = `<p>Your monthly income after tax is ${summaryArr[0]}</p><p>You've spent ${summaryArr[1]}</p><p>You have ${summaryArr[2]} remaining</p></div>`


//     summaryContainer.appendChild(summaryDiv)
// }
// //idk what i need to replace/ delete/ add here
// function displayMovies(arr) {
//     moviesContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createMovieCard(arr[i])
//     }
// }

// form.addEventListener('submit', submitHandler)

// getAllMovies()


// const budgTable = () => {
//     const tableDiv = document.createElement('div')
//     tableDiv.classList.add('table')

//     tableDiv.innerHTML = `<tr>
//     <th>Item</th>
//     <th>Cost</th>
//   </tr></div>`


//     summaryContainer.appendChild(summaryDiv)
// }

// function displayMovies(arr) {
//     moviesContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createMovieCard(arr[i])
//     }
// }

// form.addEventListener('submit', submitHandler)

// getAllMovies()