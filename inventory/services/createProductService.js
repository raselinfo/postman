const prisma=require("../utils/prisma")
const joi = require("joi")

const createProductService=async({name,price,quantity,userID})=>{

    const schema=joi.object({
        name: joi.string().required(),
        price: joi.number().required(),
        quantity: joi.number().required(),
        userID: joi.string().required()
    })

    const validation=schema.validate({name,price,quantity,userID})
    if(validation.error){
        const error=new Error("name, price, quantity, and userID are required")
        error.status=400
        throw error
    }


    const createdProduct=await prisma.product.create({
        data:{
            name,
            price,
            quantity,
            createdBy:userID
        }
    })

    return createdProduct
}


module.exports=createProductService