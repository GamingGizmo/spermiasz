const Discord = require("discord.js")



exports.run = async (bot, message, args) => {

 let sickHelp = new Discord.RichEmbed()
    .setColor("#a915fc")
    .setTitle("SICk")
    message.channel.send(" https://www.mememaker.net/api/bucket?path=static/img/memes/full/2018/Dec/18/17/sick-go-home-764.png " );
    
    return message.channel.send(sickHelp);
}
exports.sick = {
    name: "sick"
}