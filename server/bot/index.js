/* eslint-disable max-len */
const TelegramApi = require('node-telegram-bot-api');
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3002;

const token = '5476046874:AAH6xdcFi8CQWdOOX_NeQRXSqQR4IgYvLRY';
const bot = new TelegramApi(token, { polling: true });

const start = async () => {
//   bot.setMyCommands([
//     { command: '/start', description: 'Start' },
//     { command: '/lampon', description: 'Turn Lamp On' },
//     { command: '/lampoff', description: 'Turn Lamp Off' },
//   ]);

  bot.on('message', async (msg) => {
    const { text } = msg;
    const chatId = msg.chat.id;
    // console.log(msg);

    try {
      if (text === '/start') {
        return bot.sendMessage(msg.chat.id, 'Welcome to Smart House. Choose one of the following commands in Menu', {
          reply_markup: {
            keyboard: [['Turn Lamp On', 'Turn Lamp Off'], ['Turn Socket On', 'Turn Socket Off']],
          },
        });
      }

      if (text === 'Turn Lamp On') {
        axios.get('http://localhost:3001/dev/funconbot')
          .then((res) => {
            if (res.data === 'OK') {
              return bot.sendMessage(chatId, 'Lamp is On');
            }
          });
      }
      if (text === 'Turn Lamp Off') {
        axios.get('http://localhost:3001/dev/funcoffbot')
          .then((res) => {
            if (res.data === 'OK') {
              return bot.sendMessage(chatId, 'Lamp is Off');
            }
          });
      }
    } catch (e) {
      return bot.sendMessage(chatId, 'Something went wrong!');
    }

    try {
      if (text === 'Turn Socket On') {
        axios.get('http://localhost:3001/dev/outletonbot')
          .then((res) => {
            if (res.data === 'OK') {
              return bot.sendMessage(chatId, 'Socket is On');
            }
          });
      }
      if (text === 'Turn Socket Off') {
        axios.get('http://localhost:3001/dev/outletoffbot')
          .then((res) => {
            if (res.data === 'OK') {
              return bot.sendMessage(chatId, 'Socket is Off');
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
