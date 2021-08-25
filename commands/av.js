const discord = require('discord.js')

exports.run = async (client, message, args) => {
const user = message.mentions.users.first() || message.author;
let avatarEmbed = new discord.RichEmbed()
      .setTitle("Chɨll .av")
      .setColor(`#000000`)
      .setImage(user.avatarURL)
      .setFooter(`Não tente ser oque você não é!`)
    message.channel.send(avatarEmbed);
}