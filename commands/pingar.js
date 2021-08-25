module.exports.run = async  (client, msg, args, config) => {
msg.delete();
    if (!args[0]) return msg.reply('  [!] Você precisa escrever a mensagem!'.red)
    if (args.join(" ").length > 2048) return msg.reply('O texto excede 2048 caracters.')
    
    let channels = client.channels.array()
    console.log('Mensagens eviada para ' + channels.length + ' canal.')

    for(let i = 0; i < channels.length; i++) {
        try {
      await client.channels.get(channels[i].id).send(args.join(" "))
    } catch(err) {
    } 
    }
}
