const amqp = require('amqplib')
const rabbitmqConnection = require('./rabbitmqConnection')

const KEY = "emailKuyrugu"
module.exports = async(data) => {
    try {
        const connection = await rabbitmqConnection()
        const channel = await connection.createChannel()
        await channel.assertQueue(KEY)
        channel.sendToQueue(KEY, Buffer.from(JSON.stringify(data)))
        console.log('Veri Kuyruga eklendii')
    } catch (error) {
        console.log('error', error)
    }
}