const commandsConfig = require("../../config/bot");

class Greetings {
  execute = async (bot) => {
    bot.onText(commandsConfig.greetings.regex, (msg, match) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, "Olá");
      // Envio de sticker
      // file_id
      bot.sendSticker(chatId, "CAACAgIAAxkBAANFZk8PoUg0leBISuoQdks3J7tR8fEAAvIGAAJG-6wEsOcpWM-Q6ik1BA");
    });
  };
}
module.exports = new Greetings();
