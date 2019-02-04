const { Command } = require("../Structures");
const { ClientUtil, codeBlock } = require("../Util");

class Help extends Command {
    constructor() {
        super({
            name: "help",
            description: "This command tells you the available commands/games that you can use/play",
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
                        description: codeBlock(
                            "Command Name: " + command.name +
                            "\n"+
                            "\n"+
                            command.description
                        )
                    })
                )
            }
        }
        const normalCommands = loader.filter(command => command.type === 0).array();
        const games = loader.filter(command => command.type === 1).array();

        return message.channel.send(
            createEmbed({
                    title: "Help",
                    descirption: codeBlock(
                        normalCommands.length ? "Normal Commands:" : "" +
                        "\n" + normalCommands.join(", ") +
                        "\n" +
                        "\n" + games.join(", "), { lang: "prolog" })
            })
        );
    }
}

module.exports = Help;