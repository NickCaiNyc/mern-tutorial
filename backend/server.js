
//entry point to server
//package.json made through npm init

//npm i express dotenv mongoose colors

//npm i -D nodemon watch dev dependancy watch server js file so no need to restart
const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000

const {errorHandler} = require('./middleware/errorMiddleware') //step 5

const app = express()
//dont want this here usually clean structure
/*
app.get('/api/goals' , (req,res) =>{//looks/gets into the port 5000 set up on postman and request a connecction and if done responds with what is below
    res.status(200).json({message: 'Get goals'})//res response
    //res.send('Get goals') works too
})
*/
//step 5
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

//create a route