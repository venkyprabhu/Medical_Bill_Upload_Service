const express =require('express')
const itemRoutes= require('./routes/itemRoutes')

// Express App
const app=express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Register view Engine
app.set('view engine', 'ejs')

// routes
app.use(itemRoutes)

module.exports= app
