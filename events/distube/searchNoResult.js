const { MessageEmbed } = require("discord.js");

module.exports = async (client, query, queue) => {
    const embed = new MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`No result found for ${query}!`)

    queue.textChannel.send({ embeds: [embed] })
}

//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd