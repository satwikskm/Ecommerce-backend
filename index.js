const express = require('express')

const {serverPort} = require('./config/server.config')

const {Categories, sequelize} = require('./models')

const {categoryRoutes,productRoutes} = require('./routes')

app=express()

app.use(express.json())
app.use(categoryRoutes)
app.use(productRoutes)

app.listen(serverPort,()=>{
     //init()
    console.log(`Server is running at ${serverPort}`)
})

const init = async() =>{
    await sequelize.sync({force:true})
    try {
        await sequelize.sync({force:true})
        const test = [
            {
                name:"test",
                description:"This is a test data"

        }
       
    ]
    const result = await Categories.bulkCreate(test)
    console.log(result)
    } catch (error) {
        console.log(error)
        
    }

}