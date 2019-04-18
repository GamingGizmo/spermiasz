const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let sayHelp = new Discord.RichEmbed()
  .setColor("#a905fc")
  .setTitle("Komenda: Say")
  .addField("Opis:", "Get the Bot to say a message", true)
  .addField("Użycie", ">say <message>", true)
  .addField("Przykład", ">say This server is the best!")
  .addField("Note", "Any abuse of this command will result in a command ban to that user!");

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply

  let botmessage = args.join(" ");

  if(!botmessage) return message.channel.send(sayHelp);

  message.delete().catch();
  message.channel.send(botmessage);
}

exports.help = {
  name: "say"
}
