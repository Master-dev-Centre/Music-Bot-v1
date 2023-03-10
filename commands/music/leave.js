const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "leave",
        aliases: ["lev", "stop", "dc"],
        description: "Makes the bot leave the voice channel.",
        accessableby: "Member",
        category: "music",
    },
    run: async (client, message, args) => {
        const msg = await message.channel.send("Processing.....");
        const queue = client.distube.getQueue(message);
		if (!queue) return msg.edit(`There is nothing in the queue right now!`)
        const clientVoice = message.guild.me.voice.channel;
        const memberVoice = message.member.voice.channel;

        if (clientVoice === memberVoice) {
            if (queue) {
                client.distube.stop(message);
                client.distube.voices.leave(message.guild);
            } else {
                client.distube.voices.leave(message.guild);
            }

            const embed = new MessageEmbed()
                .setDescription(`\`🚫\` | **Left:** | \`${memberVoice.name}\``)
                .setColor('#2f3136')

            msg.edit({ content: ' ', embeds : [embed] });

        }

    }
}

//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd