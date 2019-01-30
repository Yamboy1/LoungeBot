const { Client } = require("discord.js");

const Loader = require("./Loader");

const { token } = require("./secrets.json");

const client = new Client();
const loader = new Loader("./Commands");

client.on("message", message => {
    const commandName = message.content.toLowerCase();
    if (loader.has(commandName)) {
        loader.get(commandName).execute({ client, message })
    }
}

client.login(token);