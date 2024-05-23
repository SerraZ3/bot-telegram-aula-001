const commandsConfig = require("../../config/bot");

class AddGroup {
  execute = async (bot) => {
    bot.onText(commandsConfig.group.regex, (msg, match) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, "Acesse o link a baixo para entrar no grupo da aula");
      bot.sendSticker(chatId, "CAACAgIAAxkBAANFZk8PoUg0leBISuoQdks3J7tR8fEAAvIGAAJG-6wEsOcpWM-Q6ik1BA");
      bot.sendMessage(chatId, "Infelizmente o telegram não permite que eu te adicione ao grupo, mas permite que eu envie o link de acesso ou gere um link único só pra você!");
      bot.sendMessage(chatId, "https://t.me/+bFEr2J0B0rMzOTAx");

      // Envio de sticker
      // file_id
    });
  };
}
module.exports = new AddGroup();
