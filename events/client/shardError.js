const chalk = require("chalk");

module.exports = (client, error, id) => {
    console.log(chalk.red(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Errored`))
}
//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd