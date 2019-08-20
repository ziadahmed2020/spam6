const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("612693817430376481")
setInterval(function() {
channel.send(`spam spamspamspamspamspam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKEN2);