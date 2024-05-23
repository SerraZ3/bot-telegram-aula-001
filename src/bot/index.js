const commandsConfig = require("../config/bot");

const Help = require("./Help");
const Information = require("./Information");
const Phrase = require("./Phrase");
const Greetings = require("./Greetings");
const AddGroup = require("./AddGroup");
const RemoveGroup = require("./RemoveGroup");

class Bot {
    constructor(bot) {
        this.bot = bot
    }

    execute = async () => {
        this.errorConfig();
        await this.startConfig();
        // Pega todas as mensagens
        this.bot.on("message", (message, metadata) => {
            console.log(message, metadata);
        });

        Information.execute(this.bot);
        Help.execute(this.bot);
        Phrase.execute(this.bot);
        Greetings.execute(this.bot);
        AddGroup.execute(this.bot);
        RemoveGroup.execute(this.bot);
    };
    startConfig = async () => {
        try {
            const changeCommands = await this.bot.setMyCommands(
                Object.keys(commandsConfig).map((command) => ({
                    command: commandsConfig[command].command,
                    description: commandsConfig[command].description,
                }))
            );
            console.log(changeCommands);
            // const updates = await this.bot.getUpdates();
            // console.log(updates);
        } catch (error) {
            console.log(error);
        }
    };
    errorConfig = () => {
        // set error callbacks
        this.bot.on("error", (msg) => console.log(`[bot] error:`, msg));
        this.bot.on("polling_error", (msg) =>
            console.log(`[bot] polling_error:`, msg)
        );
        this.bot.on("webhook_error", (msg) =>
            console.log(`[bot] webhook_error:`, msg)
        );
    };
}

module.exports = Bot