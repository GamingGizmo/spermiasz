const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
var TOKEN = 'NTQ5Njg2MTE2MjQ5NTAxNzA1.D1dM-Q.NTNqBp_7gfpMkDX477ITFci5Ops'

var prefix = ">";


const path = require('path');

const banCmd = require('./commands/ban.js')

const clearCmd = require('./commands/clear.js')

const botinfoCmd = require('./commands/botinfo.js')

const membercountCmd = require('./commands/membercount.js')

const pingCmd = require('./commands/ping.js')

const serverinfoCmd = require('./commands/serverinfo.js')

const helpCmd = require('./commands/help.js')

const kickCmd = require('./commands/kick.js')

const muteCmd = require('./commands/mute.js')

const unmuteCmd = require('./commands/unmute.js')

const gayCmd = require('./commands/gay.js')

const sayCmd = require('./commands/say.js')

const evalCmd = require('./commands/eval.js')

const Music = require('discord.js-musicbot-addon');

const statusCmd = require('./commands/status.js')

const SexCmd = require('./commands/marta.js')

const tuffuCmd = require('./commands/tuffu.js')

const tempmuteCmd = require('./commands/tempmute.js')

const sickCmd = require('./commands/sick.js')












//welcome message
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined to server <3.`);

  let welcomeChannel = member.guild.channels.find(ch => ch.name === '✔rozmówki')
  if (!welcomeChannel) return console.log("Could not log a member joining as the server doesn't have a log channel!");
  let generalChannel = member.guild.channels.find(ch => ch.name === 'welcome-leave')
  if (!welcomeChannel) return generalChannel("Cannot log the member that has joined your server. Please create a channel called #welcome-leave. :smiley:");

  let welcomeEmbed = new  Discord.RichEmbed()
  .setDescription(`Siemanko ${member} witamy na serwerze. Myślę że twoje spierdolenie ogarnie co tutaj sie odjaniepawla <3`)
  .setFooter("Dołączono")
  .setColor("GREEN");

  welcomeChannel.send(welcomeEmbed);
});

bot.on("ready", async () => {
  console.log(`${bot.user.tag}'s online!`);
  bot.user.setActivity("wstępnej z Personom", {type: "PLAYING"});
});



global.currentTeamMembers = [];
global.servers = {};

bot.on("ready", () => {

  console.clear();
  console.log(`Working!`);
});




//Console
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));


bot.on('message', (message) => {
  const msg = message.content.toLowerCase();
  if (message.author.bot) return;
  const args = msg.split(' ');
  const command = args.shift().slice(prefix.length);
  if (msg.startsWith(prefix + "ban")) banCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "c")) clearCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "botinfo")) botinfoCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "serverinfo")) serverinfoCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "ping")) pingCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "help")) helpCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "kick")) kickCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "mute")) muteCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "unmute")) unmuteCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "online")) membercountCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "gay")) gayCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "say")) sayCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "sick")) sickCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "marta")) SexCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "tuffymane")) tuffuCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "status")) statusCmd.run(bot,message, args);
  if (msg.startsWith(prefix + "tempmute")) tempmuteCmd.run(bot, message, args);
  if (msg.startsWith(prefix + "avatar")) {

    if(message.mentions.members.first()) {
            //let avatar = new Discord.RichEmbed()
            message.channel.send(message.mentions.members.first().user.avatarURL); 
            
          }
          else {
            message.channel.send(message.author.avatarURL);
            }
          }
  

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

  
    
  
  

  
  


{
  if(msg.startsWith(prefix + "spermiasz"))
      message.channel.send("maku jebany i tanith kurwiacy");
}
      if(msg.startsWith(prefix + "grudziądz"))
      message.channel.send("kurwo szanuj grudziądz bo bikej cie znajdzie ");

      if(msg.startsWith(prefix + "antisocial"))
      message.channel.send("Stworzony przez bikeja. Hot Spot pedofili. Najwspanialszy serwer pod względem spierdolenia pozytywnego w Polszy i Grudziadzu");
      
      if(msg.startsWith(prefix + "jd"))
      message.channel.send("Jebać disa kurwe zwisa syna orka kurwe diabła jebanego! by Plebsu");

      if(msg.startsWith(prefix + "jm"))
      message.channel.send("Jebać maka kurwe pedofila najgorszego odpadka z anti szocialu.");
    
      if(msg.startsWith(prefix + "redaktor"))
      message.channel.send("Jebać kube guzika cwela jebanego.I te jego lokomotywe pierdoloną na CO2, chuj jej na kurwe co po wodzie jeździ");
      
      if(msg.startsWith(prefix + "trap"))
      message.channel.send("Trapy kurwiące jebiące chuj wam na kurwe żeby wam dętka w rowerze pierdolneła ")

      if(msg.startsWith(prefix + "tanith"))
      message.channel.send("Mod pierdolony spermiasz zachlany co małe dziewczynki od tyłu pyta o wiek.");

      if(msg.startsWith(prefix + "witamy"))
      message.channel.send("Witamy na Anti Socialu przybyszu. Życzymy miłego pobytu kurwa, zostajesz na własną odpowiedzialnośc jakby co");

      if(msg.startsWith(prefix + "pciola"))
      message.channel.send("Majecka pciola z zakazaną mordą, która nigdy nie pokaże dupy. Cnotka jak i zarazem spermiarz doskonały. Łowczyni głów pedofili");

      if(msg.startsWith(prefix + "monia"))
      message.channel.send("Duszyczka dziewczęca, dupera biggeja. TFASZ ANTI SOCIALU, dziecięca morda. TOP 3 HERE w kalamburach.");

      if(msg.startsWith(prefix + "łuki"))
      message.channel.send("Jebany gigant, ma taką pare w łapie żeby mógł przestawić fiata 126p z parkingu w Krakowie po czym przenieść go na swoich plecach na parking podziemny w Łęcznej");

      if(msg.startsWith(prefix + "enj"))
      message.channel.send("podróbka maka, zdobył w jeden prosty sposób tytuł naganiacza pedofili, mafiozo pedofil, juan pablo czworty. Prawa ręka Bikeja, trzyma wszystkie dziewczynki w niepewności kiedy wysyłają mu swoje nudle.");

      if(msg.startsWith(prefix + "maślak"))
      message.channel.send("Jebany maślak skurwysyn zaszczany. Najstarszy użytnik Anti socialu. Najlepszy Maślak miesiąca. Miszcz w chowanego, jebany poświęcił sie i schował sie w lodówce");

      if(msg.startsWith(prefix + "danger"))
      message.channel.send(" :sos: **Spis spermiarzy/pedofili:** :sos:  ``` Tanith | Enj | Maku | Typek z Ice Tower | Bohun | Krzyżak | Sanktus aka KREZUS | Naczelny ```   ");

      if(msg.startsWith(prefix + "patch"))
      message.channel.send("***-FameMMA 3***");

      if(msg.startsWith(prefix + "branoc"))
      message.channel.send("**Branoc słodkich snów, miłej nocy i miłego dnia!**");

      if(msg.startsWith(prefix + "bikej"))
      message.channel.send("Znany administrator, twórca i pomysłodawca serwera AntiSocial Society. Jest wielbiony przez małe dziewczynki, co często sie zdarza na głosowym. Jest za ruchem ogólno światowym **AntiSpermiarze** . Legenda z rozmów na skype, jebany gigant z parą w łapie. Mówią o nim bestia z grudziądza, nie mylić z bestią z wadowic.");

      if(msg.startsWith(prefix + "cycunie"))
      message.channel.send(" https://cdn.discordapp.com/attachments/421016932964237314/550720862211407872/comment_WJl5s9PGE1swiOwcAs3rub2zaHzHh52Ew400.jpg ");

      if(msg.startsWith(prefix + "pedofilia"))
      message.channel.send("§ 1. Kto obcuje płciowo z małoletnim poniżej lat 15 lub dopuszcza się wobec takiej osoby innej czynności seksualnej lub doprowadza ją do poddania się takim czynnościom albo do ich wykonania, podlega karze pozbawienia wolności od lat 2 do 12.");

      if(msg.startsWith(prefix + "paulinka"))
      message.channel.send("Ta Pauliś co mi kurwa zajebała 1 miejsce w karaoke, co giry jej śmierdzom jak halibut.");

      if(msg.startsWith(prefix + "krezus"))
      message.channel.send("Krauzer znany kiedyś jako pedofil legenda. Potrafi zabić a potem wyruchać ci matke bez większego problemu. Ojciec wszystkich spermiarzy, wyprowadził ich z rąk prokuratora, do ziemi nudesowej.");

      if(msg.startsWith(prefix + "lista"))
      message.channel.send("** ``` Spis Komend: ``` **  ** | >Danger | >Antisocial | >Enj | >Redaktor | >Paulinka | >Bikej | >Pedofilia | >Cycunie | >Branoc | >Maślak | >Monia | >Trap | >Nata | >Łuki | >Pciola | >Jd | >Jm | >Tanith | >Nata | >Krezus **");

      if(msg.startsWith(prefix + "szyszunie"))
      message.channel.send("https://cdn.discordapp.com/attachments/404664596582891522/551853055927386112/FB_IMG_1551469903135.jpg");


      if(msg.startsWith(prefix + 'lilpop'))
      message.channel.send("https://cdn.discordapp.com/attachments/421016932964237314/551855831382097940/r.jpg");

      if(msg.startsWith(prefix + 'nata'))
      message.channel.send("Dziewczyna Banan, ale heca nieprawdaż? Mała dziewczynka 16 letnia, co wali kreche w nos, i wyzywa typów równo **(ale we nie mnie bo mi smutno sie robi ;c)** Łowca pedofili. ");

      if(msg.startsWith(prefix + '2137'))
      message.channel.send("https://cdn.discordapp.com/attachments/421016932964237314/559433541705007141/21231286_119594228764735_2753832912447110250_n.jpg");
      
      if(msg.startsWith(prefix + 'famemma'))
      message.channel.send("Jebany polaku biedaku kup sobie a nie kurwa za darmo byś chciał, ty jebana podwalino ");
});





Music.start(bot, {
  youtubeKey: "AIzaSyCqhqk2_aBGHxayOfQZSo_JI7B_xA_OfCE" , 
  botPrefix: ">" ,
  //prefix: ">",
  //leaveAlt: ["dj", "DJ"],
  //embedColor: config.embed_color_h,
  global: false,
  anyoneCanSkip: true,
  anyoneCanPause: true,
  anyoneCanLeave: true,
  anyoneCanJoin: true,
  anyoneCanAdjust: true,
  maxQueueSize: 150
  //helpCmd: "help"
});

bot.login(TOKEN);