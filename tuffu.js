const Discord = require("discord.js")



exports.run = async (bot, message, args) => {
//EMBEDS
 let tuffuHelp = new Discord.RichEmbed()
    .setColor("#a915fc")
    .setTitle("Historie tuffa")
    .addField(">matka ci wchodzi do pokoju costam costam gada GAARAKFKSFJA    ", true)
    .addField(">ty ezita hariganta szpelelite dota", true)
    .addField(">matka wychodzi", true)
    .addField(">i spokuj", true);
    
    return message.channel.send(tuffuHelp);

    //delete command message
    message.delete().catch();

    //send list of categories
    if(!args[0]) return message.channel.send(categoriesEmbed);

}
exports.tuffu = {
    name: "tuffu"
}