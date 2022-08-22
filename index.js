const express = require('express')

const {serverPort} = require('./config/server.config')

const {Categories, Products,Role,sequelize} = require('./models')

const {categoryRoutes,productRoutes,authRoutes} = require('./routes')

app=express()

app.use(express.json())
app.use(categoryRoutes)
app.use(productRoutes)
app.use(authRoutes)

app.listen(serverPort,()=>{
    //init()
    console.log(`Server is running at ${serverPort}`)
})

const init = async() =>{
    await sequelize.sync({force:true})
    try {
        await sequelize.sync({force:true})
        const categories = [
            {
                name:"Beauty",
                description:"All Beauty Products"

            },
            {
                name:"Electronics",
                description:"All Electronics Products"

            },
            {
                name:"Health Care",
                description:"All Health Care Products"

            },
            {
                name:"Body Care",
                description:"All Body Care Products"

            }

       
    ]
    const products = [
        {
            description:"Nyka best products",
		    name :"MakeUP Kit",
		    cost: 870,
		    quantity: 20,
			CategoryId: 1
        },
        {
            description:"Mobile phones for tech ",
		    name :"OnePlus",
		    cost: 88770,
		    quantity: 1,
			CategoryId: 2
        },
        {
            description:"Protein and Vitamins ",
		    name :"Revital",
		    cost: 20,
		    quantity: 1,
			CategoryId: 3
        },
        {
            description:"Soaps and Lotions",
		    name :"Mimami-Body Care",
		    cost: 320,
		    quantity: 1,
			CategoryId: 4
        },
        

    ]
    const role = [
        {
            name:'Admin'
        },
        {
            name:'User'
        }
    ]
    const categoryResult = await Categories.bulkCreate(categories)
    const productResult = await Products.bulkCreate(products)
    const roleResult = await Role.bulkCreate(role)
    console.log(categoryResult,productResult)
    } catch (error) {
        console.log(error)
        
    }

}