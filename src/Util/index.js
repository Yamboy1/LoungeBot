const { MessageEmbed } = require("discord.js");

const { prefix } = require("../secrets.json")

module.exports = client => {
    if (!(client instanceof require("discord.js").Client)) return;

    return {
        createEmbed: ({ title, description, image, thumbnail }) =>
            new MessageEmbed()
                .setTitle(title)
                .setDescription(description)
                .setImage(image)
                .setThumbnail(thumbnail)
                .setAuthor(client.user.username, client.user.displayAvatarURL)
                .setColor(0x8E44AD)
                .setFooter(`${prefix}[command]`)
                .setTimestamp()
    };
};