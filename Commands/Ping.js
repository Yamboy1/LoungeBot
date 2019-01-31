const Command = require("../Command");

class PingCommand extends Command {
    constructor() {
        super({
            name: "ping",
            description: "This commands tells you your ping."
        });
    }
    async execute({ client, message }) {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);  
    }
}

module.exports = PingCommand;