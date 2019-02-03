const { Client } = require("discord.js");
const { sync: globSync } = require("glob");

const Loader = require("./Loader");

const { token, prefix } = require("./secrets.json");

const client = new Client();
const loader = new Loader(globSync("./Commands/**/*.js"));

client.on("message", message => {
    const messageText = message.content;

    if (messageText.startsWith(prefix)) {
        const args = messageText.slice(2).split(/ +/).filter(x => x !== "");
        const commandName = args[0];

        if (loader.has(commandName)) {
            loader.get(commandName).execute({ client, message, args });
        }
    }
});

client.login(token);