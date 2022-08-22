const bcrypt = require('bcrypt')
const {User} = require('../models')

async function signUp(req,res){
    const username = req.body.username
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password,8)

    console.log(password,req.body.password)
    try {
        const user = await User.create({username,email,password})


        if(req.body.roles){

            const roles = req.body.roles
            const result = await user.setRoles(roles)
            console.log(result)
        }else{
            const result = await user.setRoles([1])
            console.log(result)
        }

        res.send({"Info":"User have been created successfully"})
    
    } catch (error) {
        console.log(error)
        res.status(400).send({'Info':"Unable to create user"})
        
    }
}



module.exports ={
    signUp  
}