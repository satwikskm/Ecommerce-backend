const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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


async function signIn(req,res){

     const username = req.body.username
     const password = req.body.password
    
     try {
        
        const user = await User.findOne({
            where:{
                username:username
            }
        })
        if(user){
            const val = bcrypt.compareSync(password,user.password)
            // if(val){
            //     //res.status(200).send(user)
            // }else{
            //     res.status(400).send({'Info':"Username/Password is incorrect"})

            // }

            const token = await jwt.sign({id:user.id},process.env.JWT_SECRET_KEY,{expiresIn:'1H'})
            //console.log("token",token)

            const authorities = []

            const roles = await user.getRoles()

            for(let i = 0 ;i<roles.length;i++){
                authorities.push(roles[i].name)
            }

            const finalUser = {
                id:user.id,
                name : username,
                email :user.email,
                token:token,
                authorities:authorities


            }

            res.send(finalUser)

        


            



        }else{
            res.status(400).send({'Info':"Username/Password is incorrect"})
        }
        console.log(user)
        
     } catch (error) {
        res.status(500).send(`Internal server error ${error}`)
        
     }



}



module.exports ={
    signUp  ,
    signIn
}