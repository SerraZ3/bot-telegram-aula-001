require("dotenv").config();
const telegramConfig = require("./config/telegram.js");
const Bot = require("./bot/index.js");
const TelegramBot = require("node-telegram-bot-api");

const bot = new Bot(new TelegramBot(telegramConfig.token, { polling: true }));
bot.execute();