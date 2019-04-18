const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let muterole = message.guild.roles.find(role => role.name === 'Muted')
  if(!args[0]) return message.channel.send("Nie masz uprawnień do odmutowania użytkownika!");
  
  let toUnmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(Unmute.hasRole(muterole.id)) return message.channel.send(`${toUnmute.id} nie jest zmutowany!`);

    await(Unmute.removeRole(Muted));
    message.reply(`<@${tomute.id}> został odmutowany przez <@${message.author.id}>`);

    await(Unmute.removeRole(Muted));
    let muteChannel = message.guild.channels.find(ch => ch.name === 'logs')
    muteChannel.send(`<@${tomute.id}> został odmutowany przez <@${message.author.id}>`);

};

exports.help = {
  name: "unmute"
}
