const express = require('express')

const routes = express.Router()

const {createProducts,getAllProducts,getProductsOnId,updateProducts,deleteProducts,filterProduct} = require('../controller/product')

const {productValidation} = require('../middleware')

routes.post('/ecomm/api/v1/products',[productValidation],createProducts)

routes.get('/ecomm/api/v1/products',getAllProducts)

routes.get('/ecomm/api/v1/products/filter',filterProduct)

routes.get('/ecomm/api/v1/products/:id',getProductsOnId)

routes.put('/ecomm/api/v1/products/:id',updateProducts)

routes.delete('/ecomm/api/v1/products/:id',deleteProducts)



module.exports = {productRoutes:routes}