const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
  let bicon = bot.user.avatarURL;
  let botembed = new Discord.RichEmbed()
      .setDescription("Informacje o Bocie")
      .setColor("#a905fc")
      .setThumbnail(bicon)
      .addField("Nazwa Bota", bot.user.username)
      .addField("Stworzony przez", "RedaktorNaczelny/Kubuś#3570" )
      .addField("Zrobiony w dniu", bot.user.createdAt);

      message.channel.send(botembed);
}

exports.help = {
  name: "botinfo"
}
