const { MessageEmbed } = require("discord.js");
const { color, prefix } = require("../Config");

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
                .setColor(color)
                .setFooter(`${prefix}[command]`)
                .setTimestamp()
    };
}