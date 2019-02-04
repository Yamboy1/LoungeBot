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
        const { createEmbed } = ClientUtil(client);
        let description;

        if (!args[1]) {
            const commandArray = type => loader.filter(x => x.type === type)
            const normalCommands = commandArray(0).map(x => x.name);
            const games =          commandArray(1).map(x => x.name);

            description = 
                (normalCommands.length ? "Normal Commands:" : "") +
                "\n" + normalCommands.join(", ") +
                "\n" +
                "\n" + (games.length ? "Games:" : "") +
                "\n" + games.join(", ");
        } else {
            if (loader.has(args[1])) {
                const command = loader.get(args[1]);

                description = 
                    "Command Name: " + command.name +
                    "\n"+
                    "\n"+
                    command.description;
            } else {
                description = "Command not found";
            }
        }
        
        
        return message.channel.send(
            createEmbed({
                    title: "Help",
                    description: codeBlock(description, { lang: "prolog" })
            })
        );
    }
}

module.exports = Help;