const express=require('express')
const login=require('./utils/login')
const status=require('./utils/data')
const app=express()
const cors=require("cors")
const bodyParser = require('body-parser')
const {authenticateToken}=require('./authentication/auth')

// app.set("*","Access-Control-Allow-Origin")
app.use(cors({
    origin:"*",
    methods:["GET","POST"]
}))

app.use(bodyParser.json())

app.use('/login',login)

app.use('/status',status)

app.listen(3002)