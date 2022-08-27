const {categoryValidation}=require('./category')
const  { productValidation } =require('./product')
const { checkDuplicates,checkRoles} = require('./user')
const {verifyToken,isAdmin}=require('./authUser')

module.exports={
    categoryValidation,
    productValidation ,
    checkDuplicates,
    checkRoles,
    verifyToken,
    isAdmin

}