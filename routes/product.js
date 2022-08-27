const express = require('express')

const routes = express.Router()

const {createProducts,getAllProducts,getProductsOnId,updateProducts,deleteProducts,filterProduct} = require('../controller/product')

const {productValidation,verifyToken} = require('../middleware')

routes.post('/ecomm/api/v1/products',[productValidation],createProducts)

routes.get('/ecomm/api/v1/products',getAllProducts)

routes.get('/ecomm/api/v1/products/filter',filterProduct)

routes.get('/ecomm/api/v1/products/:id',getProductsOnId)

routes.put('/ecomm/api/v1/products/:id',[verifyToken],updateProducts)

routes.delete('/ecomm/api/v1/products/:id',[verifyToken],deleteProducts)



module.exports = {productRoutes:routes}