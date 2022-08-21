const { Categories } = require('../models')

async function productValidation(req,res,next){
    console.log(req.body)
    if(!req.body.name){
        res.status(400).send({'Info':"name is required"})
        return
    }
    if(req.body.CategoryId){
        console.log(req.body.CategoryId)
        // await Categories.findOne({
        //     where:{
        //         id:req.body.CategoryId
        //     }
        // })
        const result = await Categories.findByPk(req.body.CategoryId)
        console.log(result,"Result+>>>>>>>>>>>>>>>>>>>>>>")
        if(result){
            next()

        }else{
            res.status(400).send({'Info':"Category ID is invalid"})
        return

        }
        return
    }
    else{
        res.status(400).send({'Info':"Category ID is required"})
        return

    }
    
    
}

module.exports= { productValidation }