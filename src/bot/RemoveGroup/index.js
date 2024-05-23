const badList = {

}
class RemoveGroup {
  execute = async (bot) => {
    bot.onText(new RegExp(`\/*(baixaria)`, "i"), (msg, match) => {
      const chatId = msg.chat.id;
      if (badList[msg.from.id] && badList[msg.from.id].count === 5) {
        bot.sendMessage(chatId, `Eu avisei! Hasta la vista, baby`);

        bot.sendSticker(chatId, "CAACAgIAAxkBAAOcZk8VzVV_BhmPK8d9-40QQBL0wp4AAhwCAAM4oApSwUWcfziCYDUE");
        bot.banChatMember(chatId, msg.from.id)
        return
      }
      bot.sendMessage(chatId, `Ow, por que você está falando baixaria? ${badList[msg.from.id] && badList[msg.from.id].count ? `Você já está na minha lista! Se repetir mais ${5 - badList[msg.from.id].count} vezes irei te expulsar` : "Você entrou na minha lista de péssimos usuários!"} `);
      if (badList[msg.from.id]) {
        badList[msg.from.id].count += 1
      } else {
        badList[msg.from.id] = {
          count: 1
        }
      }
      bot.sendSticker(chatId, "CAACAgIAAxkBAANqZk8Tdo11WkREzEhAy70uR1Z9aPYAAhIHAAJG-6wEXiH4XaZEdpE1BA");

      // Envio de sticker
      // file_id
    });
  };
}
module.exports = new RemoveGroup();
