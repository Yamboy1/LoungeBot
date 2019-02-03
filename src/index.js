const { Client } = require("discord.js");
const { sync: globSync } = require("glob");

const { Loader } = require("./Structures");
const { token, prefix } = require("./Config");

const client = new Client();
const loader = new Loader(globSync("./Commands/**/*.js"), __dirname);

client.on("ready", () => {
    console.log("Ready");
})

client.on("message", message => {
    const messageText = message.content;

    if (messageText.startsWith(prefix)) {
        const args = messageText.slice(prefix.length-1)
            .split(/ +/)
            .filter(x => x !== "");

        const commandName = args[0];

        if (loader.has(commandName)) {
            loader.get(commandName).execute({ client, message, args });
        }
    }
});

client.login(token);