import { Telegraf } from "telegraf";

const { BOT_TOKEN, WEB_APP_URL } = process.env;

const LaunchVBot = () => {
  const bot = new Telegraf(BOT_TOKEN, {});
  bot.start((ctx) => {
    ctx.setChatMenuButton({
      text: "Game",
      type: "web_app",
      web_app: { url: WEB_APP_URL },
    });
  });

  bot.launch();
};

export default LaunchVBot;