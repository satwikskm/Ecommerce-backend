const {categoryValidation}=require('./category')
const  { productValidation } =require('./product')
const { checkDuplicates,checkRoles } = require('./user')

module.exports={
    categoryValidation,
    productValidation ,
    checkDuplicates,
    checkRoles
}