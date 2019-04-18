const Discord = require("discord.js")

  exports.run = async (bot, message, args) => {
    
    //EMBEDS
    let categoriesEmbed = new Discord.RichEmbed()
    .setColor("#921pd9")
    .addField("AntiSpermiarz komendy", "AntiSpermiarz ma prefix `>`")
    .addField("Komendy Administratora", "`>help mod`", true)
    .addField("Główne komendy", "`>help general`", true)
    .addField("4FUN komendy", "`>help fun`", true)
    .addField("Komendy stwórcy bota", "`>help botowner`", true);

    let modEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("Moderation Commands")
    .setDescription("Komendy dla moderatorów i Adminów")
    .addField("`>ban {@user} {reason}`", "komenda do banowania" )
    .addField("`>kick @{user} {reason}`", "komenda do wyrzucenia" )
    .addField("`>mute @{user} {reason}", "komenda do zmutowania " )
    .addField("`>tempmute @{user} {time} {reason (optional)}`", "komenda do mutowania na czas")
    .addField("`>warn {@user} {reason`}", "Komenda do ostrzeżenia użytkownika" )
    .addField("`>warns {@user}`", "komenda do sprawdzenia stanu ostrzeżeń użytkownika" );

    let generalEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("General Commands")
    .setDescription("Komendy dla każdego")
    .addField("`>botinfo`", "informacje o bocie" )
    .addField("`>help`", "komendy bota" )
    .addField("`>ping`", "informacja o pingu" )
    .addField("`>serverinfo`", "informacje o serwerze" );

    let funEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("Fun Commands")
    .setDescription("Komendy które powstaną!")
    .addField("`>ball {question}`", "Zapytaj bota o coś")

    let botownerEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("Komendy właściciela")
    .setDescription("Komendy mogą być użyte tylko przed właściciela bota")
    .addField("`>reload`", "Restart Bota")
    .addField("`>eval {code}`", "Sekretne gówno.");
    
    //delete command message
    message.delete().catch();

    //send list of categories
    if(!args[0]) return message.channel.send(categoriesEmbed);

    //checks for specified help menu
    if(args[0] === "mod") return message.channel.send(modEmbed);
    if(args[0] === "general") return message.channel.send(generalEmbed);
    if(args[0] === "fun") return message.channel.send(funEmbed);
    if(args[0] === "botowner") return message.channel.send(botownerEmbed);

    //send list of categories again
    if(!args[0]) return message.channel.send(categoriesEmbed);
    
  }

  exports.help = {
    name: "help"
  }
