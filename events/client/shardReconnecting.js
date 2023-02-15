const chalk = require("chalk");

module.exports = (client, id) => {
    console.log(chalk.yellowBright(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Reconnecting`))
}
//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd