const express = require('express')

const {serverPort} = require('./config/server.config')

const {Categories, sequilize} = require('./models')

const routes = require('./routes')

app=express()

app.use(express.json())
app.use(routes)

app.listen(serverPort,()=>{
     init()
    console.log(`Server is running at ${serverPort}`)
})

const init = async() =>{
    await Categories.sync({force:true})
    try {
        await Categories.sync({force:true})
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