const chalk = require("chalk");

module.exports = (client, id, replayedEvents) => {
    console.log(chalk.yellow(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Resumed`))
}
//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd