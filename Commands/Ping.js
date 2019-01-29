class Ping extends Command {
    constructor(...args) {
        super({
            name: "ping",
            description: "This commands tells you your ping.",
            executeArgs: args
        })
    }
    execute({ message, args, client} ) {
        const pingMessage = await message.channel.send("Ping?");
        pingMessage.edit(`Pong! Latency is ${pingMessage.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  
    }
}