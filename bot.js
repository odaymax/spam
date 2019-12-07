const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("652758616444502037")
setInterval(function() {
channel.send(`طااااااااااااط سباااااااااااااااااااممممممممممممم `);
}, 30)
})

client.login(process.env.BOT_TOKEN);