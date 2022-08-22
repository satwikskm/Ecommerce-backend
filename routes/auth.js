const express = require('express')

const {signUp}=require('../controller/auth')

const routes = express.Router()

//const {createProducts,getAllProducts,getProductsOnId,updateProducts,deleteProducts,filterProduct} = require('../controller/product')

//const {productValidation} = require('../middleware')

routes.post('/ecomm/api/v1/signUp',signUp)




module.exports = {authRoutes:routes}