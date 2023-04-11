const amqp = require('amqplib')
const rabbitmqConnection = require('../connections/rabbitmqConnection')
const KEY = "emailKuyrugu"
const onConsumerData=async()=>{
    const connection = await rabbitmqConnection()
    const channel = await connection.createChannel()
    await channel.assertQueue(KEY)
    channel.consume(KEY,(data)=>{
        console.log(JSON.parse(data.content.toString()));
        const _data= JSON.parse(data.content.toString())
        setTimeout(() => {
            console.log("email gönderildi",_data.email);
             channel.ack(data)
        }, 5000);
    })
}
onConsumerData()