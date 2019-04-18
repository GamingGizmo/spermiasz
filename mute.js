const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let muteHelpEmbed = new Discord.RichEmbed()
  .setColor("#a905fc")
  .setTitle("Komenda: Mute")
  .addField("Opis", "Komenda mutuje użytkownika.", true)
  .addField("Użycie", ">mute @<user> <reason>", true)
  .addField("Przykład", ">mute @Uzytkownik Spamowanie")
  .addField("Tip", "Aby odmutować użytkownika użyj `>unmute` .");

  if(!args[0]) return message.channel.send(muteHelpEmbed);

  let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      
  let reason = args.join(" ").slice(22);
      let muteEmbed = new Discord.RichEmbed()
      .setDescription("Użytkownik zmutowany")
      .setColor("#e59937")
      .addField("Zmutowany", `${mute} with ID: ${mute.id}`)
      .addField("Zmutowany przez", `<@${message.author.id}> with ID: ${message.author.id}`)
      .addField("Zmutowany na", message.channel)
      .addField("Muted on", message.createdAt)
      .addField("Powód", reason)
    
  

  let muterole = message.guild.roles.find(role => role.name === 'Muted')

  await(mute.addRole(muterole.id));
  message.reply(`<@${mute.id}> został zmutowany za ${reason}`);

  await(mute.addRole(muterole.id));
  let muteChannel = message.guild.channels.find(ch => ch.name === 'logs')
  muteChannel.send(muteEmbed);


}

exports.help = {
  name: "mute"
}
