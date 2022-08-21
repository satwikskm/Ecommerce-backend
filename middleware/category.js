async function categoryValidation(req,res,next){
    if(!req.body.name){
        res.status(400).send({'Info':"name is required"})
        return
    }
    
    next()
}

module.exports= { categoryValidation }