const express = require('express')

const routes = express.Router()

const {createCategory,getAllCategory,getCategoryOnId,updateCategory,deleteCategory} = require('../controller/category')

routes.post('/ecomm/api/v1/categories',createCategory)

routes.get('/ecomm/api/v1/categories',getAllCategory)

routes.get('/ecomm/api/v1/categories/:id',getCategoryOnId)

routes.put('/ecomm/api/v1/categories/:id',updateCategory)

routes.delete('/ecomm/api/v1/categories/:id',deleteCategory)

routes.put('/ecomm/api/v1/categories',(req,res)=>{
    try {
        res.send("Success")
    } catch (error) {
        res.send(error)
    }
})


module.exports = routes