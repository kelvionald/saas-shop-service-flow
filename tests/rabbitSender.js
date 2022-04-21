const amqp = require('amqplib/callback_api')

function rabbitSender(channelName, obj) {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var msg = JSON.stringify(obj);

            channel.assertQueue(channelName, {
                durable: false
            });

            console.log("SENDER: %s", msg);
            channel.sendToQueue(channelName, Buffer.from(msg))
        })
    })
}

module.exports = rabbitSender