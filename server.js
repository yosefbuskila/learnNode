const express = require('express')
const getRouter=require('./getRouter')
const addRouter=require('./addRouter')

const bodyParser = require('body-parser')
var cors = require('cors')
app= express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use('/get',getRouter)
app.use('/add',addRouter)

app.listen(8500,_=>console.log('app runing on port 8500'))