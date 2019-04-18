const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (bot, message, args) => {

  let warnHelpEmbed = new Discord.RichEmbed()
      .setColor("#a905fc")
      .setTitle("Komenda: Warn")
      .addField("Opis:", "Upomnienie dla osoby", true)
      .addField("Użycie", ">warn @<user> <reason>", true)
      .addField("Przykład", ">warn @RedaktorNaczelny Rucham ci matke");
  

  //.warn @user <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Nie możesz tego zrobić, polaku!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(warnHelpEmbed);
  if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("Nie może zostać zmutowany!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
  warns: 0
};

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Ostrzeżenie ")
  .setColor("#a905fc")
  .addField("Ostrzeżony przez", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Ostrzeżona osoba", `${wUser} with ID ${wUser.id}`)
  .addField("Ostrzeżona na", message.channel)
  .addField("Ilość ostrzeżeń", warns[wUser.id].warns)
  .addField("Powód", reason || "Pies");


  let banChannel = message.guild.channels.find(ch => ch.name === 'logs')
  if (!banChannel) return message.channel.send("Nie moge znaleść kurwa kanału! Weź kurwa zrób kanał #logs")

  message.delete().catch(O_o => {});
  warnchannel.send(warnEmbed);
  message.channel.send(`${wUser} został zwarnowany za **${reason || "Nie podano powodu!"}**`);
}

exports.help = {
  name: "warn"
}
