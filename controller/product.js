const {Products, Sequelize} = require('../models')

async function createProducts (req,res){

    const productData = req.body 
    // if(!productData.name){
    //     res.status(400).send({'Info':'Product name is required'})
    // }
    const name = productData.name
    const description= productData.description
    const cost = productData.cost
    const quantity = productData.quantity
    const categoryId = productData.categoryId


    try {

        const result = await Products.create({ name , description , cost, quantity,categoryId})
        console.log(result)
        res.status(200).send({'Info':`Product ${result.id} have ben created`})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({'Info':`Some Error ${error} Occured`})
        
    }


}

async function getAllProducts(req, res){
	try{
		const result = await Products.findAll()
		res.send(result)
	}catch(err){
        console.log(error)
        res.status(500).send({'Info':`Some Error ${error} Occured`})
		
	}
}

async function getProductsOnId(req,res){
    const productId = req.params.id

    try {

        const result = await Products.findOne({
            where:{
                id:productId
            }
        })
        console.log(result)
        res.status(200).send({'Info':result})
        


        
    } catch (error) {
        console.log(error)
        res.status(500).send({'Info':`Some Error ${error} Occured`})
        
        
    }

    
}

async function updateProducts(req,res){
    const productId = req.params.id
    const {name,description} = req.body

    try {

        const result = await Products.findOne({
            where:{
                id:productId
            }
        })
        if(result){
            result.name = name,
            result.description = description
            result.save()
            res.status(200).send({'Info':`Product ${result.name} got updated successfully`})


        }
        else{
            res.status(400).send({'Info':`Id ${productId} doesn't exists`})
        }

        }catch (error) {
            console.log(error)
            res.status(500).send({'Info':`Some Error ${error} Occured`})
            
            
        }
       
        


        
} 

async function deleteProducts(req,res){
    const categoryId = req.params.id
   

    try {

        const result = await Products.destroy({
            where:{
                id:productId
            }
        })
        
            res.status(200).send({'Info':`${categoryId} deleted successfully ,${result}`})


        
        
        

        }catch (error) {
            console.log(error)
            res.status(500).send({'Info':`Some Error ${error} Occured`})
            
            
        }
       
        


        
} 



async function filterProduct(req,res){
    const CategoryId = req.query.CategoryId
    const name = req.query.name
    const minCost = req.query.minCost
    const maxCost = req.query.CategoryId

    if(CategoryId){
       const result =  await Products.findAll({
            where:{
                CategoryId:CategoryId
            }
        })
        return res.status(200).send(result)
    }
    else if(name){
        const result =  await Products.findAll({
             where:{
                 name:name
             }
         })
         return res.status(200).send(result)
     }
    else if(minCost && maxCost){
        const result =  await Products.findAll({
             where:{
                cost:{
                    [Sequelize.Op.gte]:minCost,
                    [Sequelize.Op.lte]:maxCost
                }
             }
         })
         return res.status(200).send(result)
     }
     else if(minCost){
        const result =  await Products.findAll({
             where:{
                cost:{
                    [Sequelize.Op.gte]:minCost
                   
                }
             }
         })
         return res.status(200).send(result)
     }
     else if(maxCost){
        const result =  await Products.findAll({
             where:{
                cost:{
                    [Sequelize.Op.lte]:maxCost
                   
                }
             }
         })
         return res.status(200).send(result)
     }
    
    else{
        res.status(400).send({'Info':'Item Not Found'})
    }

}

    



module.exports={
    createProducts,
    getAllProducts,
    updateProducts,
    getProductsOnId,
    deleteProducts,
    filterProduct
}