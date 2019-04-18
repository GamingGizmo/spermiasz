const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

    let gay = Math.round(Math.random() * 100);

    let gayMember = message.guild.member(message.author.username || message.mentions.users.first() || message.guild.members.get(args[0]));

    

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **Myśle że ${message.author.username} jest w  ${gay}% gejem!** :gay_pride_flag:`);
    ;
    return message.channel.send(gayembed);
};

exports.help = {
    name: "gay"
};