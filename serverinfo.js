const Discord = require("discord.js")

    exports.run = async (bot, message, args) => {
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
          .setDescription("Informacje o serwerze!")
          .setColor("#a905fc")
          .setThumbnail(sicon)
          .addField("Nazwa serwera", message.guild.name)
          .addField("Nazwa założyciela", `${message.guild.owner} with ID ${message.guild.ownerID}`)
          .addField("Stworzony dnia", message.guild.createdAt)
          .addField("Dołączyłeś", message.member.joinedAt)
          .addField("Użytkownicy", message.guild.memberCount);

          message.channel.send(serverembed);
    }

    exports.help = {
      name: "serverinfo"
    }
