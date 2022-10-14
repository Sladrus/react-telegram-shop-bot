const TelegramBot = require("node-telegram-bot-api");

const token = "5720706894:AAHniPPoPkGCTpO2xgzP3ACOd0AfszRNPok";
const webAppUrl = "https://sladrus.github.io/react-dogs-app";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  const keyboardOptions = {
    parse_mode: "html",
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: "Website", web_app: { url: webAppUrl } }]],
    }),
  };

  if (text === "/start") {
    await bot.sendMessage(chatId, "Открыть магазин", keyboardOptions);
  }
});
