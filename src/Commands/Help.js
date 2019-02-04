const { Command } = require("../Structures");
const { ClientUtil, codeBlock } = require("../Util");

class Help extends Command {
    constructor() {
        super({
            name: "help",
            description: "This command tells you the available commands/games that you can use/play.",
        });
    }
    async execute({ message, args, client, loader }) {
        const { createEmbed } = ClientUtil(client)
        if (args[1]) {
            if (loader.has(args[1])) {
                const command = loader.get(args[1]);
                return message.channel.send(
                    createEmbed({
                        title: "Help",
                        description: codeBlock("\
                            Command Name: " + command.name + "\
                            \n\
                            \n\
                            " + command.description
                        )
                    })
                )
            }
        }
    }
}

module.exports = Help;