const { MessageEmbed, Permissions } = require("discord.js");

module.exports = {
    config: {
        name: "join",
        aliases: ["summon"],
        description: "Makes the bot join the voice channel.",
        accessableby: "Member",
        category: "music",
    },
    run: async (client, message, args) => {
        const msg = await message.channel.send("Processing.....");

		const { channel } = message.member.voice;
		if (!message.guild.me.permissions.has([Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK])) return msg.edit({ embed: { description: "I don't have perm `CONNECT` or `SPEAK` to execute command!", color: "#2f3136" } });
        if (!message.guild.me.permissionsIn(channel).has([Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK])) return msg.edit({ embed : { description: `I don't have perm \`CONNECT\` or \`SPEAK\` in ${channel.name} to join voice!`, color: "#2f3136" } });

        const clientVoice = message.guild.me.voice.channel;
        const memberVoice = message.member.voice.channel;
		
		if (clientVoice) {
			if (clientVoice !== memberVoice) {
				const embed = new MessageEmbed()
					.setColor("#2f3136")
					.setDescription(`You must be in the same channel as ${message.client.user}`);

				return msg.edit({ content: ' ', embeds: [embed] });
			} else {
				const embed = new MessageEmbed()
					.setColor("#2f3136")
					.setDescription(`I'm already on your voice channel`);

				return msg.edit({ content: ' ', embeds: [embed] });
			}
		} else {
			if (memberVoice) {
				client.distube.voices.join(memberVoice)
					.then(voice => {
						const embed = new MessageEmbed()
							.setColor('#2f3136')
							.setDescription(`\`🔊\` | **Joined:** \`${memberVoice.name}\``)

                        msg.edit({ content: ' ', embeds: [embed] });
					})
					.catch(error => {
						console.log(e);
					})

				
			} else {
				const embed = new MessageEmbed()
					.setColor("#2f3136")
					.setDescription(`You must be in a voice channel!`);

				return msg.edit({ content: ' ', embeds: [embed] });
			}
		}
    }
}

//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd