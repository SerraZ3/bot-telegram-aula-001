
const telegramConfig = {
    token: process.env.API_BOT || "",
    stripe: process.env.API_STRIPE || "",
};
module.exports = telegramConfig;