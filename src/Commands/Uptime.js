const moment = require("moment");
require("moment-precise-range-plugin");

const { Command } = require("../Structures");

class Uptime extends Command {
    constructor() {
        super({
            name: "uptime",
            description: "This command tells you my uptime"
        });
    }
    async execute({ message, client }) {
        await message.channel.send(`My uptime is \`${moment.preciseDiff(client.uptime, moment.now)}\``)
    }
}

module.exports = Uptime;