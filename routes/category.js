const express = require('express')

const routes= express.Router()

const {createCategory,getAllCategory,getCategoryOnId,updateCategory,deleteCategory} = require('../controller/category')

const {categoryValidation} = require('../middleware')

routes.post('/ecomm/api/v1/categories',[categoryValidation],createCategory)

routes.get('/ecomm/api/v1/categories',getAllCategory)

routes.get('/ecomm/api/v1/categories/:id',getCategoryOnId)

routes.put('/ecomm/api/v1/categories/:id',updateCategory)

routes.delete('/ecomm/api/v1/categories/:id',deleteCategory)


 


module.exports = {categoryRoutes:routes}