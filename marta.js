const Discord = require("discord.js")



exports.run = async (bot, message, args) => {

 let SexHelp = new Discord.RichEmbed()
    .setColor("#a915fc")
    .setTitle("Jebanie")
    message.channel.send(" https://cdn.discordapp.com/attachments/421016932964237314/565300827443691555/35079507_788105381381538_5702049662215651328_o.png " );
    
    return message.channel.send(SexHelp);
}
exports.Sex = {
    name: "Sex"
}