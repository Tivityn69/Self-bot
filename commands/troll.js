const discord = require('discord.js')
const config = require("../config.json");

prefix = config.prefix

exports.run = async (client, message) => {
    message.delete()
    let nukeEmbed = new discord.RichEmbed()
    .setColor("#000000")
    .setTitle("by Chɨll")
    .setDescription(`≪━─━─━─━─━─━◈━─━─━─━─━─━≫`)
    .addField(prefix + 'carregar', '`𝐂𝐚𝐫𝐫𝐞𝐠𝐚𝐫 𝐛𝐚𝐫𝐫𝐚`', true)
    .setThumbnail("https://media.discordapp.net/attachments/831561075085934605/845005269225963520/563c670919911ed41edba32b57e3dc08.gif")
    .setFooter(`https://discord.gg/uqA6Zn5Z`);
  message.channel.sendMessage(nukeEmbed);
  
}