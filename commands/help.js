const Discord = require('discord.js'),
  config = require("../config.json");

module.exports.run = (client, message) => {
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('Chɨll', message.author.displayAvatarURL)
    .addField('nuke', ' ``Nuke the all server channels and roles.``', true)
    .addField('chn', ' ``Create the raid channels.``', true)
    .addField('everyones', ' ``Make an everyones flood.``', true)
    .addField('purge', ' ``Remove the inactive members (1 day).``', true)
    .addField('roni', ' ``Bugs and disable the Roni bot.``', true)
    .addField('banall', ' ``Ban all server members.``', true)
    .addField('cl', ' ``Deleted all messages.``', true)
    .addField('Voice', ' `` Crie canais de voz.``', true)
    .addField('Av', ' ``Pegue o avatar de qualquer usario.``', true)
    .setFooter(`Hype - by Chɨll`)
    .setColor("#000000")
    .setImage('https://media0.giphy.com/media/2xS9dTuuaKYfJks4Dg/200.gif?cid=790b7611ff7fa88d7fc0ebb0b70609638111268529929936&rid=200.gif&ct=g')
    .setImage('https://media0.giphy.com/media/2xS9dTuuaKYfJks4Dg/200.gif?cid=790b7611ff7fa88d7fc0ebb0b70609638111268529929936&rid=200.gif&ct=g')
    message.channel.send(embed);
}