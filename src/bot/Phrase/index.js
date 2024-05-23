const commandsConfig = require("../../config/bot");
const phrases = [
  "Tudo que vai, volta",
  "Três palavras que me resumem: tô com fome!",
  "Quem cedo madruga passa o dia com sono.",
  "A melhor coisa do meu trabalho é quando ele chega ao fim.",
  "Evite doces, frituras e invejosos!"
]

class Phrase {
  execute = async (bot) => {
    bot.onText(commandsConfig.phrase.regex, (msg, match) => {
      const chatId = msg.chat.id;
      const randomNumber = Math.floor(Math.random() * phrases.length)
      console.log(randomNumber)
      const phrase = phrases[randomNumber] || phrases[0]

      bot.sendMessage(chatId, phrase);
    });
  };
}
module.exports = new Phrase();
