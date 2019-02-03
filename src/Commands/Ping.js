const { Command } = require("../Structures");

class Ping extends Command {
    constructor() {
        super({
            name: "ping",
            description: "This command tells you my ping."
        });
    }
    async execute({ client, message }) {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}

module.exports = Ping;