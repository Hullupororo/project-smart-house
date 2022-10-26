const TelegramApi = require('node-telegram-bot-api');
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3002;

const token = '5476046874:AAH6xdcFi8CQWdOOX_NeQRXSqQR4IgYvLRY';
const bot = new TelegramApi(token, { polling: true });

const start = async () => {
  bot.setMyCommands([
    { command: '/start', description: 'Start' },
    { command: '/lampon', description: 'Turn Lamp On' },
    { command: '/lampoff', description: 'Turn Lamp Off' },
  ]);

  bot.on('message', async (msg) => {
    const { text } = msg;
    const chatId = msg.chat.id;

    try {
      if (text === '/start') {
        return bot.sendMessage(chatId, 'Welcome to Smart House ');
      }

      if (text === '/lampon') {
        axios.get('http://localhost:3001/dev/funconbot')
          .then((res) => {
            if (res.data === 'OK') {
              return bot.sendMessage(chatId, 'Lamp is on');
            }
          });
      }
      if (text === '/lampoff') {
        axios.get('http://localhost:3001/dev/funcoffbot')
          .then((res) => {
            if (res.data === 'OK') {
              return bot.sendMessage(chatId, 'Lamp is off');
            }
          });
      }
    } catch (e) {
      return bot.sendMessage(chatId, 'Something went wrong!');
    }
  });
};
app.listen(PORT, console.log(`SERVER STARTED ON ${PORT}`));
start();
