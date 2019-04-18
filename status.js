const Discord = require("discord.js")



exports.run = async (bot, message, args) => {

 let StatusHelp = new Discord.RichEmbed()
    .setColor("#a915fc")
    .setTitle("Status")
    .addField(":white_check_mark: :white_check_mark: :white_check_mark: :x:  ", );
    
    return message.channel.send(StatusHelp);
}
exports.status = {
    name: "status"
}
