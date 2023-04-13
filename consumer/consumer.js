// const amqp = require('amqplib')
// const rabbitmqConnection = require('../connections/rabbitmqConnection')
// const KEY = "emailKuyrugu"
// const onConsumerData=async()=>{
//     const connection = await rabbitmqConnection()
//     const channel = await connection.createChannel()
//     await channel.assertQueue(KEY)
//     channel.consume(KEY,(data)=>{
//         console.log(JSON.parse(data.content.toString()));
//         const _data= JSON.parse(data.content.toString())
//         setTimeout(() => {
//             console.log("email gönderildi",_data.email);
//              channel.ack(data)
//         }, 5000);
//     })
// }
// onConsumerData()

const amqp = require('amqplib');
const rabbitmqConnection = require('../connections/rabbitmqConnection');
const saveToDatabase = require('../connections/postgresqlConnections');

const KEY = "emailKuyrugu";

const onConsumerData = async () => {
    try {
        const connection = await rabbitmqConnection();
        const channel = await connection.createChannel();
        await channel.assertQueue(KEY);

        channel.consume(KEY, async (data) => {
            const _data = JSON.parse(data.content.toString());
            console.log('Email alındı:', _data.email);

            // Veriyi PostgreSQL veritabanına kaydet
            await saveToDatabase(_data);

            setTimeout(() => {
                console.log("Email gönderildi:", _data.email);
                channel.ack(data);
            }, 5000);
        });
    } catch (error) {
        console.log('Hata:', error);
    }
}

onConsumerData();
