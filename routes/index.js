const express = require('express')

const routes = express.Router()

const {createCategory} = require('../controller/category')

routes.post('/ecomm/api/v1/categories',createCategory)

routes.get('/ecomm/api/v1/categories',(req,res)=>{
    try {
        res.send("Success")
    } catch (error) {
        res.send(error)
    }
})

routes.put('/ecomm/api/v1/categories',(req,res)=>{
    try {
        res.send("Success")
    } catch (error) {
        res.send(error)
    }
})


module.exports = routes