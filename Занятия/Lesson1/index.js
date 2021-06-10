// let i = 3;
// i = i++;
// console.log(i); // результат работы второй операции с цифрой 3 ничего не сделает

// let i = 3;
// i = ++i++;
// console.log(i); // результатом будет число, а нужно переменная i по этому ошибка

// let x, y;
// y = (x = 1 + 2) + 4;
// console.log(x, y); // 3 7

// console.log("Сейчас будет оишбка"); 
// [1,2].forEach(console.log); // перебор

// for (let i = 0; i < 10; i++){
//     console.log(i);
// } 
// //  0 1 2 3 4 5 6 7 8 9 10

// for (var i = 0; i < 10; i++){
//     setTimeout(function(){
//     console.log(i);
// }, 100);
// }

// // если var то будет 10, если let то 0 - 9 
// let i = 0
// for (; i < 10; i++){
//     setTimeout(function(){
//     console.log(i);
// }, 100);
// }
// console.log(i);

// let f = function(x){
//     console.log(x)
// };

// (function(){
//     f(1)
// }())


// Чат бот Телеграм

const { Telegraf } = require('telegraf')

const bot = new Telegraf('1755718263:AAEw7SJ59ymXmPL2mkUHpeIuH91ko2pFq9s')

let id;

bot.command('hello', (ctx) => {
    id = ctx.message.chat.id;
    ctx.telegram.sendMessage(id, 'Hello' + id);
});

bot.launch();

setInterval (function(){
    if(id)
    bot.telegram.sendMessage(id, "Жду недождусь командусь")
}, 1000);