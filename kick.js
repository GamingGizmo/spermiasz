const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let kickHelp = new Discord.RichEmbed()
      .setColor("#a905fc")
      .setTitle("Komenda: Kick")
      .addField("Opis:", "Wyrzuć użytkownika z serwera", true)
      .addField("Użycie", ">kick <user> <reason>", true)
      .addField("Przykład", ">kick @gracz wyzywanie")
      .addField("Note", "Gracz może wrócić za pomocą linka.");

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send(kickHelp);
  let kReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Brak permisji!");
  if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Użytkownik został wyrzucony!");

  let kickEmbed = new Discord.RichEmbed()
      .setDescription("Użytkownik wyrzucony")
      .setColor("#e59937")
      .addField("Nick użytkownika", `${kUser} with ID: ${kUser.id}`)
      .addField("wyrzucił", `<@${message.author.id}> with ID: ${message.author.id}`)
      .addField("z kanału", message.channel)
      .addField("Kicked on", message.createdAt)
      .addField("powód", kReason || "Unspecified");

  let kickResponseEmbed = new Discord.RichEmbed()
          .setColor("#21ff00")
          .setDescription(`${kUser} został wyrzucony z serwera!`);

  let kickChannel = message.guild.channels.find(ch => ch.name === 'logs')
  if (!kickChannel) return message.channel.send("Nie moge znaleść kanału. Zrób kanał! #logs")

  message.delete().catch(O_o => {});
  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
  message.channel.send(kickResponseEmbed);
}

module.exports.help = {
  name: "kick"
}
