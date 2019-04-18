const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let muteHelpEmbed = new Discord.RichEmbed()
  .setColor("#a905fc")
  .setTitle("Komenda: Tempmute")
  .addField("Opis", "Zmutuj użytkownika na określony czas", true)
  .addField("Użycie", ">tempmute @<user> <time> <reason>", true)
  .addField("Przykład", ">tempmute @gracz 2h powód")

  let tempMuteEmbed = new Discord.RichEmbed()
      .setDescription("Użytkownik zmutowany czasowo")
      .setColor("#e59937")
      .addField("Zmutowana osoba", `${mute} with ID: ${tempmute.id}`)
      .addField("Zmutowany przez", `<@${message.author.id}> with ID: ${message.author.id}`)
      .addField("Zmutowany na", message.channel)
      .addField("Muted on", message.createdAt)

  let tempmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(mute.hasPermission("KICK_MEMBERS")) return message.reply("Nie mozesz zmutować tej osoby!");

  let muterole = message.guild.roles.find(role => role.name === 'Muted')

  let mutetime = args[1];
  if(!mutetime) return message.channel.send(muteHelpEmbed);

  await(tempmute.addRole(muterole.id));
  message.reply(`<@${tempmute.id}> has been muted for ${ms(ms(mutetime))}`);

  await(mute.addRole(muterole.id));
  let muteChannel = message.guild.channels.find(ch => ch.name === 'logs')
  muteChannel.send(tempMuteEmbed);

  setTimeout(function(){
    mute.removeRole(muterole.id);
    message.channel.send(`<@${tempmute.id}> został odmutowany!`);
  }, ms(mutetime));

  //end of module
}

exports.help = {
  name: "tempmute"
}
