const {Products} = require('../models')

async function createProducts (req,res){

    const productData = req.body 
    if(!productData.name){
        res.status(400).send({'Info':'Product name is required'})
    }
    const name = productData.name
    const description= productData.description
    const cost = productData.cost
    const quantity = productData.quantity

    try {

        const result = await Products.create({ name , description , cost, quantity})
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
            res.status(200).send({'Info':result})


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

    



module.exports={
    createProducts,
    getAllProducts,
    updateProducts,
    getProductsOnId,
    deleteProducts
}