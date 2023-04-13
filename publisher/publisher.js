const amqp = require('amqplib')
const rabbitmqConnection = require('../connections/rabbitmqConnection')

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
// const amqp = require('amqplib');
// const rabbitmqConnection = require('../connections/rabbitmqConnection');
// const saveToDatabase = require('../connections/postgresqlConnections');

// const KEY = "emailKuyrugu";

// module.exports = async (data) => {
//     try {
//         // Veriyi PostgreSQL veritabanına kaydet
//         await saveToDatabase(data);

//         // Veriyi RabbitMQ'ya gönder
//         const connection = await rabbitmqConnection();
//         const channel = await connection.createChannel();
//         await channel.assertQueue(KEY);
//         channel.sendToQueue(KEY, Buffer.from(JSON.stringify(data)));
//         console.log('Veri Postgres ve RabbitMQ\'ya gönderildi:', data);
//     } catch (error) {
//         console.log('Hata:', error);
//     }
// }
