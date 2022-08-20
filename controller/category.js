const {Categories} = require('../models')

async function createCategory (req,res){

    const categoryData = req.body 
    if(!categoryData.name){
        res.status(400).send({'Info':'Name is required'})
    }
    const name = categoryData.name
    const description= categoryData.description

    try {

        const result = await Categories.create({ name , description })
        console.log(result)
        res.status(200).send({'Info':`Category ${result} have ben created`})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({'Info':`Some Error ${error} Occured`})
        
    }


}
module.exports={
    createCategory
}