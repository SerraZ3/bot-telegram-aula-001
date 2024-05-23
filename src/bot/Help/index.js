const commandsConfig = require("../../config/bot");

class Help {
  execute = async (bot) => {
    bot.onText(commandsConfig.help.regex, (msg, match) => {
      const chatId = msg.chat.id;
      bot.sendMessage(
        chatId,
        `
        Para ver meus comandos basta digitar /
        `
      );
    });
  };
}
module.exports = new Help();
