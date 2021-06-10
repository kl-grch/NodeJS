const { Telegraf } = require('telegraf')

const bot = new Telegraf('1755718263:AAEw7SJ59ymXmPL2mkUHpeIuH91ko2pFq9s')

bot.command('hello', (ctx) => {
    let id = ctx.message.chat.id;
    ctx.telegram.sendMessage(id, 'Hello' + id);
});

bot.launch();