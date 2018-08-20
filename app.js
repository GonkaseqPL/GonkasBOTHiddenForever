const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on("ready", () => {
    console.log("Jestem gotów!");
});

client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix)) return;
})

client.on("message", message => {

    if(message.author.id !== config.ownerID) return;

    if(message.content.startsWith(config.prefix + "prefix")) {
      // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
      let newPrefix = message.content.split(" ").slice(1, 2)[0];
      // change the configuration in memory
      config.prefix = newPrefix;
    
      // Now we have to save the file.
      fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    } else
    
    if (message.author.bot) return;
    // This is where we'll put our code.
    if (message.content.indexOf(config.prefix) !== 0) return;
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Kick a single user in the mention
 

    if(command === 'pong') {
      message.channel.send('Ping!');
    } else
    if (command === 'blah') {
      message.channel.send('Meh.');
    } else

    if (command === "asl") {
      let age = args[0]; // Remember arrays are 0-based!.
      let sex = args[1];
      let location = args[2];
      message.reply(`Witaj, ${message.author.username}, Widzę że jesteś ${sex} ! Heh.`);
    } else

    if(command === "say"){
      let text = args.slice(1).join(" ");
      message.delete();
      message.channel.send(text);
    }
  });
client.login(config.token);