const Discord = require("discord.js")


  
exports.run = async (bot, message, args) => {

  let banHelp = new Discord.RichEmbed()
      .setColor("#a905fc")
      .setTitle("Komenda: Ban")
      .addField("Opis:", "Zbanowanie", true)
      .addField("Użycie", ">ban <user> <reason>", true)
      .addField("Przykład", ">ban @nazwa powód")
      .addField("Tip", "Jeżeli chcesz odbanować wejdź w opcje serwera, dziennik zdarzeń i wyszukaj nick ");

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send(banHelp);
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Brak permisji!");
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No próbuje, i ni chuja nie dam rady!");

  let banEmbed = new Discord.RichEmbed()
      .setDescription("Użytkownik zbanowany")
      .setColor("#ff0400")
      .addField("Osoba zbanowana", `${bUser} with ID: ${bUser.id}`)
      .addField("Zbanowana przez", `<@${message.author.id}> with ID: ${message.author.id}`)
      .addField("Zbanowana na", message.channel)
      .addField("Banned on", message.createdAt)
      .addField("Powód", bReason || "Unspecified");

  let banResponseEmbed = new Discord.RichEmbed()
      .setColor("#21ff00")
      .setDescription(`${bUser} został pomyślnie zbanowany na serwerze!`);


  let banChannel = message.guild.channels.find(ch => ch.name === 'logs')
  if (!banChannel) return message.channel.send("Nie moge znaleść kurwa kanału! Weź kurwa zrób kanał #logs")


  message.delete().catch(O_o => {});
  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);
  message.channel.send(banResponseEmbed);
}

exports.help = { 
  name: "ban"
}
