const express = require('express')

const {signUp}=require('../controller/auth')

const routes = express.Router()

const {checkDuplicates,checkRoles} = require('../middleware')

//const {createProducts,getAllProducts,getProductsOnId,updateProducts,deleteProducts,filterProduct} = require('../controller/product')

//const {productValidation} = require('../middleware')

routes.post('/ecomm/api/v1/signUp',[checkDuplicates],[checkRoles],signUp)




module.exports = {authRoutes:routes}