const figlet = require('figlet');
const chalk = require('chalk');

module.exports = async (client) => {
  figlet(client.user.tag, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.red.bold(data));
  });

  let guilds = client.guilds.cache.size;
  let users = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
  let channels = client.channels.cache.size;

  const activities = [
      `${client.prefix}help | ${guilds} servers`,
      `${client.prefix}play <input> | ${users} users`,
      `${client.prefix}filterlist | ${channels} channels`,
  ]

  setInterval(() => {
      client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, { type: 'WATCHING' });
  }, 15000)
}

//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd