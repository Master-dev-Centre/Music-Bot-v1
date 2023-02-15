const chalk = require("chalk");
const delay = require("delay");

module.exports = async (client, id) => { 
    await delay(2000); 
    console.log(chalk.greenBright(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Ready`))
}
//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd