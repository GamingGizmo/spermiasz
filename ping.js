const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

  message.delete().catch(O_o => {});

  message.channel.send("Ping?").then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`))
}

exports.help = {
  name: "ping"
};
