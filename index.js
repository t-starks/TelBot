const TelegramBot = require('node-telegram-bot-api');
const token = 'TOKEN_DE_ACCESO'; // Reemplaza TOKEN_DE_ACCESO por el token que te dio BotFather
const bot = new TelegramBot(token, {polling: true});

const commands = require('./commands'); // Importa los comandos desde el archivo commands.js

// Comando /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '¡Hola! Soy tu bot de Telegram. \nUtiliza /help para ver los comandos.');
});

// Comando /help
bot.onText(/\/help/, (msg) => {
  let message = 'Los siguientes comandos están disponibles:\n\n';

  for (let command in commands) {
    message += `/${command}: ${commands[command]}\n`;
  }

  bot.sendMessage(msg.chat.id, message);
});

// Comando /ping
bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Pong!');
});
