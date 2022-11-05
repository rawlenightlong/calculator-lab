require('dotenv').config();

const express = require('express')
const app = express()
const PORT = 3000

// put in a route called calcquery that takes in 2 parameters and query for operation

app.get('/calcquery/:num1/:num2/', (request, response) => {
    console.log(request.params.num1, request.params.num2)
    

// turning strings into integers

    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    const operation = request.query.operation

    if (operation === "add"){
        response.send(`The sum is ${num1 + num2}`)
    } else if (operation === "subtract"){
        response.send(`The substracted value is ${num1-num2} `)
    }else if (operation === "multiply"){
        response.send(`The multipled value is ${num1*num2}`)
    }else if (operation === "divide"){
        response.send(`The divided value is ${num1/num2}`)
    }else {
        response.send(`no operation`)
    }


})











app.listen(process.env.PORT, () => {
    console.log(`Listening on Port ${process.env.PORT}`)
})