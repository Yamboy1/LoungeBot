const moment = require("moment");
require("moment-duration-format");

const { Command } = require("../Structures");
const { ClientUtil } = require("../Util")

class Uptime extends Command {
    constructor() {
        super({
            name: "uptime",
            description: "This command tells you my uptime"
        });
    }
    async execute({ message, client }) {
        const { createEmbed } = ClientUtil(client);
        await message.channel.send(
            createEmbed({
                title: "Uptime",
                description: 
                    "My uptime is `" +
                        moment.duration(client.uptime).format(
                            "Y [years], M [months], D [days], H [hours], m [minutes], s [seconds]"
                        ) + "`"
            })
        );
    }
}

module.exports = Uptime;