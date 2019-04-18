const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let dmHelp = new Discord.RichEmbed()
    .setColor("#a905fc")
    .setTitle("Command: DM")
    .addField("Description:", "Direct Message a user from the bot", true)
    .addField("Usage", "TC!dm @<user> <message>", true)
    .addField("Example", "TC!dm @Stentorian#0001 Hello!")
    .addField("Note", "Any abuse of this command will not be tollerated! Any message over 1024 characters will not be logged!");

    let dmUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!dmUser) return message.channel.send(dmHelp);
    let dmMessage = args.join(" ").slice(22);
    if (!dmMessage) return message.channel.send(dmHelp);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Insufficient Permissions to do this!");

    message.delete().catch(O_o => {});

    dmUser.send(dmMessage);

    let dmLog = new Discord.RichEmbed()
    .setDescription("DM from Bot Sent")
    .setColor("#e59937")
    .addField("DM'd User", `${dmUser} with ID: ${dmUser.id}`)
    .addField("DM'd By", `${message.author} with ID: ${message.author.id}`)
    .addField("DM'd on", message.createdAt)
    .addField("Message", dmMessage || "Unspecified");

    let logChannel = message.guild.channels.find(`name`, "bot-logs")
    if (!logChannel) return message.channel.send("Can't find log channel! Please create a channel called #logs")

    logChannel.send(dmLog);
}

module.exports.help = {
  name: "dm"
}