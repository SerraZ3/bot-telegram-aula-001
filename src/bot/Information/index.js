const commandsConfig = require("../../config/bot");

class Information {
  execute = async (bot) => {
    bot.onText(commandsConfig.info.regex, (msg, match) => {
      const chatId = msg.chat.id;
      bot.sendMessage(
        chatId,
        "Esse Bot foi desenvolvido por Henrique Serra (@SerraZ) para Aula no Sinform"
      );
    });
  };
}
module.exports = new Information();
