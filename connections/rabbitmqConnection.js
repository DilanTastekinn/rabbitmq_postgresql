const amqp = require("amqplib");


module.exports=async()=>{
    const connection =await amqp.connect({
        password:"mypassword",
        username:"admin"
    })
    return connection
}