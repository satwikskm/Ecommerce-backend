const {Categories} = require('../models')

async function createCategory (req,res){

    const categoryData = req.body 
    // if(!categoryData.name){
    //     res.status(400).send({'Info':'Name is required'})
    // }
    const name = categoryData.name
    const description= categoryData.description

    try {

        const result = await Categories.create({ name , description })
        console.log(result)
        res.status(200).send({'Info':`Category ${result.id} have ben created`})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({'Info':`Some Error ${error} Occured`})
        
    }


}

async function getAllCategory(req, res){
	try{
		const result = await Categories.findAll()
		res.send(result)
	}catch(err){
        console.log(error)
        res.status(500).send({'Info':`Some Error ${error} Occured`})
		
	}
}

async function getCategoryOnId(req,res){
    const categoryId = req.params.id

    try {

        const result = await Categories.findOne({
            where:{
                id:categoryId
            }
        })
        console.log(result)
        res.status(200).send({'Info':result})
        


        
    } catch (error) {
        console.log(error)
        res.status(500).send({'Info':`Some Error ${error} Occured`})
        
        
    }

    
}

async function updateCategory(req,res){
    const categoryId = req.params.id
    const {name,description} = req.body

    try {

        const result = await Categories.findOne({
            where:{
                id:categoryId
            }
        })
        if(result){
            result.name = name,
            result.description = description
            result.save()
            res.status(200).send({'Info':result})


        }
        else{
            res.status(400).send({'Info':`Id ${categoryId} doesn't exists`})
        }

        }catch (error) {
            console.log(error)
            res.status(500).send({'Info':`Some Error ${error} Occured`})
            
            
        }
       
        


        
} 

async function deleteCategory(req,res){
    const categoryId = req.params.id
    const {name,description} = req.body

    try {

        const result = await Categories.destroy({
            where:{
                id:categoryId
            }
        })
        
            res.status(200).send({'Info':`${categoryId} deleted successfully ,${result}`})


        
        
        

        }catch (error) {
            console.log(error)
            res.status(500).send({'Info':`Some Error ${error} Occured`})
            
            
        }
       
        


        
} 

    



module.exports={
    createCategory,
    getAllCategory,
    updateCategory,
    getCategoryOnId,
    deleteCategory
}